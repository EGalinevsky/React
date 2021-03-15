import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersRedecer from "./usersRedecer";
import authReducer from "./auth-reducer"; 
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersRedecer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;


export default store;