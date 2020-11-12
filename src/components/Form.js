import React, { useState } from "react";
import Title from "./Title";
import { db } from "../firebase";
import Alert from "./Alert";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [alert, setAlert] = useState({ show: false });

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ showAlert: false });
    }, 3000);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("contactForm")
      .add({
        name,
        email,
        comments,
      })
      .then(() => {
        handleAlert({
          type: "success",
          text: ` Thank you,your message is sent. We will contact you as soon as
          possible.`,
        });
      })
      .catch((error) => {
        handleAlert({
          type: "danger",
          text: `Something went wrong. Please try again.`,
        });
      });

    setName("");
    setEmail("");
    setComments("");
  };
  return (
    <div className="form-section">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <div className="container">
        <form onSubmit={submitHandler}>
          <Title title="Get In Touch" />

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="comments"
            placeholder="Your Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
