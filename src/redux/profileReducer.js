import {usersAPI, profileAPI} from "./../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS ='SAVE_PHOTO_SUCCESS'

let initialState = {
  postData: [
    { message: "hi", id: 1, likes: "15" },
    { message: "how is your name", id: 2, likes: "15" },
    { message: "what are you doing", id: 3, likes: "15" },
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.nextPostBody,
        likes: 0
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        nextPostBody: ''
      }
    case SET_USER_PROFILE:
      return{
        ...state, profile: action.profile
      }
    case SET_STATUS:
      return{
        ...state, status: action.status
      }
    case DELETE_POST:
      return{
        ...state, postData: state.postData.filter(p => p.id != action.postId
          )
      }
    case SAVE_PHOTO_SUCCESS:
      return{
        ...state, profile:{...state.profile, photos: action.photos} 
      }

    default:
      return state;
  };
}


export const addPostActionCreator = (nextPostBody) => {
  return {
    type: ADD_POST,
    nextPostBody
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}
export const savePhotoSucces = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
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
export const savePhoto = (file) =>{
  return (dispatch) => {
    profileAPI.savePhoto(file).then(response => {
          
          if (response.data.resultCode === 0){
          dispatch(savePhotoSucces(response.data.data.photos));
        }
        }); 
  }
}
// export const saveProfile = (profile) =>{
//   return (dispatch) => {
//     profileAPI.saveProfile(profile).then(response => {
//     debugger      
//           if (response.data.resultCode === 0){
//           dispatch(savePhotoSucces(response.data.data.photos));
//         }
//         }); 
//   }
// }
export const saveProfile = (profile) =>async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile);
          if (response.data.resultCode === 0){
          dispatch(getProfileUser(userId));
        } else {
          dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0]}));
          return Promise.reject(response.data.messages[0])
        }
      }; 
  




export default profileReducer;