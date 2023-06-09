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
      submittedData: [], // submitted data saved in array before data is sent.
    };
  }

  handlefullNameChange = (event) => {
    // Handles the full name event value
    this.setState({
      fullName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    // Handles the Email event value
    this.setState({
      email: event.target.value,
    });
  };
  handleMessageChange = (event) => {
    // Handles the message event value
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission.
    const { fullName, email, message, submittedData } = this.state;
    const newData = { fullName, email, message }; //saves the current data into the submittedData array in the component's state. It also clears the form fields by resetting the fullName, email, and message properties of the component's state to empty strings.
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

          <label>Message:</label>
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
