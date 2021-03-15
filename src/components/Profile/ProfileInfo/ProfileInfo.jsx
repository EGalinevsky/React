import React from 'react'
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import facebook from "./../../../assets/img/facebook.png";
import vk from "./../../../assets/img/vk.png";
import twitter from "./../../../assets/img/twitter.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }

  let lookingForJob = () =>{
    if (props.profile.lookingForAJob) {
      return(
        <p>yes im looking for job </p>
      )      
  } else {
      return (
        <p>net</p>
      )    
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
              src={props.profile.photos.large}
            ></img>
            
            <div className={s.user_about}> 
              <ProfileStatus status={props.status} updateStatus={props.updateStatus} />             
              <p>{props.profile.fullName}</p>
              <p>{props.profile.aboutMe}</p>
              <p>{lookingForJob()}</p>
            </div>
        </div>
        
        <div>          
          <h3>Social</h3>
          <div className={s.social}>
              <p>
                <img src={facebook} alt=""/>
                {props.profile.contacts.facebook}
                </p> 
              <p> 
                <img src={vk} alt=""/>
                {props.profile.contacts.vk}
                </p> 
              <p>
                <img src={twitter} alt=""/>
                {props.profile.contacts.twitter}
                </p>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default ProfileInfo;
