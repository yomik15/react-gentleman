import { type ReactNode } from "react"

interface Props {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
}

function Modal({ isOpen, closeModal, children }: Props) {
  if (!isOpen) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          ❌
        </button>
        {children}
      </div>
    </div>
  )
}

function ModalHeader({ children }: Pick<Props, "children">) {
  return <div className="modal-header">{children}</div>
}

function ModalBody({ children }: Pick<Props, "children">) {
  return <div className="modal-body">{children}</div>
}
function ModalFooter({ children }: Pick<Props, "children">) {
  return <div className="modal-footer">{children}</div>
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

// export object Modal {function,Header,Body,Footer}
export default Modal
