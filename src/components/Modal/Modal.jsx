import { useRef } from "react"
import { CSSTransition } from "react-transition-group"
import Form from "../Form/Form"
import classes from "./Modal.module.scss"
import "./Alert.scss"

function Modal({ show, closeModal, closeModalWithoutButton }) {
  const modalRef = useRef(null)
  return (
    <CSSTransition in={show} timeout={500} classNames={"alert"} unmountOnExit>
      <div className={classes.modal} onClick={closeModalWithoutButton} ref={modalRef}>
        <div className={classes.container}>
          <div className={classes.item}>
            <Form closeModal={closeModal} />
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Modal
