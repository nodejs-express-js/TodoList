import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import useSignup from '../../Hooks/useSignup';
import styles from './Signup.module.css'; // Import CSS module

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, isloading, signup } = useSignup();

  const signupHandler = () => {
    signup(email, password);
  };

  return (
    <div>
      <Navbar />
      <form className={styles.formContainer}>
        <label className={styles.label}>Email</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <label className={styles.label}>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button
          onClick={signupHandler}
          disabled={isloading}
          className={styles.button}
        >
          {isloading ? 'Signing up...' : 'Signup'}
        </button>
        <div className={styles.error}>{error && error}</div>
      </form>
    </div>
  );
};

export default Signup;
