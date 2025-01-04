import { Link } from "react-router"
import classes from "./Nav.module.scss"

function Nav() {
  return (
    <nav className={classes.item}>
      <Link className={classes.link} to='/'>
        Главная
      </Link>
      <Link className={classes.link} to='/about'>
        Информация
      </Link>
    </nav>
  )
}

export default Nav
