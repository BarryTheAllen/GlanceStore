import "./Order.css"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Payment from "./Payment/Payment";
import Contacts from "./Contacts/Contacts";
import Total from "../../../features/Total/total";
import DefaultBtn from "../../UI/DefaultBtn/DefaultBtn";
import { Map, YMaps } from "@pbe/react-yandex-maps";



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
        <YMaps>
          <Map defaultState={{center: [55.75, 37.57], zoom: 9}} style={{width: "200px", height: "200px"}} />
        </YMaps>
        <Contacts />
        <Payment />
        <Total />
        <DefaultBtn text={"Оплатить"} width={267} height={49}/>
    </div>
  )
}

export default Order