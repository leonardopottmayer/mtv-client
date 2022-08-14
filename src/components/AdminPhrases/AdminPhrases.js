import React, { useState, useEffect } from "react";

import Navbar from "../../components/AdminNavbar/Navbar";

import api from "../../services/api";

import styles from "./AdminPhrases.module.css";

import DeleteModal from "./DeleteModal/DeleteModal";
import AddModal from "./AddModal/AddModal";
import EditModal from "./EditModal/EditModal";

const AdminPhrases = () => {
  const [phrases, setPhrases] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState("");

  const handleShowDeleteModal = (e) => {
    setSelectedPhrase(e.target.value);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedPhrase(null);
    fetchData();
    setShowDeleteModal(false);
  };

  const handleShowAddModal = (e) => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    fetchData();
    setShowAddModal(false);
  };

  const handleShowEditModal = (e) => {
    setSelectedPhrase(e.target.value);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    fetchData();
    setSelectedPhrase(null);
    setShowEditModal(false);
  };

  const fetchData = async () => {
    const response = await api.get("/admin/phrase");
    setPhrases(response.data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {showAddModal && <AddModal closeModal={handleCloseAddModal} />}
      {showDeleteModal && (
        <DeleteModal
          selectedPhrase={selectedPhrase}
          closeModal={handleCloseDeleteModal}
        />
      )}
      {showEditModal && (
        <EditModal
          selectedPhrase={selectedPhrase}
          closeModal={handleCloseEditModal}
        />
      )}
      <Navbar />

      <div className={styles.add_button_container}>
        <h1>Phrases count: {phrases.length}</h1>
        <button className={styles.add_button} onClick={handleShowAddModal}>
          Add
        </button>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Phrase</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((ph) => (
              <tr key={ph._id}>
                <td>{ph.phrase}</td>
                <td>{ph.author}</td>
                <td>
                  <button
                    className={styles.delete_button}
                    value={ph._id}
                    onClick={handleShowDeleteModal}
                  >
                    Delete
                  </button>
                  <button
                    className={styles.edit_button}
                    value={ph._id}
                    onClick={handleShowEditModal}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <ul>
        {phrases.map((ph) => (
          <li key={ph._id}>{ph.author}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default AdminPhrases;
