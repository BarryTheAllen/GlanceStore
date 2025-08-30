import { useState } from 'react';
import "./Sorter.css"

const SortByPrice = ({ products, onSort }) => {
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (option) => {
    setSortOption(option);
    
    if (option === 'default') {
      onSort([...products]);
      return;
    }

    const sortedProducts = [...products].sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      
      return option === 'price-low-high' ? priceA - priceB : priceB - priceA;
    });
    
    onSort(sortedProducts);
  };

  return (
    <div className="sort-by-price">
      <select
        value={sortOption}
        onChange={(e) => handleSortChange(e.target.value)}
        className="sort-select"
      >
        <option value="default">По умолчанию</option>
        <option value="price-low-high">От дешевых к дорогим</option>
        <option value="price-high-low">От дорогих к дешевым</option>
      </select>
    </div>
  );
};

export default SortByPrice;