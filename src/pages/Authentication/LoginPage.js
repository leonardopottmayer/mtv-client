import React, { useState, useContext } from "react";

import styles from "./LoginPage.module.css";

import AuthContext from "../../contexts/auth";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      emailOrUsername: usernameOrEmail,
      password: password,
    };

    await context.login(data);
  };

  return (
    <div className={styles.main}>
      <div className={styles.login_container}>
        <h1 className={styles.login_title}>e-finance</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username or E-Mail"
              name="emailOrUsername"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
              aria-label="Username"
              aria-describedby="usernameinput"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
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
          <a className={styles.signup_link} href="/register">
            Or Sign Up
          </a>
          <input
            className={styles.button_input}
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
