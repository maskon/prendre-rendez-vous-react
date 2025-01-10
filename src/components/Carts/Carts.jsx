import Cart from "../Cart/Cart"
import data from "../../data"
import classes from "./Carts.module.scss"

function Carts() {
  return (
    <>
      <div className={classes.buttons}>
        <button className={classes.white}>Специализация</button>
        <button className={classes.white}>Клиника</button>
      </div>
      <section className={classes.carts}>
        {data.map((item) => (
          <Cart item={item} key={item.id} />
        ))}
      </section>
    </>
  )
}

export default Carts
