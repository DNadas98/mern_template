import React from "react";
import "../../style/confirm.css";

function Confirm({ message, onConfirm, setConfirmMessage }) {
  return (
    <div className="Confirm">
      <div className="ConfirmBox">
        <h3>{message}</h3>
        <div className="row">
          <button
            onClick={() => {
              onConfirm();
              setConfirmMessage(null);
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setConfirmMessage(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
