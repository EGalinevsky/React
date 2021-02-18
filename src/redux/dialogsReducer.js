const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                say: state.nextMessageSend
            }
            state.messageData.push(newMessage);
            state.nextMessageSend = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.nextMessageSend = action.newMessageText;
            return state;
        default:
            return state;
    }


};

export const addMessageActionCreator = () =>{
    return {
      type: ADD_MESSAGE
    }  
  }
  export const updateMessageActionCreator = (nexMessageSend) =>{
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessageText: nexMessageSend
    }  
  }


export default dialogsReducer;
