import React, { useState } from "react";
import styles from "./selector.module.css";
import CustomerFormModal from "./CustomerFormModal";
import ChannelPartnerFormModal from "./ChannelPartnerFormModal";
import BusinessFormModal from "./BusinessFormModal";
// import Header from "./common/header";
// import video1 from "../video/hitechh.mp4";

function Selector() {
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showChannelPartnerModal, setShowChannelPartnerModal] = useState(false);

  const toggleCustomerModal = () => {
    setShowCustomerModal(!showCustomerModal);
    setShowBusinessModal(false);
    setShowChannelPartnerModal(false);
  };

  const toggleBusinessModal = () => {
    setShowBusinessModal(!showBusinessModal);
    setShowCustomerModal(false);
    setShowChannelPartnerModal(false);
  };

  const toggleChannelPartnerModal = () => {
    setShowChannelPartnerModal(!showChannelPartnerModal);
    setShowCustomerModal(false);
    setShowBusinessModal(false);
  };

  const closeCustomerModal = () => {
    setShowCustomerModal(false);
  };
  const closeBusinessModal = () => {
    setShowBusinessModal(false);
  };
  const closeChannelPartnerModal = () => {
    setShowChannelPartnerModal(false);
  };

  return (
    <>
      <div className={styles.container}>
         <video className={styles.video} src="/video/hitechh.mp4" autoPlay loop muted />
        <button
          className={`${styles.button} ${styles.customer}`}
          onClick={toggleCustomerModal}
          disabled={
            showCustomerModal || showBusinessModal || showChannelPartnerModal
          }
        >
          <span
            style={{
              fontSize: "20px",
              display: "block",
              lineHeight: "1.5",
              marginBottom: "18%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "10px",
              borderRadius: "10px",
              height: "180px",
            }}
          >
            Let's connect and amplify your real estate ventures together!
            <br />
            Fill out the form by clicking the button below to start a
            conversation with DPR's dedicated team.
          </span>

          <span
            style={{
              textAlign: "right",
              padding: "10px 20px",
              fontSize: "30px",
              color: "white",
              backgroundColor: "rgba(48, 119, 157, 0.9)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.8s ease",
              animation: "pulse 1s infinite alternate",
            }}
          >
            Customer
          </span>
        </button>
        <button
          className={`${styles.button} ${styles.business}`}
          onClick={toggleBusinessModal}
          disabled={
            showCustomerModal || showBusinessModal || showChannelPartnerModal
          }
        >
          <span
            style={{
              fontSize: "20px",
              display: "block",
              lineHeight: "1.5",
              marginBottom: "25%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "10px",
              borderRadius: "10px",
              height: "180px",
            }}
          >
            Join our community of real estate enthusiasts! Register now to
            access exclusive insights and personalized guidance.
          </span>
          <span
            style={{
              textAlign: "right",
              padding: "10px 20px",
              fontSize: "30px",
              color: "white",
              backgroundColor: "rgba(48, 119, 157, 0.9)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.8s ease",
              animation: "pulse 1s infinite alternate",
            }}
          >
            Business
          </span>
        </button>

        <button
          className={`${styles.button} ${styles.channelPartner}`}
          onClick={toggleChannelPartnerModal}
          disabled={
            showCustomerModal || showBusinessModal || showChannelPartnerModal
          }
        >
          <span
            style={{
              fontSize: "20px",
              display: "block",
              lineHeight: "1.5",
              marginBottom: "21%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "10px",
              borderRadius: "10px",
              height: "180px",
            }}
          >
            Partner with DPR to revolutionize real estate sales. Submit the form
            to become a channel partner & explore mutually beneficial
            collaborations & growth.
          </span>
          <span
            style={{
              textAlign: "right",
              padding: "10px 20px",
              fontSize: "30px",
              color: "white",
              backgroundColor: "rgba(48, 119, 157, 0.9)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.8s ease",
              animation: "pulse 1s infinite alternate",
            }}
          >
            Channel Partner
          </span>
        </button>
      </div>

      {showCustomerModal && <CustomerFormModal onClose={closeCustomerModal} />}
      {showBusinessModal && <BusinessFormModal onClose={closeBusinessModal} />}
      {showChannelPartnerModal && (
        <ChannelPartnerFormModal onClose={closeChannelPartnerModal} />
      )}
    </>
  );
}


export default Selector;
