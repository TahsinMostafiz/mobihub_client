import React from "react";

const ConfirmationModal = ({
  title,
  message,
  deleteCancel,
  handleDeleteProduct,
  product,
  confirmButton,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => handleDeleteProduct(product)}
              htmlFor="confirmation-modal"
              className="btn btn-error text-white"
            >
              {confirmButton}
            </label>
            <button
              onClick={deleteCancel}
              className="btn btn-secondary text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
