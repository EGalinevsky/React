import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import facebook from "./../../../assets/img/facebook.png";
import vk from "./../../../assets/img/vk.png";
import twitter from "./../../../assets/img/twitter.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import user_png from "../../../assets/img/user.jpg";

const ProfileInfo = (props) => {
  debugger;
  if (!props.profile) {
    return <Preloader />;
  }

  let lookingForJob = () => {
    if (props.profile.lookingForAJob) {
      return <p>net</p>;
    } else {
      return <p>yes im looking for job </p>;
    }
  };

  const onMainPhotoSelected = (e) =>{
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      {/* <img
        className={s.space}
        src="https://avatanplus.com/files/resources/original/5cb1eb4d3d21516a16ff25c2.jpg"
      ></img> */}
      <div>
        <div className={s.user_item}>
          <img
            className={s.description_block}
            src={props.profile.photos.large || user_png}
          ></img>

          <div className={s.user_about}>
            <ProfileStatusWithHooks
              status={props.status}
              updateStatus={props.updateStatus}
            />
            <p>My name is {props.profile.fullName}</p>
            <p>About me{props.profile.aboutMe}</p>
            <p>Looking for job ? {lookingForJob()}</p>
          </div>
        </div>

        <div>
          {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          <h3>Social</h3>
          <div className={s.social}>
            <p>
              <img src={facebook} alt="" />
              {props.profile.contacts.facebook}
            </p>
            <p>
              <img src={vk} alt="" />
              {props.profile.contacts.vk}
            </p>
            <p>
              <img src={twitter} alt="" />
              {props.profile.contacts.twitter}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
