import React from "react";
import Signin from "src/component/template/Signin";
import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
    if(session){redirect("/")}
  return (
    <div>
    
      <Signin />
    </div>
  );
}

export default page;
