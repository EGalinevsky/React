import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import style from './../../common/FormsControls/FormsControls.module.css'
import { Input, Textarea } from "./../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ profile, handleSubmit,error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => console.log("fef")}>save</button>
      </div>
      {error && <div className={style.form_summary_error}>
          {error}
      </div>}
      <div>
        <p>
          <b> My name is </b>
          <Field
            placeholder={"Full name"}
            name={"fullName"}
            validate={[]}
            component={Input}
          />
        </p>
        <p>
          <b> About me</b>

          <Field
            placeholder={"About me"}
            name={"aboutMe"}
            validate={[]}
            component={Textarea}
          />
        </p>
        <p>
          <b> Looking for job ? </b>
          <Field
            placeholder={""}
            name={"lookingForAJob"}
            validate={[]}
            component={Input}
            type="checkbox"
          />
        </p>

        <div>
          <p>My professional skills</p>
          <Field
            placeholder={"My professional skills"}
            name={"lookingForAJobDescription"}
            validate={[]}
            component={Textarea}
          />
        </div>
      </div>

      <div className={s.social}>
        <p>
          <strong> Social:</strong>
        </p>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}:
                {<Field
                  placeholder={key}
                  name={"contacts." + key}
                  validate={[]}
                  component={Input}
                />}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
