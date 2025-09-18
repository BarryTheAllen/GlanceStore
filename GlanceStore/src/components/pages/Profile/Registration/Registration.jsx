import { Link } from "react-router";
import { useState } from "react";
import styles from "./Registration.module.css";
import DefaultBtn from "../../../UI/DefaultBtn/DefaultBtn";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email.includes('@')) {
      setEmailError("Введите корректный email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Пароль должен быть не менее 6 символов");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      console.log("Форма отправлена:", { email, password });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.form__title}>Регистрация</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Введите email" 
            className={`${styles.input} ${emailError ? styles.inputError : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className={styles.error}>{emailError}</span>}
          
          <input 
            type="password" 
            placeholder="Введите пароль" 
            className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className={styles.error}>{passwordError}</span>}
          
           <DefaultBtn text={"Регистрация"} width={150} height={40}/>
        </form>
        <Link to={"/Login"} className={styles.link}>Уже есть аккаунт? Войти</Link>
      </div>
    </div>
  );
};

export default Registration;