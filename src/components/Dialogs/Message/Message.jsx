import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={s.message_item}>
    <img src="https://toppng.com/uploads/preview/astronaut-11530981517qdf4zenofc.png" alt=""/>
    {props.message}
       
    </div>;
};

export default Message;
