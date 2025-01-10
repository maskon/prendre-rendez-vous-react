import classes from "./Intro.module.scss"

let userName

function showUser() {
  const savedData = localStorage.getItem("formData")
  if (savedData) {
    const parsedData = JSON.parse(savedData)
    userName = `${parsedData.FirstName} ${parsedData.LastName}`
  }
}

function Intro() {
  showUser()

  return (
    <div className={classes.container}>
      <div className={classes.intro}>
        <h3 className={classes.title}>Личный кабинет</h3>
        <span className={classes.text}>Добро пожаловать {userName ? userName : "(First Name)"}</span>
      </div>
    </div>
  )
}

export default Intro
