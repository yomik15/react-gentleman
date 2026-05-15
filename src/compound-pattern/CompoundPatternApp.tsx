import { useState } from "react"
import "../App.css"
import Modal from "./Modal.tsx"
export function CompoundPatternApp() {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Modal.Header>
          <h2>Delete Account</h2>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure to delete account?</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={closeModal}>Close </button>
          <button onClick={() => alert("Action performed!")}>Do Action</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
