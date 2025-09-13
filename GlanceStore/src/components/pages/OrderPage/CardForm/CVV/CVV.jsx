import { useState } from "react"
import { forwardRef } from 'react';
import styles from "./CVV.module.css"

const CVV = forwardRef((props, ref) => {

    const [cardCVV, setCardCVV] = useState("");
    const [cardCVVErr, setCardCVVErr] = useState("");
    const handleCVV = (value) => {
        setCardCVV(value)
        if(cardCVV.length < 3) {
            setCardCVVErr("CVV должен быть не меньше 3 цифр")
            return;
        }
        if(!cardCVV) {
            setCardCVVErr("это поле обязательно")
            return;
        } else {
            setCardCVVErr("")
            return;
        }
    }

  return (
    <div className={styles.form__group}>
        <label>CVV</label>
        <input
        ref={ref}
        type="text"
        placeholder="123"
        value={cardCVV}
        onBlur={(e) => handleCVV(e.target.value)}
        onChange={e => handleCVV(e.target.value)}
        maxLength={3}
        minLength={3}
        {...props}
        />
        {cardCVVErr && <span className={styles.error}>{cardCVVErr}</span>}
    </div>
  )
})

export default CVV