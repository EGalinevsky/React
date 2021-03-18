import React from "react";
import s from "./FormsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={`${s.form_control} ${hasError ? s.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <p className={s.error}>{meta.error}</p>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}
export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}