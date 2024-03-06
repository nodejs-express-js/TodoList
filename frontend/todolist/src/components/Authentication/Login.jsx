import React, { useState } from 'react';
import { useLogin } from '../../Hooks/useLogin';
import { Navbar } from '../Navbar';
import { useUser } from '../../Hooks/useUser';
import styles from './Login.module.css'; // Import CSS module

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, isloading, login } = useLogin();

  const loginHandler = async () => {
    login(email, password);
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
          onClick={loginHandler}
          disabled={isloading}
          className={styles.button}
        >
          {isloading ? 'Logging in...' : 'Login'}
        </button>
        <div className={styles.error}>{error && error}</div>
      </form>
    </div>
  );
};

export default Login;
