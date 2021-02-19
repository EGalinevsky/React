import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage

    /*We are doing here map*/
  
  let onAddMessagePost = () =>{    
    props.store.dispatch(addMessageActionCreator());
  } 

  let onUpdateNewMessageText = (nextMessageSend)=>{     
    props.store.dispatch(updateMessageActionCreator(nextMessageSend));
  }

  
  return (
    <Dialogs updateNewMessageSend={onUpdateNewMessageText}
    sendMessage={onAddMessagePost}
    dialogsPage={state}/>
  );
};
export default DialogsContainer;
