import { useCart }  from "../../hooks/cart/useCart";    

const Total = () => {
    
    const { cart } = useCart();
    
    const totalSum = cart.reduce((sum, item) => {
        const price = Number(item.price.toString().replace(/\D/g, ''));
        return sum + (price * item.quantity);
    }, 0);

  return (
    <p>Сумма заказа: {totalSum.toLocaleString('ru-RU')} ₽</p>
  )
}

export default Total