import { useState } from "react";
import Card from "../../UI/ItemCard/Card";
import SortByPrice from "../../../features/PriceSorter/Sorter";
import PriceRangeSlider from "../../../features/RangeSlider/RangeSlider";
import "./CatalogComponent.css";

const CatalogComponent = ({ cardData, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(cardData);

  const handleSort = (sortedProducts) => {
    setFilteredProducts(sortedProducts);
  };

    const handleFilter = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  return (
    <section className="component__catalog-section">
      <div className="component__section-wrapper">
        <div className="sort">
        <h3>Сортировка по цене</h3>
        <SortByPrice
            products={cardData} 
            onSort={handleSort} 
          />
        <PriceRangeSlider
          products={cardData}
          onFilter={handleFilter}
        />
        </div>
        <div className="item__container">
          {filteredProducts.map(item => (
            <Card 
              item={{ ...item, id: `${category}_${item.id}` }} 
              key={`${category}_${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogComponent;