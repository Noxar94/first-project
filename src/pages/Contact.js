import React, { Component } from "react"; //react
import "../styles/form.css"; //css
import "../styles/contact.css"; //css
import Form from "../components/form"; //form

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
