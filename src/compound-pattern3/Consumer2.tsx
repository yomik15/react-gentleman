import { useState } from "react"
import "../App.css"
import Modal from "./Modal.tsx"
import { AccordionConsumer } from "./AccordionConsumer.tsx"
export function Consumer2() {
  // const [isOpen, setIsOpen] = useState(false)

  // const closeModal = () => {
  //   setIsOpen(false)
  // }

  return (
    <div className="flex flex-col items-center">
      {/* <Modal isOpen={isOpen} closeModal={closeModal}> */}
      <Modal>
        {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
        {/* <Modal.Trigger>Open Modal</Modal.Trigger> */}

        <Modal.Close />
        <Modal.Header>
          {/* <h2>Delete Account</h2> */}
          Delete Account
        </Modal.Header>
        <Modal.Body>
          {/* Are you sure to delete account? */}
          <p>Are you sure to delete account?</p>
          <AccordionConsumer />
        </Modal.Body>
        {/* <Modal.FooterBtns>        <Modal.FooterBtns> */}
        {/**/}
        {/*   <button onClick={closeModal}>Close </button> */}
        {/*   <button onClick={() => alert("Action performed!")}>Do Action</button> */}
        {/* </Modal.FooterBtns> */}
        <Modal.FooterBtns />
      </Modal>
    </div>
  )
}
