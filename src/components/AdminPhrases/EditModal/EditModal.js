import React, { useRef, useEffect, useState } from "react";

import styles from "./EditModal.module.css";

import api from "../../../services/api";

function EditModal(props) {
  const phraseRef = useRef("");
  const authorRef = useRef("");

  const fetchData = async () => {
    const response = await api.get(`/admin/phrase/${props.selectedPhrase}`);
    phraseRef.current.value = response.data.result.phrase;
    authorRef.current.value = response.data.result.author;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditPhrase = async (e) => {
    try {
      e.preventDefault();

      await api.patch("/admin/phrase", {
        phraseId: props.selectedPhrase,
        phrase: phraseRef.current.value,
        author: authorRef.current.value,
      });

      props.closeModal();
    } catch (error) {
      alert(
        "Please check your data. Those inputs can't be empty! If there's no author use '-unknown'!"
      );

      props.closeModal();
    }
  };

  return (
    <div className={styles.modal_background}>
      <div className={styles.modal}>
        <h1 className={styles.modal_title}>Edit phrase</h1>

        <form className={styles.modal_form}>
          <label className={styles.modal_label} htmlFor="add-phrase-phrase">
            Phrase
          </label>
          <textarea
            placeholder="Type the phrase here"
            className={styles.modal_textarea}
            name="Phrase"
            id="add-phrase-phrase"
            cols="30"
            rows="5"
            required
            value={phraseRef.current.value}
            ref={phraseRef}
          ></textarea>

          <label className={styles.modal_label} htmlFor="add-phrase-author">
            Author
          </label>
          <input
            placeholder="Type the author here"
            className={styles.modal_input}
            type="text"
            name="Author"
            id="add-phrase-author"
            required
            value={authorRef.current.value}
            ref={authorRef}
          />
        </form>

        <button className={styles.cancel_button} onClick={props.closeModal}>
          Cancel
        </button>
        <button className={styles.confirm_button} onClick={handleEditPhrase}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default EditModal;
