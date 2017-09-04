import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {

  renderField({label, ...field}) {
      const { meta: {touched, error} } = field;
      const className = `form-group ${touched && error? 'has-danger': ''}`

    return (
        <fieldset className={className} >
          <labal>{label}</labal>
          <input {...field.input} type={field.type} className="form-control" />
          <div className="text-help">
            { touched ? error: ''}
          </div>
        </fieldset>
    );
  }

  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {

      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="email" component={this.renderField} label="Email" type="text"/>
        <Field name="password"component={this.renderField} label="Password" type="password" />
        <Field name="passwordConfirm" component={this.renderField} label="Confirm Password" type="password" />
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary" >Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors={};

  if (!formProps.email){
    errors.email = "Please enter an email";
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error};
}

Signup = connect(mapStateToProps, actions)(Signup)

export default reduxForm({
  form: 'signup',
  fields: ['email', 'pssword', 'passwordConfirm'],
  validate
})(Signup);
