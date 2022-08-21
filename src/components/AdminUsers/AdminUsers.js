import React, { useState, useEffect } from "react";

import Navbar from "../../components/AdminNavbar/Navbar";

import api from "../../services/api";

import styles from "./AdminUsers.module.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const AdminUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [waitingUsers, setWaitingUsers] = useState([]);

  const fetchData = async () => {
    let response = await api.get("/admin/user/active");
    setActiveUsers(response.data.result);

    response = await api.get("/admin/user/waiting");
    setWaitingUsers(response.data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApproveUser = async (e) => {
    await api.post(`/admin/user/${e.target.value}/approve`);
    fetchData();
  };

  const handleBlockUser = async (e) => {
    await api.post(`/admin/user/${e.target.value}/block`);
    fetchData();
  };

  const handleDeleteUser = async (e) => {
    await api.delete(`/admin/user/${e.target.value}`);
    fetchData();
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <Container fluid>
        <Row>
          <Col className={styles.column}>
            <h1>Active users: {activeUsers.length}</h1>
            <div className={styles.table_container}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-Mail</th>
                    <th>Tel</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeUsers.map((au) => (
                    <tr key={au._id}>
                      <td>{au.name}</td>
                      <td>{au.username}</td>
                      <td>{au.email}</td>
                      <td>{au.tel}</td>
                      <td>
                        <button
                          className={styles.delete_button}
                          value={au._id}
                          onClick={handleBlockUser}
                        >
                          Block
                        </button>
                        <button
                          className={styles.delete_button}
                          value={au._id}
                          onClick={handleDeleteUser}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
          <Col className={styles.column}>
            <h1>Users waiting for approval: {waitingUsers.length}</h1>
            <div className={styles.table_container}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>E-Mail</th>
                    <th>Tel</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {waitingUsers.map((wu) => (
                    <tr key={wu._id}>
                      <td>{wu.name}</td>
                      <td>{wu.username}</td>
                      <td>{wu.email}</td>
                      <td>{wu.tel}</td>
                      <td>
                        <button
                          className={styles.confirm_button}
                          value={wu._id}
                          onClick={handleApproveUser}
                        >
                          Approve
                        </button>
                        <button
                          className={styles.delete_button}
                          value={wu._id}
                          onClick={handleDeleteUser}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminUsers;
