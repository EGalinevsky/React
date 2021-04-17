import React from "react";
import MyPosts from "./MyPosts"
import {addPostActionCreator} from "../../../redux/profileReducer";
import { connect } from "react-redux";




const mapStateToProps = (state) => {
    return{
      postData: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addPost: (nextPostBody) => {
        dispatch(addPostActionCreator(nextPostBody))
      }
    }
}


const MyPostsContainer = connect( mapStateToProps, mapDispatchToProps )(MyPosts);

export default MyPostsContainer;
