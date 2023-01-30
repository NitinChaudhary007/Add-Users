import React, { useState } from "react";
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = { key: Math.random(), name: enteredName, age: enteredAge };
    props.fun(newUser);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.userForm}>
        <div className={styles.formDiv}>
          <label>User Name</label>
          <input type="text" onChange={userNameHandler} value={enteredName} ></input>

          <label>Age</label>
          <input type="text" onChange={ageHandler} value={enteredAge} ></input>

          <button type="submit" className={styles.formButton}>
            Add Users
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
