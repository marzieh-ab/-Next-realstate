"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();
  // console.log(data);
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        {data ? (
          <Link href="/dashboard">
            <FaUserAlt />
            <span>{data.user.email}</span>
          </Link>
        ) : (
          <Link href="/signup">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
