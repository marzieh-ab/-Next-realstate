import React from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./TextList.module.css";

function TextList({ title, profileData, setProfileData, type }) {
  console.log(profileData[type], "type");

  const addHandler = () => {
    setProfileData({
      ...profileData,
      [type]: [...profileData[type], ""],
    });
  };
  const deleteHandler = (index) => {
    console.log(index, "index");
    const list = [...profileData[type]];

    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    console.log(value, "value");
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            // value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={() => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
