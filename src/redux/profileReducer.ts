import {usersAPI, profileAPI} from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS ='SAVE_PHOTO_SUCCESS'

type PostType ={
  id:number,
  message: string,
  likes: number
}

type ContactsType = {
  github: string,
vk: string,
facebook: string,
instagram: string,
twitter: string,
website: string,
youtube: string,
mainLink: string
}

type PhotosType ={
  small: string | null
  large: string | null
}

type ProfileType ={
  userId:number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName:string,
  contacts: ContactsType,
  photos:PhotosType
}

let initialState = {
  postData: [
    { message: "hi", id: 1, likes: 15 },
    { message: "how is your name", id: 2, likes: 15 },
    { message: "what are you doing", id: 3, likes: 15 },
  ] as Array<PostType> ,
  profile: null as ProfileType | null,
  status: "",
  nextPostBody: ''
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):initialStateType => {

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
        ...state, profile:{...state.profile, photos: action.photos} as ProfileType
      }

    default:
      return state;
  };
}

type addPostActionCreatorType = {
  type: typeof ADD_POST,
  nextPostBody: string 
}
export const addPostActionCreator = (nextPostBody:string):addPostActionCreatorType => {
  return {
    type: ADD_POST,
    nextPostBody
  }
}

type setStatusType ={
  type: typeof SET_STATUS,
  status: string
}
export const setStatus = (status:string):setStatusType => {
  return {
    type: SET_STATUS,
    status
  }
}
type deletePostType ={
  type: typeof DELETE_POST,
  postId: number
}
export const deletePost = (postId:number):deletePostType => {
  return {
    type: DELETE_POST,
    postId
  }
}
type savePhotoSuccesType ={
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}
export const savePhotoSucces = (photos:PhotosType):savePhotoSuccesType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}
type setUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):setUserProfileType => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}


export const getProfileUser = (userId:number) => async (dispatch:any) => {
    const response = await usersAPI.getProfile(userId)
          dispatch(setUserProfile(response.data));
        }; 
  
export const getStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId)     
          dispatch(setStatus(response.data));
        };         

export const updateStatus = (status:string) => async (dispatch:any) => {
  try{
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  } catch(error){
    //
  }          
};          
        
  

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
          
          if (response.data.resultCode === 0){
          dispatch(savePhotoSucces(response.data.data.photos));
        }
        }; 
  
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
export const saveProfile = (profile:ProfileType) =>async (dispatch:any, getState:any) => {
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