const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


const dialogsReducer = (state, action) => {

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
