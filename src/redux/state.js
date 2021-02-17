import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";





let store = {
  _state: {
    profilePage: {
      postData: [
        { message: "hi", id: 1, likes: "15" },
        { message: "how is your name", id: 1, likes: "15" },
        { message: "what are you doing", id: 1, likes: "15" },
      ],
      newPostText: "Вот этот тексfт",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Eugene" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Igor" },
        { id: 4, name: "lex" },
        { id: 5, name: "Ilya" },
      ],
      messageData: [
        { say: "hi", id: 1 },
        { say: "how is your name", id: 2 },
        { say: "what are you doing", id: 3 },
        { say: "how old are you", id: 4 },
      ],
      nextMessageSend:''
    },

    friendsPage: {
      friendsData: [
        { id: 1, name: "Mars" },
        { id: 1, name: "Mercury" },
        { id: 1, name: "Jupiter" },
      ],
    },
  },
  _callSubscriber() {
    console.log("dwd");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);

    // {type: 'ADD-POST' AND OTHER  }   
  }
    
};





export default store;

window.store = store;
