import React, { useState } from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import facebook from "./../../../assets/img/facebook.png";
import vk from "./../../../assets/img/vk.png";
import twitter from "./../../../assets/img/twitter.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user_png from "../../../assets/img/user.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditmode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(()=>{
      setEditmode(false);
    })
    
  };

  return (
    <div>
      <div>
        <div className={s.user_item}>
          <img
            className={s.description_block}
            src={props.profile.photos.large || user_png}
          ></img>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            onSubmit={onSubmit}
            profile={props.profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditmode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}

        <div>
          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected} />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={s.user_about}>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <p>
          <b> My name is: </b>
          {profile.fullName}
        </p>
        <p>
          <b> About me:</b>
          {profile.aboutMe}
        </p>
        <p>
          <b> Looking for job ? :</b>
          {profile.lookingForAJob ? "Yes" : "No"}
        </p>
        <p>
          <b>My professional skills:</b>
          {profile.lookingForAJobDescription}
        </p>
      </div>

      <div className={s.social}>
        <p>
          <strong> Social:</strong>
        </p>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.social}>
      <b>{contactTitle}</b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
