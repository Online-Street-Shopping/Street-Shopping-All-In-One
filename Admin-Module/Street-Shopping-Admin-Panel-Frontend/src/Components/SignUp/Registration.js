import React, { Component } from 'react';
import "./signup.css";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitUserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["fname"] = "";
      fields["lname"] = "";
      fields["email"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form Submitted!");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = "Please Enter Your FirstName";
    }

    if (typeof fields["fname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-z]*$/)) {
        formIsValid = false;
        errors["fname"] = "Please Enter Alphabet Character Only";
      }
    }

    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = "Please Enter Your LastName";
    }

    if (typeof fields["lname"] !== "undefined") {
      if (!fields["lname"].match(/^[a-zA-z]*$/)) {
        formIsValid = false;
        errors["lname"] = "Please Enter Alphabet Character Only";
      }
    }

    if (typeof fields["email"] != "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Password must contain special character, numbers and capital letter.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <form method="post" name="userRegistrationForm" onSubmit={this.submitUserRegistrationForm}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input type="text" name="fname" value={this.state.fields.fname} onChange={this.handleChange} className="form-control" placeholder="First name" />
          <div className="errorMsg">{this.state.errors.fname}</div>
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" name="lname" value={this.state.fields.lname} onChange={this.handleChange} className="form-control" placeholder="Last name" />
          <div className="errorMsg">{this.state.errors.lname}</div>
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" name="email" value={this.state.fields.email} onChange={this.handleChange} className="form-control" placeholder="Enter email" />
          <div className="errorMsg">{this.state.errors.email}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} className="form-control" placeholder="Enter password" />
          <div className="errorMsg">{this.state.errors.password}</div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
