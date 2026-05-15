import { type ReactElement } from "react"

interface Props {
  isOpen: boolean
  closeModal: () => void
  title: string
  body: string
  closeBtn: ReactElement
  alertBtn: ReactElement
}

export const Modal = ({
  isOpen,
  closeModal,
  title,
  body,
  closeBtn,
  alertBtn,
}: Props) => {
  if (!isOpen) return null
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          ❌
        </button>
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="modal-footer">
          {closeBtn}
          {alertBtn}
        </div>
      </div>
    </div>
  )
}
