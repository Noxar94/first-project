import React from "react";
import ReactDom from "react-dom";
import "../styles/modal.css";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.95)",
  zIndex: 1000,
};

export default function modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-modal" style={OVERLAY_STYLES}></div>
      <div className="modal-box" style={MODAL_STYLES}>
        <button className="close-btn" onClick={onClose}>
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
