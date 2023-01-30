import styles from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={styles.userList}>
      <div className={styles.userList__box}>
        <div className={styles.userList__border}>
          {props.users.map((user) => {
            <p>{user}</p>;
            console.log(user.name);

          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
