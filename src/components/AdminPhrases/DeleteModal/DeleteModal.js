import React, { useState, useEffect } from "react";

import styles from "./DeleteModal.module.css";

import api from "../../../services/api";

function DeleteModal(props) {
  const [phrase, setPhrase] = useState({});

  const handleDeletePhrase = async () => {
    await api.delete(`/admin/phrase/${props.selectedPhrase}`);

    props.closeModal();
  };

  const fetchData = async () => {
    const response = await api.get(`/admin/phrase/${props.selectedPhrase}`);
    setPhrase(response.data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal}>
        <h1 className={styles.modal_title}>
          Are you sure you want to delete this phrase?
        </h1>
        <p className={styles.phrase_item}>{phrase.phrase}</p>
        <p className={styles.phrase_item}>{phrase.author}</p>
        <button className={styles.cancel_button} onClick={props.closeModal}>
          Cancel
        </button>
        <button className={styles.delete_button} onClick={handleDeletePhrase}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
