import React from "react";
import HexagonImage from "../../../Hexagon/Hexagon";
import { user } from "../../../../images/image";
import styles from "./styles.module.css";

const WhoToFollow = ({ showWhotoFollow }) => {
  const data = [
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
    {
      userImage: user,
      userName: "juanbautista.eth",
      to: "",
    },
  ];
  return (
    <div
      className={`${styles.whotoFollow} ${
        showWhotoFollow && styles.showWhotoFollow
      } marginTop`}
    >
      <h4 className={styles.title}>Find Friends</h4>

      {data.map((el, i) => (
        <div className={styles.userContainer} key={i}>
          <div className={styles.uerImageAndName}>
            <div className={styles.userImage}>
              <HexagonImage src={el.userImage} />
            </div>
            <p className={styles.userName}>{el.userName}</p>
          </div>
          <button className={styles.addFriend}>Add friends</button>
        </div>
      ))}
      <p className={styles.showMore}>Show more</p>
    </div>
  );
};

export default WhoToFollow;
