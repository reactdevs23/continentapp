import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import {
  postImage,
  user,
  ethIcon,
  lovefill,
  love,
  comment,
  send,
} from "../../../../../images/image";
import Comment from "./Comment/Comment";
import styles from "./styles.module.css";

const CommentsAndDetails = ({ data, setModal }) => {
  const [like, setLike] = useState(false);
  const [postText, setPostText] = useState("");
  const [replayText, setReplyText] = useState("");
  const comments = [
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
    {
      userImg: user,
      userName: "degen.eth",
      comment: "Great project! ",
      time: "1h ",
      likes: 1,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const numberFormating = (number) => {
    if (number >= 1000 && number % 1000 === 0) {
      number = (number / 1000).toFixed(0) + "k";
    } else if (number >= 1000 && number % 1000 !== 0) {
      number = (number / 1000).toFixed(1) + "k";
    }
    return number;
  };
  return (
    <>
      <div className={styles.wrapper}>
        <img src={postImage} alt="#" className={styles.postImage} />
        <div className={styles.postDetails}>
          <div className={styles.header}>
            <div className={styles.userContainer}>
              <img src={user} alt="#" className={styles.userImg} />{" "}
              <p className={styles.text}>{data.userName}</p>
            </div>
            <BiDotsVerticalRounded className={styles.more} />
          </div>
          <div className={styles.informationContainer}>
            <div className={styles.information}>
              <div className={styles.idAndbutton}>
                <p className={styles.text}>Moonbird #{data.id}</p>
                <p className={styles.button}>Detail</p>
              </div>
              <div className={styles.aboutPost}>
                <p className={styles.text}>{data.userName} </p>
                <p className={`${styles.text} ${styles.subText}`}>
                  {data.postText} &nbsp;
                  <span className={styles.time}>{data.time}</span>
                </p>
              </div>
              {data.owner && <p className={styles.owner}>{data.owner}</p>}
            </div>
            {data.ethAmount && (
              <div className={styles.ethContainer}>
                <span className={styles.eth}>{data.ethAmount}</span>
                <img src={ethIcon} alt="#" className={styles.ethIcon} />
              </div>
            )}
          </div>
          <div className={`${styles.commentsWrapper}  grScrollbar`}>
            {comments.map((el, i) => (
              <Comment {...el} key={i} />
            ))}
          </div>{" "}
          <div className={styles.likeCommentSend}>
            <div className={styles.like}>
              <img
                src={like ? lovefill : love}
                alt="#"
                className={styles.icon}
                onClick={() => setLike((prev) => !prev)}
              />

              <span className={styles.number}>
                {numberFormating(data.likes)}
              </span>
            </div>
            <div className={styles.comment}>
              <img src={comment} alt="#" className={styles.icon} />
              <span className={styles.number}>
                {numberFormating(data.comments)}
              </span>
            </div>

            <img src={send} alt="#" className={styles.icon} />
          </div>
          <form className={styles.postInputContainer}>
            <input
              type="text"
              placeholder="Add new comment..."
              className={styles.postInput}
              name="post"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <button
              type="submit"
              onSubmit={(e) => handleSubmit(e)}
              className={styles.postButton}
            >
              Post
            </button>
          </form>
        </div>
      </div>
      <MdOutlineClose
        className={styles.close}
        onClick={() => setModal(false)}
      />
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default CommentsAndDetails;
