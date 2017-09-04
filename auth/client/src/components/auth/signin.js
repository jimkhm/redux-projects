import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(this.props);
    console.log(email, password);
    // Need to do something to log user in
    this.props.signinUser({ email, password })
  }

  renderInput({ label, ...field }){
    return(
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type={field.type} className="form-control" />
      </fieldset>
    );
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

    const { handleSubmit, fields: { email, password }} =this.props;

    return(
    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      <Field name="email" component={this.renderInput} label="Email" type="text" />
      <Field name="password" component={this.renderInput} label="Password" type="password" />
      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
  }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error};
}

Signin = connect(mapStateToProps, actions)(Signin)

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
