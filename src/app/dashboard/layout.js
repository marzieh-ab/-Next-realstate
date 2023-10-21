import { getServerSession } from "next-auth";
import React from "react";

import DashboardSidebar from "src/component/layout/DashboardSidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default layout;
