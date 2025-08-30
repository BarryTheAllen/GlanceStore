import { useState, useEffect } from 'react';
import './PriceRangeSlider.css';

const PriceRangeSlider = ({ products, onFilter }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentMax, setCurrentMax] = useState(0);

  useEffect(() => {

    const prices = products.map(product => product.price);

    setMinPrice(Math.min(...prices));

    setMaxPrice(Math.max(...prices));

    setCurrentMax(Math.max(...prices));

  }, [products]);

  const filterProducts = (newMinPrice, newMaxPrice) => {

    const filtered = products.filter(product => {

      const price = product.price;

      return price >= newMinPrice && price <= newMaxPrice;

    });

    onFilter(filtered);

  };

  const handleMinPriceChange = (event) => {

    const value = Number(event.target.value);

    setMinPrice(value);

    filterProducts(value, currentMax);

  };

  const handleMaxPriceChange = (event) => {

    const value = (event.target.value);

    setCurrentMax(value);

    filterProducts(minPrice, value);

  };

  const handleSliderChange = (event) => {

    const newMax = (event.target.value);

    setCurrentMax(newMax);

    filterProducts(minPrice, newMax);

  };

  return (
    <>
      <div className="price-range-slider">
        <div className="slider-container">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={currentMax}
            onChange={handleSliderChange}
            className="slider"
            step="1"
          />
          <div className="slider-values">
            <span>От <input 
              type="number" 
              value={minPrice} 
              onChange={handleMinPriceChange}
              placeholder="Мин. цена"
              className="range__input"
            /> ₽</span>
            <span>До <input 
              type="number" 
              value={currentMax} 
              onChange={handleMaxPriceChange}
              placeholder="Макс. цена"
              className="range__input"
            /> ₽</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceRangeSlider;