import styles from './CardModal.module.css'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const CardModal = ({ isOpen, onClose, children, cardNumber, expiryDate  }) => {
  const maskedCardNumber = `**** ${cardNumber.slice(-4)}`;
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0'
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
            asdasdaasasdasasa
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default CardModal