import styles from "./CardForm.module.css"
import ExpiryDate from "./ExpiryDate/ExpiryDate";
import CardNumber from "./CardNumber/CardNumber";
import CVV from "./CVV/CVV";
import { useRef } from "react";

const CardForm = ({ onClose, onAddCard }) => {
  const cardNumberRef = useRef(null);
  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);
  const formRef = useRef(null);

    const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      cardNumber: cardNumberRef.current?.value || '',
      expiryDate: expiryDateRef.current?.value || '',
      cvv: cvvRef.current?.value || ''
    };

    console.log('Данные для отправки:', formData);
    onAddCard(formData)

    resetForm()
     if (onClose) {
            onClose();
        }
}

    const resetForm = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
         if (cardNumberRef.current) cardNumberRef.current.value = '';
        if (expiryDateRef.current) expiryDateRef.current.value = '';
        if (cvvRef.current) cvvRef.current.value = '';
    }
  return (
    <div className={styles.card__form}>
      <h2>Добавить новую карту</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <CardNumber ref={cardNumberRef} />
        <ExpiryDate ref={expiryDateRef} />
        <CVV ref={cvvRef} />
        <button type="submit" className={styles.submit__btn}>
          Добавить карту
        </button>
      </form>
    </div>
  )
}

export default CardForm