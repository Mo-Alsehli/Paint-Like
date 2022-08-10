import React from "react";
import styles from "./login.module.css";
const Login = () => {
  return (
    <div className={styles.mainPage}>
      {/* <video
        autoPlay
        muted
        loop
        className={styles.bcgVideo}
        src="D:\Work-Space\Paint-Like\client\assets\bcgVideo.mp4"
      ></video> */}
      <div className={styles.login}>
        <h1 className={styles.header}>Live Designer</h1>
        <p className={styles.description}>Welcome to Live Designer</p>
        <form className={styles.loginForm}>
          <label>Username Or Email</label>
          <input className={styles.formInput} type="text" />
          <label>Password</label>
          <input className={styles.formInput} type="password" />
          <button type="submit" className={styles.submitBtn}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
