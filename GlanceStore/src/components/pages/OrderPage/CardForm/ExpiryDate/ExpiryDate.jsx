import { useState } from "react";
import { forwardRef } from 'react';
import styles from "./ExpiryDate.module.css"

const ExpiryDate = forwardRef((props, ref) => {
    const [cardDate, setCardDate] = useState("");
    const [dateErr, setDateErr] = useState("");


    const isOnlyDigits = (str) => /^\d+$/.test(str);

    const handleInputChange = (e) => {
        let value = e.target.value;
        

        if (value.length === 2 && cardDate.length === 1) {
            value += '/';
        }
        
        setCardDate(value);
        

        validateExpiryDate(value);
    };

    const validateExpiryDate = (date) => {
        setDateErr("");
        
        if (!date) {
            setDateErr("Срок действия обязателен");
            return;
        }
        
        if (date.length !== 5 || date[2] !== '/') {
            setDateErr("Формат: ММ/ГГ");
            return;
        }
        
        const monthStr = date.substring(0, 2);
        const yearStr = date.substring(3, 5);
        
        if (!isOnlyDigits(monthStr) || !isOnlyDigits(yearStr)) {
            setDateErr("Месяц и год должны быть цифрами");
            return;
        }
        
        const month = parseInt(monthStr, 10);
        const year = parseInt(yearStr, 10);
        
        if (month < 1 || month > 12) {
            setDateErr("Неверный месяц");
            return;
        }
        
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            setDateErr("Карта просрочена");
            return;
        }
        

        setDateErr("");
    };

    return (
        <div className={styles.form__group}>
            <label>Срок действия</label>
            <input
                type="text"
                ref={ref}
                placeholder="ММ/ГГ"
                value={cardDate}
                onChange={handleInputChange}
                onBlur={() => validateExpiryDate(cardDate)}
                maxLength={5}
                {...props}
            />
            {dateErr && <span className={styles.error}>{dateErr}</span>}
        </div>
    );
})

export default ExpiryDate;