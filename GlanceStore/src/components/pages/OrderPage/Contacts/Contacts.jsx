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
    if(name.length < 1) {
      setNameErr("Имя не должно быть пустым");
    } else {
      setNameErr("")
    }
  };
  
  const handleEmail = (value) => {
    setEmail(value);
    if(!email.includes('@')) {
      setEmailErr("Введите корректный email");
    } else if(email.includes("([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)")) {
      setEmailErr("sdadas")
    }
  };

  return (
    <form className={styles.form}>
        <h3 className={styles.title}>Контактные данные</h3>
        <input
        value={name}
        type="text"
        onBlur={e => handleName(e.target.value)}
        placeholder="Имя *"
        className={styles.input}
        onChange={e => handleName(e.target.value)}
        onClick={() => setNameErr("")}
        />
        {nameErr && <span className={styles.error}>{nameErr}</span>}
        <input type="number" placeholder="Телефон *" className={styles.input} />
        <input
        type="email"
        placeholder="Email"
        onBlur={e => handleEmail(e.target.value)}
        onChange={e => handleEmail(e.target.value)}
        className={styles.input}
        onClick={() => setEmailErr("")}
        />
        {emailErr && <span className={styles.error}>{emailErr}</span>}
    </form>
  )
}

export default Contacts