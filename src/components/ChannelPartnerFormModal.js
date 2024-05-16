import React, { useState } from 'react';
import styles from "./selector.module.css";


function ChannelPartnerFormModal({ onClose }) {
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
    
      const response = await fetch("http://localhost:8080/cp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

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
      <div className={`${styles.formModal1} ${styles.channelPartnerF}`}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Channel Partner Enrollment Form</h2>
        <h3>Company Details</h3>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Your Name"
            name="cpname"
            maxLength="30"
            onChange={handleForm}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="cpemail"
            maxLength="30"
            onChange={handleForm}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="tel"
            placeholder="Your Mobile Number"
            name="cpmobilenumber"
            maxLength="15"
            onChange={handleForm}
            required
          />
          <textarea
            type="text"
            placeholder="Your Address"
            maxLength="100"
            name="cpaddress"
            rows="4"
            onChange={handleForm}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton1}>
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

export default ChannelPartnerFormModal;
