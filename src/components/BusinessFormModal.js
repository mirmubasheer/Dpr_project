import React, { useState } from 'react';
import styles from "./selector.module.css";

function BusinessFormModal({ onClose }) {
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
    const response = await fetch("http://localhost:8080/business", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if submission was successful
    if (response.ok) {
      setSubmissionStatus("success");
      setTimeout(() => {
        window.location.href = "https://rajivwilliams.com/";
      }, 5000); // Redirect after 5 seconds
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.formModal2} ${styles.business}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>

        <h2>Business Form</h2>
        {/* Your input fields for business form */}
        <input
          type="text"
          placeholder="Your Name"
          maxLength="30"
          name="businessName"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="businessEmail"
          maxLength="30"
          onChange={handleForm}
          required
        />
        <input
          type="tel"
          placeholder="Your Mobile Number"
          name="businessPhone"
          maxLength="15"
          onChange={handleForm}
          required
        />
        <input
          type="text"
          placeholder="Business Category"
          name="businessCategory"
          maxLength="30"
          onChange={handleForm}
          required
        />
        {/* Add more input fields as needed */}
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

export default BusinessFormModal;
