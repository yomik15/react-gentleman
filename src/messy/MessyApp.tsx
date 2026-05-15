import { useState } from "react"
import "../App.css"
import { Modal } from "./Modal"

export function MessyApp() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        // closeIconBtn={<button onClick={closeModal}>❌</button>}
        title="Delete Account"
        body="Are you sure to delete account?"
        closeBtn={<button onClick={closeModal}>Close </button>}
        alertBtn={
          <button onClick={() => alert("Action performed!")}>Do Action</button>
        }
      ></Modal>
    </div>
  )
}
