import React, { useState } from "react";
import ProfilePicures from "./ProfilePictures/ProfilePictures";
import styles from "./styles.module.css";

const SetUpYourProfile = () => {
  const [profilePicturesModal, setProfilePicutersModal] = useState(false);
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <>
      <div className={`marginTop ${styles.setUpProfile}`}>
        <h4 className={styles.heading}>Set up your profile</h4>
        <div className={styles.groupPhotoDiv}>
          {selectedProfilePicture?.img ? (
            <img
              className={styles.groupPhoto}
              src={selectedProfilePicture.img}
              alt="group"
            />
          ) : (
            <div className={styles.groupPhoto}></div>
          )}

          <button onClick={() => setProfilePicutersModal(true)}>
            {selectedProfilePicture?.img
              ? "Change ProfilePicture"
              : "Choose a profile picture"}
          </button>
        </div>
        <form className={styles.userNameContainer}>
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="Create a usernames"
            onChange={(e) => setUserName(e.target.value)}
            className={styles.input}
          />
          <button className={styles.button}>Next</button>
        </form>
      </div>
      {profilePicturesModal && (
        <ProfilePicures
          setModal={setProfilePicutersModal}
          setSelectedProfilePicture={setSelectedProfilePicture}
        />
      )}
    </>
  );
};

export default SetUpYourProfile;
