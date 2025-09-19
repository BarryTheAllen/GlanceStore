import styles from "./Contacts.module.css";
import { useState } from "react";

const Contacts = () => {
  const [ email, setEmail ] = useState("");
  const [ emailErr, setEmailErr ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ phoneErr, setPhoneErr ] = useState("");
  const [ name, setName ] = useState("");
  const [ nameErr, setNameErr ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if(name === nameErr) {
      isValid = false;
      setNameErr("Имя не должно быть пустым");
    }
  };

  return (
    <form className={styles.form}>
        <h3 className={styles.title}>Контактные данные</h3>
        <input
        value={name}
        type="text"
        placeholder="Имя *"
        className={styles.input}
        onChange={(e) => setName(e.target.value)}
        />
        <input type="number" placeholder="Телефон *" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
    </form>
  )
}

export default Contacts