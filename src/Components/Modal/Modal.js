import React from "react";
import "./Modal.css"; // Import your custom modal styles

const Modal = ({ imageUrl, alt, onClose }) => {
  return (
    <div
      className={`modal-overlay ${imageUrl ? "active" : ""}`}
      onClick={onClose}
    >
      <div className={`modal-content ${imageUrl ? "active" : ""}`}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
