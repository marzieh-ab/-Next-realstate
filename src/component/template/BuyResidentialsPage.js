import React from "react";
import styles from "./BuyResidentialsPage.module.css";
import Card from "../module/Card";
import Sidebar from "../module/Sidebar";

async function BuyResidentialsPage({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
