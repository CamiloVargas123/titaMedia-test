import { ModalClose, ModalOverlay, ModalStyled } from "src/styled-components/Modal.styled"
import { createPortal } from "react-dom"

interface Porps {
  children: JSX.Element | JSX.Element[]
  open: boolean
  onClose: () => void
  closeOverlay?: boolean
}
export default function Modal({ open, children, onClose, closeOverlay }: Porps) {
  if (!open) return null

  return createPortal(
    <ModalOverlay onClick={closeOverlay ? onClose : () => null}>
      <ModalStyled>
        <ModalClose>
          <button>x</button>
        </ModalClose>
        {children}
      </ModalStyled>
    </ModalOverlay>,
    document.getElementById('portal') as HTMLElement
  )
}
