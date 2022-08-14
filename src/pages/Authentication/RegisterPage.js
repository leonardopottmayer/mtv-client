import React, { useState, useContext } from "react";

import styles from "./RegisterPage.module.css";

import AuthContext from "../../contexts/auth";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const context = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      username: username,
      email: email,
      tel: tel,
      password: password,
      confirmpassword: confirmPassword,
    };

    await context.register(data);
  };

  return (
    <div className={styles.main}>
      <div className={styles.register_container}>
        <h1 className={styles.register_title}>e-finance</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">💬</InputGroup.Text>
            <Form.Control
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Name"
              aria-describedby="nameinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-label="Username"
              aria-describedby="usernameinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">📧</InputGroup.Text>
            <Form.Control
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              aria-label="Email"
              aria-describedby="emailinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">📱</InputGroup.Text>
            <Form.Control
              placeholder="Tel"
              name="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
              type="tel"
              aria-label="Tel"
              aria-describedby="telinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
            <Form.Control
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              aria-label="Password"
              aria-describedby="passwordinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
            <Form.Control
              placeholder="Confirm password"
              name="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              type="password"
              aria-label="Confirm password"
              aria-describedby="confirmpasswordinput"
            />
          </InputGroup>
          <a className={styles.signin_link} href="/login">
            Or Sign In
          </a>
          <input
            className={styles.button_input}
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
