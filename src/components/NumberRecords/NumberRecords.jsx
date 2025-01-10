import { useContext } from "react"
import Context from "../../Context"
import classes from "./NumberRecords.module.scss"

function NumberRecords() {
  const { add } = useContext(Context)
  return (
    <>
      {add.length > 0 && (
        <div className={classes.block}>
          <div className={classes.item}>{add.length}</div>
        </div>
      )}
    </>
  )
}

export default NumberRecords
