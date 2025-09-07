import { useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import "./Sorter.css"

const SortByPrice = ({ products, onSort }) => {

  const [active, setActive] = useState(false)
  
  const handleSetActive = () => {
    setActive(() => {
      if(active === true) {
        setActive(false)
      } else {
        setActive(true)
      }
    })
  }

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
      <div className="select" >
        <span className='sorter'  onClick={() => handleSetActive()} >Сортировка <FaArrowUp className={active ? "arrow__sort-active" : "arrow__sort"}/></span>
        <div className={active ? "option__wrapper-active" : "option__wrapper"}>
          <span className='option' onClick={() => handleSortChange("default")}>По умолчанию</span>
          <span className='option' onClick={() => handleSortChange("price-low-high")}>От дешевых к дорогим</span>
          <span className='option' onClick={() => handleSortChange("price-high-low")}>От дорогих к дешевым</span>
        </div>
      </div>
    </div>
  );
};

export default SortByPrice;