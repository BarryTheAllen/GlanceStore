import Slider from "../../pages/HomeSection/slider/Slider";
import { useNavigate } from "react-router";
import "../ItemCard/Card.css";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import AddToFavBtn from "../AddToFavBtn/AddToFavBtn";

const Card = ({ item }) => {
    const navigate = useNavigate();
    
    const handleOpenCard = () => {
        navigate("/carddescription", {
            state: { product: item },
        });
    };

    return (
        <div className="stock__item">
                <div className="stock__item-link">
                <div className="wrapper__inner">
                    <div className="wrapper__inner-item">
                        <span className={item.discount ? "discount" : ""}>{item?.discount}</span>
                        <div className="img-inner-wrapper" onClick={handleOpenCard}>
                            <Slider images={item.techImg}/>
                        </div>
                    </div>
                </div> 
                <p className="stock__desc" onClick={handleOpenCard}>{item.title}</p>
                <div className="price__wrapper">
                    <p className="discount__price">{item.price.toLocaleString('ru-RU')} ₽</p>
                    <p className="stock__price">{item.discountPrice.toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className="isAviavable__wrapper">
                    <p className={item.isAviavable ? "aviavable" : "not__aviavable"}>{item.isAviavable ? "В наличии" : "Нет в наличии"}</p>
                        <AddToFavBtn item={item} />
                </div>
            </div>
            <AddToCartBtn item={item} />
        </div>
    );
};

export default Card;