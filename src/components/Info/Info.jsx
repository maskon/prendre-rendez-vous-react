import { useState } from "react"
import classes from "./Info.module.scss"
import Carts from "../Carts/Carts"
import PersonalInformation from "../PersonalInformation/PersonalInformation"
import MyEtries from "../MyEtries/MyEtries"
import ButtonTabs from "../ButtonTabs/ButtonTabs"
import NumberRecords from "../NumberRecords/NumberRecords"

function Info() {
  const [tab, setTab] = useState(<Carts />)
  const [activeButton, setActiveButton] = useState(0)

  function handleClick(componet, index) {
    setTab(componet)
    setActiveButton(index)
  }

  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <ButtonTabs
          isActive={activeButton === 0 ? `${classes.btn} ${classes.active}` : classes.btn}
          onClick={() => handleClick(<Carts />, 0)}
        >
          Расписание приемов
        </ButtonTabs>
        <ButtonTabs
          isActive={activeButton === 1 ? `${classes.btn} ${classes.active}` : classes.btn}
          onClick={() => handleClick(<MyEtries />, 1)}
        >
          Мои записи
          <NumberRecords />
        </ButtonTabs>
        <ButtonTabs
          isActive={activeButton === 2 ? `${classes.btn} ${classes.active}` : classes.btn}
          onClick={() => handleClick(<PersonalInformation />, 2)}
        >
          Личная информация
        </ButtonTabs>
      </div>
      <div>{tab}</div>
    </div>
  )
}

export default Info
