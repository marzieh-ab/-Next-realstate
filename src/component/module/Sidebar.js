import React from "react";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
import Link from "next/link";
function Sidebar() {
  const queries = [
    { apartment: "آپارتمان" },
    { villa: "ویلا" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {queries.map((query) => {
        return (
          <Link
            href={{
              pathname: "/buy-residential",
              query: { category: Object.keys(query) },
            }}
          >
            {Object.values(query)}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
