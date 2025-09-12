import styles from "./Favorites.module.css"
import { useFavorites } from '../../../hooks/favorites/useFavorites';
import Card from '../../UI/ItemCard/Card';
import { likeSet } from "../../../data/sharedData/assetsImports";

const Favorites = () => {

    const { favorites } = useFavorites()

  return (
    <>
    <h1 className={styles.title}>Избранное</h1>
    
        {favorites.length === 0 ?
        (
        <div className={styles.wrapper}>
        <img src={likeSet} alt="like-icon" className={styles.emptyimg} />
        <p className={styles.empty__title}>Здесь будут ваши избранные товары</p>
        <p className={styles.empty__desc}>Добавьте товары, чтобы не искать их снова</p>
        </div>
        ) 
        :
        (
        favorites.map((item) => {
            return (
                <div className={styles.container}>
                <Card item={item} key={item.id}/>
                </div>
            )
        })
        )
        }

    </>
  )
}

export default Favorites