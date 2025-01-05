import { useForm } from "react-hook-form"
import classes from "./Form.module.scss"

function Form({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className={classes.title}>Запись на прием</h3>
      <div className={classes.block}>
        <input
          placeholder='ФИО врача'
          {...register("Name", {
            required: true,
            minLength: 3,
            pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
          })}
        />
        {errors.Name?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Name?.type === "minLength" && <p className={classes.error}>Минимум 3 символа</p>}
        {errors.Name?.type === "pattern" && <p className={classes.error}>Некорректно введено ФИО</p>}
      </div>

      <div className={classes.block}>
        <input
          placeholder='Отделение'
          {...register("Branch", {
            required: true,
            minLength: 3,
            pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
          })}
        />
        {errors.Branch?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Branch?.type === "minLength" && <p className={classes.error}>Минимум 3 символа</p>}
        {errors.Branch?.type === "pattern" && <p className={classes.error}>Некорректно введено отделение</p>}
      </div>

      <div className={classes.block}>
        <input
          placeholder='Специальность'
          {...register("Speciality", {
            required: true,
            minLength: 3,
            pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
          })}
        />
        {errors.Speciality?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Speciality?.type === "minLength" && <p className={classes.error}>Минимум 3 символа</p>}
        {errors.Speciality?.type === "pattern" && <p className={classes.error}>Некорректно введенa cпециальность</p>}
      </div>

      <div className={classes.block}>
        <input
          placeholder='Номер страхового полиса'
          {...register("Policy", {
            required: true,
            minLength: 16,
            pattern: /^[0-9]+[0-9]*$/,
          })}
        />
        {errors.Policy?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Policy?.type === "minLength" && <p className={classes.error}>Минимум 16 символов</p>}
        {errors.Policy?.type === "pattern" && <p className={classes.error}>Некорректно введен номер</p>}
      </div>

      <div className={classes.block}>
        <input
          placeholder='Номер телефона'
          {...register("Phone", {
            required: true,
            pattern: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
          })}
        />
        {errors.Phone?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Phone?.type === "pattern" && <p className={classes.error}>Введите корректный телефон</p>}
      </div>

      <div className={classes.block}>
        <input
          placeholder='Примечание'
          {...register("Note", {
            required: true,
            minLength: 3,
            pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
          })}
        />
        {errors.Note?.type === "required" && <p className={classes.error}>Поле не может быть пустым</p>}
        {errors.Note?.type === "minLength" && <p className={classes.error}>Минимум 3 символа</p>}
        {errors.Note?.type === "pattern" && <p className={classes.error}>Некорректно введенo примечание</p>}
      </div>

      <div className={classes.btns}>
        <button type='submit' className={classes.red}>
          Записаться
        </button>
        <button type='reset' className={classes.white} onClick={closeModal}>
          Отменить
        </button>
      </div>
    </form>
  )
}

export default Form
