import { getServerSession } from "next-auth";
import React from "react";

import DashboardSidebar from "src/component/layout/DashboardSidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user) return <h3>مشکلی پیش آمده است</h3>;
  <DashboardSidebar role={user.role} email={user.email}>
    {children}
  </DashboardSidebar>;
}

export default layout;
