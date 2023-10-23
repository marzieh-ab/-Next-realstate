import React from "react";
import styles from "./DashboardSidebar.module.css";
import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "../module/LogoutButton";

async function DashboardSidebar({ children, email, role }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <CgProfile />
          {role === "ADMIN" ? "Admin" : ""}
          <p>{email}</p>
          <Link href="/dashboard">حساب کاربری</Link>
          <Link href="/dashboard/my-profiles">آگهی های من</Link>
          <Link href="/dashboard/add">ثبت آگهی</Link>
          <LogoutButton />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}

export default DashboardSidebar;
