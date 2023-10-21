import React from "react";
import styles from "./DashboardCard.module.css";
import Card from "./Card";

function DashboardCard({ data }) {
  console.log(data, "datatttttt");
  return (
    <div className={styles.container}>
      <Card data={data} />
    </div>
  );
}

export default DashboardCard;
