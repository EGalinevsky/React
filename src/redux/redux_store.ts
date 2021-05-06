import { applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersRedecer from "./usersRedecer";
import authReducer from "./auth-reducer"; 
import appReducer from "./app-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersRedecer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


type RootReducerType = typeof rootReducers

export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// @ts-ignore
window._store_ = store;


export default store;