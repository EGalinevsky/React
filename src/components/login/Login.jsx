import React from "react";
import { Field, reduxForm } from "redux-form";
import {Input} from "./../../components/common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

let maxLength = maxLengthCreator(15)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={Input} validate={[required, maxLength]}/>
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={Input} validate={[required, maxLength]}  />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
      </div>
      <div>
        <button>sing in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = () => {

    const onSubmit = (formData) =>{
        console.log(formData)
    }

  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
