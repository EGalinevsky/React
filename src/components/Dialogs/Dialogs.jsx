import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {required,maxLengthCreator} from "./../../utils/validators/validators"
import {Textarea} from "./../../components/common/FormsControls/FormsControls";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  

  /*We are doing here map*/
  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageElements = state.messageData.map((messageEl) => (
    <Message message={messageEl.say} key={messageEl.id} id={messageEl.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.nextMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <h1> Dialogs</h1>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <div className={s.messages_item}>{messageElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.message__wrapper}>
        <Field
          validate={[required, maxLength]}
          component={Textarea}
          name="nextMessageBody"
          placeholder="send message"
          className={s.text}
        ></Field>
      </div>
      <div className={s.wrapper__btn}>
        <button className={s.btn}>send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
