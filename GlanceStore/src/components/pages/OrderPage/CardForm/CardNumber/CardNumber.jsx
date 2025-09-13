import { useState } from "react"
import { forwardRef } from 'react';
import styles from "./CardNumber.module.css"

const CardNumber = forwardRef((props, ref) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberErr, setCardNumberErr] = useState("");

    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 16) {
            value = value.slice(0, 16);
        }
        let formattedValue = '';
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        setCardNumber(formattedValue);
        if(!cardNumber) {
            setCardNumberErr("Номер карты обязателен")
        } else{
            setCardNumberErr("")
        }
    };
  return (
    <div className={styles.form__group}>
          <label>Номер карты</label>
          <input 
            type="text"
            ref={ref}
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onBlur={handleCardNumberChange}
            onChange={handleCardNumberChange}
            maxLength={19}
            {...props}
        />
        {cardNumberErr && <span className={styles.error}>{cardNumberErr}</span>}
    </div>
  )
})

export default CardNumber