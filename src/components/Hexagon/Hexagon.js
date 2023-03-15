import React from "react";

import styles from "./styles.module.css";

const HexagonImage = ({ src }) => {
  return <img src={src} alt="" className={styles.hexagon} />;
};

export default HexagonImage;
