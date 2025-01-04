import { useState } from "react"
import { SlSocialYoutube } from "react-icons/sl"
import { IoBagAdd } from "react-icons/io5"
import Nav from "../Nav/Nav"
import Modal from "../Modal/Modal"
import classes from "./Header.module.scss"
import styles from "../Modal/Modal.module.scss"

export default function Header() {
  const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true)
  }

  function closeModal() {
    setModal(false)
  }

  function closeModalWithoutButton(e) {
    if (e.target.classList.contains(styles.modal)) {
      setModal(false)
    }
  }
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <SlSocialYoutube className={classes.logo} />
          <Nav />
          <button className={classes.btn} onClick={openModal}>
            <div className={classes.btnitem}>
              <IoBagAdd />
              <span>Записаться на прием</span>
            </div>
          </button>
        </header>
      </div>
      <Modal show={modal} closeModal={closeModal} closeModalWithoutButton={closeModalWithoutButton} />
    </>
  )
}
