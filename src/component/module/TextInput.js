import React from "react";
import style from "./TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";

function TextInput({
  name,
  title,
  setProfileData,
  profileData,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return (
    <div className={style.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
