import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";
import AddProfilePage from "src/component/template/AddProfilePage";

async function page(props) {
  const id = props.params.profileId;
  await connectDB();
  const profile = await Profile.findOne({ _id: id });

  if (!profile) return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;

  return (
    <div>
      <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
    </div>
  );
}

export default page;
