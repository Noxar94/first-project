import React, { Component } from "react";
import "../styles/form.css";
import "../styles/contact.css";
import Form from "../components/form";

class Contact extends Component {
  render() {
    return (
      <div className="Form">
        <h1 className="contact-titel">Contact form</h1>
        <Form />
      </div>
    );
  }
}

export default Contact;
