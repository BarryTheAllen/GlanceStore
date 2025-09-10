import styles from "./AddToCartBtn.module.css";
import { useFavActions } from "../../../hooks/favorites/useFavActions";
import { useFavorites } from "../../../hooks/favorites/useFavorites";
import { setlike, likeSet } from "../../../data/sharedData/assetsImports";


const AddToFavBtn = ({item}) => {

    const { toggleLike } = useFavActions();

    const { favorites } = useFavorites()
        const isLiked = favorites.some(favItem => favItem.id === item.id);

  return (
    <div className={styles.btn} onClick={() => toggleLike(item)}>
        <img 
            src={isLiked ? likeSet : setlike} 
            alt="Лайк"
            className={styles.btn__img}
        />
    </div>
  )
}

export default AddToFavBtn