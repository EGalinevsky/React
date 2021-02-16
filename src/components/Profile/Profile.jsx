import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div> 
      <ProfileInfo />
      <MyPosts 
      postData={props.profilePage.postData}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch}/>
    </div>
  );
};

export default Profile;
