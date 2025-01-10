import { useContext, useState, useEffect, useCallback } from "react"
import { IoBagAdd } from "react-icons/io5"
import classes from "./Cart.module.scss"
import ButtonCartDate from "../ButtonCartDate/ButtonTabDate"
import ButtonCartClock from "../ButtonCartClock/ButtonCartClock"
import Context from "../../Context"

function Cart({ item }) {
  const [click, setClick] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [activeIndex2, setActiveIndex2] = useState(null)
  const { add, addCart, handleClickDate, handleClickClock } = useContext(Context)
  const disabled = activeIndex === null || activeIndex2 === null

  useEffect(() => {
    click ? setClick(true) : setClick(false)

    if (add.length > 0) {
      add.forEach((i) => {
        if (i.title === item.title) {
          setClick(true)
          item.date.forEach((d, index) => {
            if (i.date === d) {
              setActiveIndex(index)
            }
          })
          item.clock.forEach((c, index) => {
            if (i.clock === c) {
              setActiveIndex2(index)
            }
          })
        }
      })
    }
  }, [click])

  const handleAddCart = useCallback(() => {
    addCart(item)
    setClick(true)
  }, [item, addCart])

  return (
    <article key={item.id} className={classes.cart}>
      <div className={classes.item}>
        <div className={classes.col}>
          <img src={item.img} />
        </div>
        <div className={classes.col}>
          <div className={classes.inner}>
            <div className={classes.title}>{item.title}</div>
            <div className={classes.block}>
              <span>{item.profession[1]}</span>
              <span>|</span>
              <span>{item.profession[2]}</span>
            </div>
            <div className={classes.block}>Клиника "Здоровье"</div>
            <div className={classes.text}>Доступное время:</div>
            <div className={classes.btns}>
              {item.date.map((i, index) => (
                <ButtonCartDate
                  key={index}
                  className={activeIndex === index ? `${classes.active}` : ""}
                  onClick={() => {
                    handleClickDate(index)
                    setActiveIndex(index)
                  }}
                >
                  {i}
                </ButtonCartDate>
              ))}
            </div>
            <div className={classes.btns}>
              {item.clock.map((i, index) => (
                <ButtonCartClock
                  key={index}
                  className={activeIndex2 === index ? `${classes.active}` : ""}
                  onClick={() => {
                    handleClickClock(index)
                    setActiveIndex2(index)
                  }}
                >
                  {i}
                </ButtonCartClock>
              ))}
            </div>
            <button
              style={{
                backgroundColor: disabled || click ? "#d5c3ca" : "#FF0066",
                cursor: disabled || click ? "not-allowed" : "pointer",
              }}
              className={classes.btn}
              disabled={disabled}
              onClick={handleAddCart}
            >
              <div className={classes.btnitem}>
                <IoBagAdd />
                {click ? "Вы записаны" : "Записаться на прием"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Cart
