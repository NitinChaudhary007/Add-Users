import styles from "./AddUserForm.module.css";

const AddUserForm = () => {
  return (
    <form>
      <div className={styles.userForm}>
        <div className={styles.formDiv}>
          <label>User Name</label>
          <input type="text"></input>
          <label>Age</label>
          <input type="text"></input>
          <button className={styles.formButton}>Add Users</button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
