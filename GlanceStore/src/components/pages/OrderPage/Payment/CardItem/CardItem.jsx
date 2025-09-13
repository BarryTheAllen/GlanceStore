import styles from "./CardItem.module.css"

const CardItem = ({ cardNumber, expiryDate }) => {
    const maskedCardNumber = `**** ${cardNumber.slice(-4)}`;
    return (
        <div className={styles.card}>
            <div className={styles.card__chip}></div>
            <div className={styles.card__number}>{maskedCardNumber}</div>
            <div className={styles.card__expiry}>Срок: {expiryDate}</div>
        </div>
    );
};

export default CardItem;