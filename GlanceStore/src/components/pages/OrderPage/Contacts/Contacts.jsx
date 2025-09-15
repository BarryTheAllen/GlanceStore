import styles from "./Contacts.module.css"

const Contacts = () => {
  return (
    <form className={styles.form}>
        <h3 className={styles.title}>Контактные данные</h3>
        <input type="text" placeholder="Имя *" className={styles.input} />
        <input type="number" placeholder="Телефон *" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
    </form>
  )
}

export default Contacts