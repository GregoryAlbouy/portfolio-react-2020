import React, { useState, useEffect } from 'react';
import { postMessage } from '../services/contact';
import Alert from './Alert';

const ContactBox = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const messageData = {
      email,
      subject,
      message
    };
    
    try {
      const response = await postMessage(messageData);

      if (!response || response.status !== 201) throw new Error('Invalid message.');

      handleSuccess();
    } catch(error) {
      handleError(error.message);
    }
  };

  const handleInput = (event, field) => {
    const value = event.currentTarget.value;

    const setCurrentField = {
      email: setEmail,
      subject: setSubject,
      message: setMessage
    }[field] || null;

    if (!setCurrentField) return;

    setCurrentField(value);
  };

  const handleSuccess = () => {
    resetForm();
    setSuccessAlert('Message sent!');
  }

  const handleError = (message) => {
    setErrorAlert(message)
  }

  const resetForm = () => {
    setEmail('');
    setSubject('');
    setMessage('');
    document.activeElement.blur();
  }

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successAlert, setSuccessAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

  useEffect(() => {
    if (successAlert) setTimeout(() => setSuccessAlert(''), 3000)
    if (errorAlert) setTimeout(() => setErrorAlert(''), 3000)
  }, [successAlert, errorAlert])

  return (
    <div className="c-contact-box">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="from: ceo@google.com"
          value={email}
          onChange={(event) => handleInput(event, 'email')}
          required
        />

        <input
          type="text"
          placeholder="about: We want you!"
          value={subject}
          onChange={(event) => handleInput(event, 'subject')}
          required
        />

        <textarea
          placeholder="Hello Gregory,"
          value={message}
          onChange={(event) => handleInput(event, 'message')}
          required
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>

      {successAlert ? <Alert classNames="success"><p>{successAlert}</p></Alert> : ''}
      {errorAlert ? <Alert classNames="error"><p>{errorAlert}</p></Alert> : ''}
    </div>
  );
};

export default ContactBox;