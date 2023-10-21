import React from "react";
import DashboardPage from "./../../component/template/DashboardPage";
import { Connection } from "mongoose";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return (
    <div>
  return <DashboardPage createdAt={user.createdAt} />;
    </div>
  );
}

export default Dashboard;
