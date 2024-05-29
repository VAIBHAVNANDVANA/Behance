// src/components/Modal.js
import React from 'react';

const Modal = ({ image, onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <span className="close-modal">&times;</span>
            <img className="modal-content" src={image.src} alt={image.alt} />
        </div>
    );
};

export default Modal;
