import { useContext } from "react"
import { MdAutoDelete } from "react-icons/md"
import classes from "./MyEtries.module.scss"
import Context from "../../Context"

export default function MyEtries() {
  const { add, indexDate, indexClock, removeCart } = useContext(Context)
  return (
    <div className={classes.etries}>
      <section className={classes.carts}>
        {add.length ? (
          add.map((item) => {
            return (
              <article key={item.id} className={classes.cart}>
                <div className={classes.item}>
                  <div className={classes.col}>
                    <img src={item.img} />
                  </div>
                  <div className={classes.col}>
                    <div className={classes.inner}>
                      <div className={classes.text}>Дата и время приема:</div>
                      <div className={classes.clock}>
                        {item.date} {item.clock}
                      </div>
                      <div className={classes.title}>{item.title}</div>
                      <div className={classes.block}>
                        <span>{item.profession[1]}</span>
                        <span>|</span>
                        <span>{item.profession[2]}</span>
                      </div>
                      <div className={classes.block}>Клиника "Здоровье"</div>
                      <button className={classes.btn} onClick={() => removeCart(item.id)}>
                        <div className={classes.btnitem}>
                          <MdAutoDelete />
                          <span>Отменить запись</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        ) : (
          <p className={classes.title}>Нет ни одной записи!</p>
        )}
      </section>
    </div>
  )
}
