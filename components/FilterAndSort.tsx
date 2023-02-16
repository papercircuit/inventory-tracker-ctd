import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';

interface Product {
    id: number;
    title: string;
    price: number;
}

const FilterAndSort: React.FC = () => {
    const { products } = useContext(ProductContext);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [sortOption, setSortOption] = useState<string>('price-low-to-high');

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filterValue = event.target.value.toLowerCase();
        const filtered = products.filter(product => product.title.toLowerCase().includes(filterValue));
        setFilteredProducts(filtered);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = event.target.value;
        setSortOption(sortValue);
        const sorted = [...filteredProducts];
        if (sortValue === 'price-low-to-high') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high-to-low') {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'title-a-to-z') {
            sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === 'title-z-to-a') {
            sorted.sort((a, b) => b.title.localeCompare(a.title));
        }
        setFilteredProducts(sorted);
    };

    const handleReset = () => {
        setFilteredProducts(products);
        setSortOption('price-low-to-high');
    }

    return (
        <div>
            <label htmlFor="filter">Filter by title:</label>
            <input type="text" id="filter" onChange={handleFilterChange} />

            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="title-a-to-z">Title: A to Z</option>
                <option value="title-z-to-a">Title: Z to A</option>
            </select>

            <button onClick={handleReset}>Reset</button>

            {filteredProducts.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default FilterAndSort;