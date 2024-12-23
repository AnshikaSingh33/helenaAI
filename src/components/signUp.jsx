import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    const usernamePattern = /^[a-zA-Z0-9]{4,}$/;
    if (!usernamePattern.test(username)) {
      alert(
        "Username must be at least 4 characters long and contain only letters and numbers."
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password.");
      return;
    }

    alert(`Account created successfully for ${username}!`);
    // Simulate navigation to the catalogue page
    window.location.href = "/catalogue";
  };

  return (
    <div className={styles.signUpBody}>
      <div className={styles.inputForm}>
        <div className={styles.welcome}>Create Account</div>
        <div className={styles.msg}>Please enter your details to sign up.</div>
        <form onSubmit={handleSubmit} className={styles.cred}>
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
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="confirmPassword" className={styles.label}>
            Re-enter Password
          </label>
          <input
            className={styles.input}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.signUp}>
            Sign Up
          </button>
        </form>
        <div className={styles.loginLink}>
          Already have an account?{" "}
          <Link to="/Login">Log in</Link>
          {/* <a href="/login" className={styles.link}>
            Log in
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;