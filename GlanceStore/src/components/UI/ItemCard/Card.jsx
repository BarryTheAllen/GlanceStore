import Slider from "../../pages/HomeSection/slider/Slider";
import { useNavigate } from "react-router";
import "../ItemCard/Card.css";
import { useFavActions } from "../../../hooks/favorites/useFavActions";
import { useFavorites } from "../../../hooks/favorites/useFavorites";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
const Card = ({ item }) => {
    const navigate = useNavigate();
    
    const { favorites } = useFavorites();
    const { toggleLike } = useFavActions();

    const isLiked = favorites?.some(favItem => favItem.id === item.id) || false;

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
                    <div className="set-like-btn" onClick={() => toggleLike(item)}>
                        <img 
                            src={isLiked ? item.likeSetsImg : item.setLikeImg} 
                            alt="Лайк"
                            className="set__like"
                        />
                    </div>
                </div>
            </div>
            <AddToCartBtn item={item} />
        </div>
    );
};

export default Card;