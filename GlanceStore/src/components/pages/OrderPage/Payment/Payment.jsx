import CardFormModal from "./CardFormModal/CardFormModal";
import CardForm from "./CardForm/CardForm";
import CardItem from "./CardItem/CardItem";
import { useState } from "react";
import styles from "./Payment.module.css"
import CardModal from "./CardModalItem/CardModal";

const Payment = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [cards, setCards] = useState([]);

    const handleAddCard = (cardData) => {
        setCards(prev => [...prev, cardData]);
    }

  return (
    <div className={styles.container}>
        <h3 className="title">Оплата</h3>
    <div className={styles.payment}>
        <div className={styles.cardList}>
            {cards.map((card, index) => (
                <CardItem key={index} cardNumber={card.cardNumber} expiryDate={card.expiryDate} />
            ))}
        </div>
        <button className={styles.addCardBtn} onClick={() => setIsOpen(true)}>
            Новая карта +
        </button>
        <CardFormModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <CardForm onClose={() => setIsOpen(false)} onAddCard={handleAddCard}/>
        </CardFormModal>
    </div>
    </div>
  )
}

export default Payment