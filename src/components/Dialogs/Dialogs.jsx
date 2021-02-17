import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer"

const Dialogs = (props) => {
    /*We are doing here map*/
  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.messageData.map((messageEl) => (
    <Message message={messageEl.say} id={messageEl.id} />
  ));

  let newMessagePost = React.createRef();

  let addMessagePost = () =>{    
    props.dispatch(addMessageActionCreator());
  }

  let updateNewMessageText = ()=>{
    let nextMessageSend = newMessagePost.current.value;
    let action = updateMessageActionCreator(nextMessageSend)
    props.dispatch(action);
  }

  
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
          <textarea ref={newMessagePost}
                    className={s.text}
                    onChange={updateNewMessageText}
                    value={props.nextMessageSend}
                    placeholder='send message'
           ></textarea>           
        </div>        
        <div className={s.wrapper__btn}>
          <button onClick={ addMessagePost } className={s.btn}>send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
