import React from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const UsersList = (props) => {
  console.log(props.users);

  return (
    <Card className={styles.users} >
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
