import { useLocation } from 'react-router';
import styles from "./SearchResult.module.css"
import Card from '../../UI/ItemCard/Card';

const SearchResult = () => {

    const location = useLocation()
    
    const searchProduct = location.state?.searchProduct || [];

  return (
    <>
    <h1 className={styles.title}>Результаты поиска</h1>
    <div className={styles.container}>
        {searchProduct.map((item) => {
            return (
                <Card item={item}/>
            )
        })}
    </div>
    </>
  )
}

export default SearchResult