import { authAPI, ResultCodeEnum } from "../api/api";
import { stopSubmit } from "redux-form";
import { Dispatch } from "react";
import { AppStateType } from "./redux_store";
import { ThunkAction } from "redux-thunk";
const SET_USER_DATA = 'SET_USER_DATA';


export type initialStateType ={
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
let initialState:initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: true
}



const authReducer = (state = initialState, action:setAuthUserDataActionType):initialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {                
                ...state,
                ...action.payload,
            }
        default:
            return state;
    };
}

type setAuthUserDataActionPayloadType ={
     id:number | null, email:string | null, login:string | null, isAuth:boolean
}


type setAuthUserDataActionType ={
    type: typeof SET_USER_DATA,
    payload:setAuthUserDataActionPayloadType
}


export const setAuthUserData = (id:number | null, email:string | null, login:string | null, isAuth:boolean):setAuthUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: { id, email, login, isAuth }
    }
}

type GetDispatchType=Dispatch<setAuthUserDataActionType>
type GetStateType= ()=> AppStateType
type GetThunckType =ThunkAction<Promise<void>, AppStateType, unknown, setAuthUserDataActionType>

export const getAuthUserData = () => async (dispatch:GetDispatchType , getState:GetStateType) => {
    let meData = await authAPI.me()
        if (meData.resultCode === ResultCodeEnum.Success) {

            let { id, email, login } = meData.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    };

export const login = (email:string, password:string, rememberMe:boolean):GetThunckType => async (dispatch:any) => {
    let logData = await authAPI.login(email, password, rememberMe)
    
        if (logData.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            let message = logData.messages.length > 0 ?  logData.messages[0] : "some error"
            dispatch(stopSubmit("login", { _error:message}));
        }
    };

export const logout = () => async (dispatch: GetDispatchType, getState:GetStateType) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    };

export default authReducer;

