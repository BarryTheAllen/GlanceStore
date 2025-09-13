import "./Order.css"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Payment from "./Payment/Payment";


const Order = () => {
    const [orderMethod, setOrderMethod] = useState("Самовывоз");
    const [active, setActive] = useState(false);


      const handleActive = () => {
    setActive(() => {
      if(active) {
        setActive(false)
      } else {
        setActive(true)
      }
    })
  };

  return (
    <div className="container">
        <div className="waytoget__wrapper">
        <p className="currentoption" onClick={handleActive}>{orderMethod} <FaArrowRight/></p>
        <div className={active ? "waytoget_active" : "waytoget"}>
            <p
             onClick={() => setOrderMethod("Самовывоз")}
             className={active && orderMethod !== "Самовывоз" ? "orderoption_active" : "orderoption"}
             >
            {orderMethod !== "Самовывоз" ? "Самовывоз" : ""}
            <FaArrowRight/>
            </p>  
            <p
             onClick={() => setOrderMethod("Курьером")}
             className={active && orderMethod !== "Курьером" ? "orderoption_active" : "orderoption"}
             >Курьером <FaArrowRight/></p>
            <p
             onClick={() => setOrderMethod("Служба доставки")}
             className={active && orderMethod !== "Служба доставки" ? "orderoption_active" : "orderoption"}
             >Служба доставки <FaArrowRight/></p>
        </div>
        </div>
        <form className="form">
            <h3 className="title">Контактные данные</h3>
            <input type="text" placeholder="Имя *" className="input" />
            <input type="number" placeholder="Телефон *" className="input" />
            <input type="email" placeholder="Email" className="input" />
        </form>
        <Payment />
    </div>
  )
}

export default Order