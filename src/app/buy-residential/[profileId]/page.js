import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import React from "react";
import DetailsPage from "src/component/template/DetailsPage";

async function ProfilesDetaiels({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;
  console.log(profile);

  return <DetailsPage data={profile} />;
}

export default ProfilesDetaiels;
