import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
