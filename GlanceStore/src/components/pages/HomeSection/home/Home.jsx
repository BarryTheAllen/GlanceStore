import Hero from "../hero/Hero"
import Catalog from "../catalog/Catalog"
import Discounts from "../discounts/Discounts"

const Home = ({cardData, onAddToCart, category}) => {
  return (
    <>
    <Hero/>
    <Catalog/>
    <Discounts cardData={cardData} onAddToCart={onAddToCart} category={category}/>
    </>
  )
}

export default Home