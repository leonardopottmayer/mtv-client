import React, { useRef, useEffect } from "react";

import styles from "./AddModal.module.css";

import api from "../../../services/api";

function AddModal(props) {
  const phraseRef = useRef("");
  const authorRef = useRef("");

  const handleAddPhrase = async (e) => {
    try {
      e.preventDefault();

      await api.post("/admin/phrase", {
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
        <h1 className={styles.modal_title}>Add new phrase</h1>

        <form className={styles.modal_form} onSubmit={handleAddPhrase}>
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
        <button className={styles.confirm_button} onClick={handleAddPhrase}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default AddModal;
