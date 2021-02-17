const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


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
      messageSend:'fre'
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
    // {type: 'ADD-POST' AND OTHER  }   
    if (action.type === ADD_POST) {

      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
      
    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_MESSAGE){

      let newMessage = {
        id: 4,
        say: this._state.dialogsPage.messageSend,
      }
        this._state.dialogsPage.messageData.push(newMessage);
        this._state.dialogsPage.messageSend = "";
        this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT)

      this._state.dialogsPage.messageSend = action.newMessageText;
      this._callSubscriber(this._state);

  },
};

export const addMessageActionCreator = () =>{
  return {
    type: ADD_MESSAGE
  }  
}
export const updateMessageActionCreator = (messageSend) =>{
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: messageSend
  }  
}

export const addPostActionCreator = () =>{
  return {
    type: ADD_POST
  }    
}
export const updateNewPostTextActionCreator = (newPostText) =>{
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newPostText
  }    
}

export default store;

window.store = store;
