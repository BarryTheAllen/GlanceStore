import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import computersCatalog from "../../data/catalogComponentData/computersData"
import laptopsCatalog from "../../data/catalogComponentData/laptopsCatalogData"
import phonesCatalog from "../../data/catalogComponentData/phonesCatalog"
import speakerCatalog from  "../../data/catalogComponentData/speakersCatalogData"
import tabletCatalog from  "../../data/catalogComponentData/tabletData"
import tvCatalog from  "../../data/catalogComponentData/tvCatalogData"
import styles from "./Search.module.css"

const Search = () => {
    const [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);
        
        return () => clearTimeout(handler);
    }, [value]);

    const productList = [...computersCatalog, ...laptopsCatalog, ...phonesCatalog, ...speakerCatalog, ...tabletCatalog, ...tvCatalog];

    const getProductCategory = (product) => {
        if (computersCatalog.some(item => item.id === product.id)) return 'Computers';
        if (laptopsCatalog.some(item => item.id === product.id)) return 'Laptops';
        if (phonesCatalog.some(item => item.id === product.id)) return 'Phones';
        if (speakerCatalog.some(item => item.id === product.id)) return 'Speakers';
        if (tabletCatalog.some(item => item.id === product.id)) return 'Tablets';
        if (tvCatalog.some(item => item.id === product.id)) return 'Televisors';
        return null;
    };

    const handleProductClick = (product) => {
        const category = getProductCategory(product);
        
        setValue('');
        
        setDebouncedValue('');
        
        navigate('/carddescription', { 
            state: { 
                product: product,
                category: category
            } 
        });
    };

    const filteredProducts = useMemo(() => {
        if (!debouncedValue.trim()) return [];
        
        const searchTerm = debouncedValue.toLowerCase().trim();
        
        return productList.filter(product => 
            product.title.toLowerCase().includes(searchTerm)
        ).slice(0, 10);
        
    }, [debouncedValue, productList]);

    return (
        <div style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder="Поиск товаров..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={styles.search__input}
            />
            
            {debouncedValue && filteredProducts.length > 0 && (
                <div className={styles.container}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {filteredProducts.map((product) => (
                            <li 
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className={styles.search__item}
                            >
                                <div className={styles.product__title}>{product.title}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {debouncedValue && filteredProducts.length === 0 && (
                <div className={styles.not__found}>
                    Товары не найдены
                </div>
            )}
        </div>
    );
};

export default Search;