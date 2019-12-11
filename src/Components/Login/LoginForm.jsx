import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../Common/FormControls/FormControls";
import { required } from "../../Utils/Validators/validator";
import styles from "../Common/FormControls/FormControls.module.css";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={"password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}

      <div>
        <button type="submit">Login</button>
        <button type="button" onClick={props.reset}>
          Clear
        </button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "login" })(LoginForm);
