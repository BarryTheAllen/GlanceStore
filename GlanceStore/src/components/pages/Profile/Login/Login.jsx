import { Link } from "react-router";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
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
        <p className={styles.form__title}>Вход</p>
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
          
          <button type="submit" className={styles.btn__submit}>Войти</button>
        </form>
        <Link to={"/Registration"} className={styles.link}>Нет аккаунта? Регистрация</Link>
      </div>
    </div>
  );
};

export default Login;