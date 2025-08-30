import Hero from "../hero/Hero"
import Catalog from "../catalog/Catalog"
import Discounts from "../discounts/Discounts"

const Home = ({cardData, onAddToCart}) => {
  return (
    <>
    <Hero/>
    <Catalog/>
    <Discounts cardData={cardData} onAddToCart={onAddToCart}/>
    </>
  )
}

export default Home