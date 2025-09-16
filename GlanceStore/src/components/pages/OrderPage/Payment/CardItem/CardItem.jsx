import styles from "./CardItem.module.css";
import { act, useState } from "react";

const CardItem = ({ cardNumber, expiryDate, cvv }) => {

    const [active, setActive] = useState(false);

        const handleClose = (e) => {
        e.stopPropagation();
        setActive(false);
    };
    
    const maskedCardNumber = `**** ${cardNumber.slice(-4)}`;

    return (
        <div className={`${styles.card} ${active ? styles.active : ''}`} onClick={() => setActive(active ? false : true)}>
            <div className={`${styles.card__chip} ${active ? styles.active : ''}`}></div>
            <p onClick={handleClose} className={`${styles.xmark} ${active ? styles.active : ''}`}>×</p>
            <div className={styles.card__number}>{active ? cardNumber : maskedCardNumber}</div>
            <div className={styles.card__expiry}>Срок: {expiryDate}</div>
            <p>{active ? cvv : ""}</p>
        </div>
    );
};

export default CardItem;