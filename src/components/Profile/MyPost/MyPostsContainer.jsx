import React from "react";
import MyPosts from "./MyPosts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPostsContainer = (props) => {


  let state = props.store.getState()
 
  let addPost = () => {    
    props.store.dispatch(addPostActionCreator());
  };


  console.log(addPost)
  let updateNewPostText = (newPostText) => {
    let action = updateNewPostTextActionCreator(newPostText)
    props.store.dispatch(action);
  };
  
  return (    
    <MyPosts 
    updateNewPostText={updateNewPostText} 
    addPost={addPost}
    postData={state.profilePage.postData}
    newPostText = {state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
