"use client";
import { useState } from "react";
import styles from "./register.module.css";

export default function Register() {
  const [crediential, setCredential] = useState({
    email: "",
    password: "",
  });

  function handleCredentialChange(event) {
    const { name, value } = event.target;
    setCredential({
      ...crediential,
      [name]: value,
    });
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(crediential);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.registerForm}>
          <label htmlFor="email">email:</label>
          <input
            id="email"
            name="email"
            value={crediential.email}
            onChange={(event) => handleCredentialChange(event)}
          ></input>
          <label htmlFor="password">mot de passe</label>
          <input
            id="password"
            name="password"
            value={crediential.password}
            onChange={(event) => handleCredentialChange(event)}
          ></input>
          <button
            type="submit"
            className={styles.registerButton}
            onClick={(event) => handleOnSubmit(event)}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
