import React from "./styles.module.css";
import styles from "./styles.module.css";

const DeletePost = ({ setModal }) => {
  return (
    <>
      <div onClick={() => setModal(false)} className={styles.overlay}></div>
      <div className={styles.smallModal}>
        <p>
          Are your sure you want to delete this <br /> post?
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.invertBtn} onClick={() => setModal(false)}>
            Yes
          </button>
          <button className={styles.button} onClick={() => setModal(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
};
export default DeletePost;
