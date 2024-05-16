import React, { useState } from 'react';
import styles from "./selector.module.css";


function CustomerFormModal({ onClose }) {
  const [form, setForm] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("https://dpr-api.vercel.app/customer", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log(data);
    
    // Check if submission was successful
    if (response.ok) {
      setSubmissionStatus("success");
      setTimeout(() => {
        window.location.href = "https://dprprop.com/Projects.php";
      }, 5000); // Redirect after 3 seconds
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.formModal} ${styles.customer}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Customer Details</h2>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          maxLength="30"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          maxLength="30"
          onChange={handleForm}
          required
        />
        <input
          type="tel"
          placeholder="Your Mobile Number"
          name="phone"
          maxLength="18"
          onChange={handleForm}
          required
        />
        <textarea
          placeholder="Your Address"
          rows="4"
          name="address"
          maxLength="100"
          onChange={handleForm}
          required
        />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingIcon}></div>
          {isLoading && <p className={styles.loadingMessage}>Please Wait...</p>}
        </div>
        {submissionStatus === "success" && (
          <p className={styles.successMessage}>
            Your details have been successfully received.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className={styles.errorMessage}>
            There was an error submitting your details. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export default CustomerFormModal;
