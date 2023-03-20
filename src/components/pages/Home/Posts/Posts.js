import React, { useState } from "react";
import {
  BsFillCaretRightSquareFill,
  BsFillCaretLeftSquareFill,
} from "react-icons/bs";
import { postImage } from "../../../../images/image";
import WhoToFollow from "../WhoToFollow/WhoToFollow";

import CommentsAndDetails from "./CommentsAndDetails/CommentsAndDetails";
import ShareWithModal from "./ShareModal/ShareWithModal";
import SinglePost from "./SinglePost/SinglePost";
import styles from "./styles.module.css";

const Posts = ({ data }) => {
  const [showWhotoFollow, setShowWhotoFollow] = useState(true);

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
        {showWhotoFollow && <WhoToFollow />}
      </div>{" "}
    </>
  );
};

export default Posts;
{
  /* <SinglePost data={el} key={i} /> */
}
