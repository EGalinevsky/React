import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer"
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

  let state = props.dialogsPage

    /*We are doing here map*/
  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  

  let messageElements = state.messageData.map((messageEl) => (
    <Message message={messageEl.say} key={messageEl.id} id={messageEl.id} />
  ));

    let nextMessageAdd = state.nextMessageSend;

  let onAddMessagePost = () =>{    
    props.sendMessage();
  } 

  let onUpdateNewMessageText = (e)=>{
    let nextMessageSend = e.target.value;
     props.updateNewMessageSend(nextMessageSend)
  }

  if(!props.isAuth) return <Redirect to={"/login"} /> 

  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <h1> Dialogs</h1>
        {dialogsElement}
      </div>
      <div className={s.messages}>
          <div className={s.messages_item}>
          {messageElements}
          </div>   
        <div className={s.message__wrapper}>
          <textarea 
                    className={s.text}
                    onChange={onUpdateNewMessageText}
                    value={nextMessageAdd}
                    placeholder='send message'
           ></textarea>           
        </div>        
        <div className={s.wrapper__btn}>
          <button onClick={ onAddMessagePost } className={s.btn}>send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
