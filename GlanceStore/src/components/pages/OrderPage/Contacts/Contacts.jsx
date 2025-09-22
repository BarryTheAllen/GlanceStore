import styles from "./Contacts.module.css";
import { useState } from "react";

const Contacts = () => {
  const [ email, setEmail ] = useState("");
  const [ emailErr, setEmailErr ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ phoneErr, setPhoneErr ] = useState("");
  const [ name, setName ] = useState("");
  const [ nameErr, setNameErr ] = useState("");

  const handleName = (value) => {
    setName(value)
    if(!value) {
      setNameErr("Имя не должно быть пустым");
    } else {
      setNameErr("")
    }
  };
  
  const handleEmail = (value) => {
    setEmail(value);
    if(!value) {
      setEmailErr("Email не должен быть пустым");
    }
    else if(!email.includes('@')) {
      setEmailErr("Введите корректный email");
    }
  };

  const handlePhone = (value) => {
    setPhone(value);
    const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
    if(!phoneRegExp.test(phone)) {
      setPhoneErr("Введите корректный номер телефона");
    } else {
      setPhoneErr("");
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
        onBlur={e => handleName(e.target.value)}
        onChange={e => handleName(e.target.value)}
        onClick={() => setNameErr("")}
        />
        {nameErr && <span className={styles.error}>{nameErr}</span>}
        <input
        type="tel"
        placeholder="Телефон *"
        onChange={e => handlePhone(e.target.value)}
        className={styles.input}
        onBlur={e => handlePhone(e.target.value)}
        onClick={() => setPhoneErr("")}
        />
        {phoneErr && <span className={styles.error}>{phoneErr}</span>}
        <input
        type="email"
        placeholder="Email"
        onChange={e => handleEmail(e.target.value)}
        className={styles.input}
        onBlur={e => handleEmail(e.target.value)}
        onClick={() => setEmailErr("")}
        />
        {emailErr && <span className={styles.error}>{emailErr}</span>}
    </form>
  )
}

export default Contacts