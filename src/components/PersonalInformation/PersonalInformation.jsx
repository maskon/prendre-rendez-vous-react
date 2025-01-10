import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import Alert from "../Alert/Alert"
import classes from "./PersonalInformation.module.scss"
// РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ https://docs.salebot.pro/peremennye-1/spisok-poleznykh-regulyarnykh-vyrazhenii

function PersonaylInformation() {
  const [alertMini, setAlertMini] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    setAlertMini(true)
    localStorage.setItem("formData", JSON.stringify(data))
    console.log(data)

    setTimeout(() => {
      setAlertMini(false)
    }, 2000)
  }

  useEffect(() => {
    const savedData = localStorage.getItem("formData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setValue("FirstName", parsedData.FirstName)
      setValue("LastName", parsedData.LastName)
      setValue("DateOfBirth", parsedData.DateOfBirth)
      setValue("Email", parsedData.Email)
      setValue("PhoneNumber", parsedData.PhoneNumber)
      setValue("INN", parsedData.INN)
      setValue("InsurancePolicyNumber", parsedData.InsurancePolicyNumber)
    }
  }, [])

  function registerInput(minLength, pattern) {
    return { required: true, minLength, pattern, maxLength: 20 }
  }

  function validation(title, text, text2, text3) {
    return (
      <>
        {errors[title]?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors[title]?.type === "pattern" && <p className={classes.error}>{text}</p>}
        {errors[title]?.type === "minLength" && <p className={classes.error}>{text2}</p>}
        {errors[title]?.type === "maxLength" && <p className={classes.error}>{text3}</p>}
      </>
    )
  }

  return (
    <>
      <form className={classes.info} onSubmit={handleSubmit(onSubmit)}>
        <h4 className={classes.title}>Личные данные</h4>
        <div className={classes.block}>
          <div className={classes.item}>
            <input placeholder='Фамилия' {...register("FirstName", registerInput(3, /^[а-яА-ЯёЁa-zA-Z]+$/))} />
            {validation("FirstName", "Некорректно введена фамилия", "Минимум 3 символа")}
          </div>
          <div className={classes.item}>
            <input placeholder='Имя' {...register("LastName", registerInput(3, /^[а-яА-ЯёЁa-zA-Z]+$/))} />
            {validation("LastName", "Некорректно введено имя", "Минимум 3 символа")}
          </div>
          <div className={classes.item}>
            <input
              placeholder='Дата рождения'
              {...register("DateOfBirth", registerInput(0, /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/))}
            />
            {validation("DateOfBirth", "ВВедите дату в формате DD.MM.YYYY")}
          </div>
        </div>
        <h4 className={classes.title}>Контактные данные</h4>
        <div className={classes.block}>
          <div className={classes.item}>
            <input
              placeholder='Электронная почта'
              {...register("Email", registerInput(0, /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/iu))}
            />
            {validation("Email", "Введите правильный e-mail")}
          </div>
          <div className={classes.item}>
            <input
              placeholder='Номер телефона'
              {...register("PhoneNumber", registerInput(0, /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/))}
            />
            {validation("PhoneNumber", "Введите корректный телефон")}
          </div>
          <div className={classes.item}>
            <input placeholder='ИНН' {...register("INN")} />
          </div>
        </div>
        <h4 className={classes.title}>Страховой полис</h4>
        <div className={classes.block}>
          <div className={classes.item}>
            <input
              placeholder='Номер страхового полиса'
              {...register("InsurancePolicyNumber", registerInput(16, /^[0-9]+[0-9]*$/))}
            />
            {validation(
              "InsurancePolicyNumber",
              "Номер может состоять только из цифр",
              "Минимум 16 символов",
              "Максиммум 20 символов"
            )}
          </div>
        </div>
        <button type='submit' className={classes.btn}>
          Сохранить изменения
        </button>
      </form>
      <Alert show={alertMini} />
    </>
  )
}

export default PersonaylInformation
