import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>Dashboard</h1>
      <div className={styles.container}>
        <div className={styles.febricStyles}></div>
        <div className={styles.paintArea}></div>
      </div>
      <div className={styles.controllers}></div>
    </div>
  );
};

export default Dashboard;
