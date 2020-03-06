import React, { Component } from "react";
import { Form, Button, TransitionablePortal, Message } from "semantic-ui-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export class FormSendEmail extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this._reCaptchaRef = React.createRef();
  }
  state = { open: false };
  handleOpen = () => this.setState({ open: true });

  handleChangereCaptcha = value => {
    this.setState({ value });
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    e.preventDefault();
    const recaptchaValue = this._reCaptchaRef.current.execute();

    if (recaptchaValue === "") {
      alert("gaboleh");
    } else {
      emailjs
        .sendForm(
          "default_service",
          process.env.REACT_APP_EMAILJS_TEMPLATEID,
          e.target,
          process.env.REACT_APP_EMAILJS_USERID
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );

      this.setState({
        user_name: "",
        user_phoneNumber: "",
        user_email: "",
        message: "",
        open: true
      });
      this._reCaptchaRef.current.reset();
    }
  };

  render() {
    const {
      user_name,
      user_phoneNumber,
      user_email,
      message,
      open
    } = this.state;
    return (
      <div>
        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Message
            color="blue"
            style={{
              left: "40%",
              position: "fixed",
              top: "50%",
              zIndex: 1000
            }}
          >
            Message successfully sent, please wait for a reply.
          </Message>
        </TransitionablePortal>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              required
              fluid
              icon="user"
              iconPosition="left"
              label="Full Name"
              name="user_name"
              value={user_name || ""}
              onChange={this.handleChange}
              placeholder="Full Name"
            />
            <Form.Input
              required
              fluid
              icon="phone"
              iconPosition="left"
              label="Phone Number"
              name="user_phoneNumber"
              value={user_phoneNumber || ""}
              onChange={this.handleChange}
              placeholder="Phone Number"
              type="number"
            />
          </Form.Group>

          <Form.Input
            required
            icon="mail"
            iconPosition="left"
            label="Email"
            name="user_email"
            value={user_email || ""}
            onChange={this.handleChange}
            placeholder="Email"
            type="email"
          />
          <Form.TextArea
            required
            label="Message"
            name="message"
            value={message || ""}
            onChange={this.handleChange}
            placeholder="Tell us your message."
          />

          <ReCAPTCHA
            ref={this._reCaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_GOOGLE_SITE_KEY}
            onChange={this.handleChangereCaptcha}
            size="invisible"
            badge="bottomleft"
          />

          <Button type="submit" content="Send" primary />
        </Form>
      </div>
    );
  }
}
