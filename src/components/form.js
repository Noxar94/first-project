import React, { Component } from "react";
import "../styles/form.css";
import "animate.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      message: "",
      email: "",
      submittedData: [],
    };
  }

  handlefullNameChange = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const { fullName, email, message, submittedData } = this.state;
    const newData = { fullName, email, message };
    this.setState({
      submittedData: [...submittedData, newData],
      fullName: "",
      email: "",
      message: "",
    });
  };

  render() {
    const { fullName, message, email, submittedData } = this.state;
    return (
      <main className="main-form">
        <form onSubmit={this.handleSubmit} className="form-container">
          <label>Fullname:</label>
          <input
            type="text"
            value={fullName}
            onChange={this.handlefullNameChange}
            required
          />

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={this.handleEmailChange}
            required
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={this.handleMessageChange}
            placeholder="Message:"
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
        {submittedData.map((data, index) => (
          <div key={index} className="user-input animate__backInUp">
            <p>Full Name: {data.fullName}</p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
          </div>
        ))}
      </main>
    );
  }
}

export default Form;
