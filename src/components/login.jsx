import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    const usernamePattern = /^[a-zA-Z0-9]{4,}$/;
    if (!usernamePattern.test(username)) {
      setErrorMessage(
        "Username must be at least 4 characters long and contain only letters and numbers."
      );
      return;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    // Simulate successful login
    alert(`Welcome, ${username}!`);
    // Simulate navigation to catalogue page
    window.location.href = "/catalogue";
  };

  return (
    <div className={styles.loginBody}>
      <div className={styles.inputForm}>
        <div className={styles.welcome}>Welcome</div>
        <div className={styles.msg}>Please enter your details to sign in.</div>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <div className={styles.cred}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className={styles.label}>
              User Name
            </label>
            <input
              className={styles.input}
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              className={styles.input}
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className={styles.login}>
              Login
            </button>
          </form>
        </div>
        <div className={styles.signupLink}>
          First time user?{" "}
          <Link to='/SignUp' className={styles.link}>Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;