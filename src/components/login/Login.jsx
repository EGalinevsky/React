import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "./../../components/common/FormsControls/FormsControls";
import s from './../common/FormsControls/FormsControls.module.css'
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "./../../redux/auth-reducer";
import { Redirect } from "react-router";

let maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field
          placeholder={"password"}
          name={"password"}
          component={Input}
          validate={[required, maxLength]}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
        remember me
      </div>
      {props.error && <div className={s.form_summary_error}>
          {props.error}
      </div>}
      <div>
        <button>sing in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
