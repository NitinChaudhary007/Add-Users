import React, { useState } from "react";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {

   const [userName, setUserName] = useState("");
   const [age, setAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const addUserHandler = (event) => {
    props.fun(userName, age);
  };  

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.userForm}>
        <div className={styles.formDiv}>
          <label>User Name</label>
          <input type="text" onChange={userNameHandler} ></input>
          <label>Age</label>
          <input type="text" onChange={ageHandler} ></input>
          <button className={styles.formButton} onClick={addUserHandler} >Add Users</button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
