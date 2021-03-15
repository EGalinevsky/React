import {usersAPI, profileAPI} from "./../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  postData: [
    { message: "hi", id: 1, likes: "15" },
    { message: "how is your name", id: 2, likes: "15" },
    { message: "what are you doing", id: 3, likes: "15" },
  ],
  newPostText: "",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return{
        ...state, profile: action.profile
      }
    case SET_STATUS:
      return{
        ...state, status: action.status
      }

    default:
      return state;
  };
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const updateNewPostTextActionCreator = (newPostText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText
  }
}

export const getProfileUser = (userId) =>{
  return (dispatch) => {
      usersAPI.getProfile(userId).then(response => {
          dispatch(setUserProfile(response.data));
        }); 
  }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {      
          dispatch(setStatus(response.data));
        });         
  }


export const updateStatus = (status) =>{
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
          
          if (response.data.resultCode === 0){
          dispatch(setStatus(status));
        }
        }); 
  }
}

export default profileReducer;