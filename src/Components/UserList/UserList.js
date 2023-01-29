import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.userList}>
      <div className={styles.userList__box}>
        <div className={styles.userList__border}>
            <p> {props.users[0].name} {"("} {+props.users[0].age} {")"} </p>
            <p> {props.users[1].name} {"("} {+props.users[1].age} {")"} </p>
        </div>
      </div>
    </div>
  );
};

export default UserList;
