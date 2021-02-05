import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <ul className={s.item}>
      <li>
        <NavLink activeClassName={s.active} to={path}>
          {props.name}
        </NavLink>
      </li>
    </ul>
  );
};

const Message = (props) => {
  return <div className="message_item">{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogsData = [
    { id: 1, name: "Eugene" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Igor" },
    { id: 4, name: "lex" },
    { id: 5, name: "Gluk5" },
  ];


  let messageData = [
    { say: "hi", id: 1 },
    { say: "how is your name", id: 1 },
    { say: "what are you doing", id: 1 },
  ];
  

  /*We are doing here map*/
  let dialogsElement = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = messageData.map((messageEl) => (
    <Message message={messageEl.say} id={messageEl.id} />
  ));


  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <h1> Dialogs</h1>
        {dialogsElement}
      </div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

// function Dialogs (props) {
//     return(
//         <div>
//             fefeefed
//         </div>
//     )
// }

export default Dialogs;
