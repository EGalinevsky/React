import React from "react";
import s from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) =>{
    return(
        <div className={`${s.form_control} ${s.error}`}>
            <textarea {...input} {...props} placeholder='add post' />
        </div>
    )
}