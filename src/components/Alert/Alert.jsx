import { FcApproval } from "react-icons/fc"
import { CSSTransition } from "react-transition-group"
import classes from "./Alert.module.scss"
import "../Modal/Alert.scss"

function Alert({ show }) {
  return (
    <CSSTransition in={show} timeout={500} classNames={"alert"} unmountOnExit>
      <div className={classes.item}>
        <div className={classes.block}>
          <FcApproval />
          <span>Данные успешно сохранены</span>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Alert
