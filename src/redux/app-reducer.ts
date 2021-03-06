import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reducer";
import { AppStateType } from "./redux_store";
const INITIALZED_SUCCESS = 'INITIALZED_SUCCESS';


export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action:initializedSuccessActionType):initialStateType => {

    switch (action.type) {
        case INITIALZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    };
}

type initializedSuccessActionType ={
    type: typeof INITIALZED_SUCCESS
}


export const initializedSuccess = ():initializedSuccessActionType => {
    return {
        type: INITIALZED_SUCCESS
    }
}

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;

