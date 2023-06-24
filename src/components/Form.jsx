import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [overallExperience, setOverallExperience] = useState(0);
  const [easeOfUse, setEaseOfUse] = useState(0);
  const [features, setFeatures] = useState(0);
  const [comments, setComments] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const reset = () => {
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setOverallExperience(0);
    setEaseOfUse(0);
    setFeatures(0);
    setComments('');
  }

  return (
    <div>{
      formSubmitted === true ?
        <div className="view-form">
          <h2>Submitted Form</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Overall Experience:</strong> {overallExperience}</p>
          <p><strong>Ease of Use:</strong> {easeOfUse}</p>
          <p><strong>Features:</strong> {features}</p>
          <p><strong>Comments:</strong> {comments}</p>
          <button onClick={() => {
            reset();
            setFormSubmitted(false);

          }}>Return</button>
        </div> :
    <div className="container">
      <h2>Feedback Form</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)}}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label htmlFor="overallExperience">Overall Experience:</label>
        <input
          type="number"
          id="overallExperience"
          value={overallExperience}
          onChange={(e) => setOverallExperience(parseInt(e.target.value))}
          min={0}
          max={5}
          required
        />

        <label htmlFor="easeOfUse">Ease of Use:</label>
        <input
          type="number"
          id="easeOfUse"
          value={easeOfUse}
          onChange={(e) => setEaseOfUse(parseInt(e.target.value))}
          min={0}
          max={5}
          required
        />

        <label htmlFor="features">Features:</label>
        <input
          type="number"
          id="features"
          value={features}
          onChange={(e) => setFeatures(parseInt(e.target.value))}
          min={0}
          max={5}
          required
        />

        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>}
  </div>
  );
}

export default Form;
