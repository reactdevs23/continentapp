import React, { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";

import WhoToFollow from "../WhoToFollow/WhoToFollow";

import SinglePost from "./SinglePost/SinglePost";
import styles from "./styles.module.css";

const Posts = ({ data }) => {
  const [showWhotoFollow, setShowWhotoFollow] = useState(false);

  return (
    <>
      <div className={`${styles.postsWrapper} marginTop `}>
        <div className={`${styles.posts} `}>
          {data.map((el, i) => (
            <SinglePost data={el} i={i + 1} key={i} />
          ))}
        </div>
        {showWhotoFollow ? (
          <BsFillCaretLeftSquareFill
            className={styles.arrow}
            onClick={() => setShowWhotoFollow((prev) => !prev)}
          />
        ) : (
          <BsFillCaretRightSquareFill
            className={styles.arrow}
            onClick={() => setShowWhotoFollow((prev) => !prev)}
          />
        )}

        <WhoToFollow showWhotoFollow={showWhotoFollow} />
      </div>{" "}
    </>
  );
};

export default Posts;
{
  /* <SinglePost data={el} key={i} /> */
}
