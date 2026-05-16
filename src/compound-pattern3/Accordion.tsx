import { useState, type ReactNode } from "react"

type Children = {
  children: ReactNode
}
type ChildrenProps = Children & {
  title: string
}

function Accordion({ children }: Children) {
  return <div className="accordion">{children}</div>
}

Accordion.Item = function ({ children, title }: ChildrenProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  )
}
export default Accordion
