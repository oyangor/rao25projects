import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleClick() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div className="modal-container">
      <button onClick={handleClick}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={onClose} />}
    </div>
  );
}
