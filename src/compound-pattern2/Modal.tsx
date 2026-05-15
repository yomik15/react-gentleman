import { createContext, useContext, useState, type ReactNode } from "react"

// Define the interface for your context structure
interface ModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

// Create the context with a default value
const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
})

type ChildrenType = {
  children: ReactNode
}

function Modal({ children }: ChildrenType) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // if (!isOpen) return null
  if (!isOpen) return <button onClick={openModal}>Open Modal</button>
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      <div className="modal-backdrop">
        <div className="modal-container">
          {/* <button className="modal-close" onClick={closeModal}> */}
          {/*   ❌ */}
          {/* </button> */}
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  )
}

// Modal.Trigger = function ({ children }: ChildrenType) {
//   const { openModal } = useContext(ModalContext)
//   console.log({ openModal })
//   return <button onClick={openModal}>{children}</button>
// }

Modal.Close = function () {
  const { closeModal } = useContext(ModalContext)
  return (
    <button className="modal-close" onClick={closeModal}>
      ❌
    </button>
  )
}

Modal.Header = function ({ children }: ChildrenType) {
  return (
    <div className="modal-header">
      <h2>{children}</h2>
    </div>
  )
}

Modal.Body = function ({ children }: ChildrenType) {
  return (
    <div className="modal-body">
      <p>{children}</p>
    </div>
  )
}

Modal.FooterBtns = function () {
  const { closeModal } = useContext(ModalContext)
  return (
    <div className="modal-footer">
      <button onClick={closeModal}>Close </button>
      <button onClick={() => alert("Action performed!")}>Do Action</button>
    </div>
  )
}

// export object Modal {function,Header,Body,Footer}
export default Modal
