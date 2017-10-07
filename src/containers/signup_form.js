import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      fullName: this.props.fullName,
      companyName: this.props.companyName,
      password: this.props.password,
      confirmPassword: this.props.confirmPassword,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.register({
      ...this.state,
      message: ''
    })
  }

  render() {
    let { isRegisterPending, isRegisterSuccess, registerError } = this.props
    return (
      <div className="signUpForm">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="email"
            value={ this.state.email }
            onChange={(event)=>{this.setState({email: event.target.value})}}
            placeholder="Email"
          />
          <input
            type="text"
            value={ this.state.fullName }
            onChange={(event)=>{this.setState({fullName: event.target.value})}}
            placeholder="Full name"
          />
          <input
            type="text"
            value={ this.state.companyName }
            onChange={(event)=>{this.setState({companyName: event.target.value})}}
            placeholder="Company name"
          />
          <input
            type="password"
            value={ this.state.password }
            onChange={(event)=>{this.setState({password: event.target.value})}}
            placeholder="Password"
          />
          <input
            type="password"
            value={ this.state.confirmPassword }
            onChange={(event)=>{this.setState({confirmPassword: event.target.value})}}
            placeholder="Confirm password"
          />
          <button value="submit">Register</button>
        </form>
        { isRegisterPending && <div>Please wait...</div> }
        { isRegisterSuccess && <div className="info-success">Success.</div> }
        { registerError && <div className="info-error">{registerError.message}</div> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isRegisterPending: state.signup.isRegisterPending,
    isRegisterSuccess: state.signup.isRegisterSuccess,
    registerError: state.signup.registerError,
    email: state.signup.email,
    fullName: state.signup.fullName,
    companyName: state.signup.companyName,
    password: state.signup.password,
    confirmPassword: state.signup.confirmPassword,
  }
}


export default connect(mapStateToProps, { register })(Signup);
