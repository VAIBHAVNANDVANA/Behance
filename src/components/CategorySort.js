// src/components/CategorySort.js
import React from 'react';

const categories = ['all', 'Photography', 'Design', 'Art', 'Illustration', '3D Modelling'];

const CategorySort = ({ onCategoryChange }) => {
    return (
        <>
            <div className="filters">
                {categories.map(category => (
                    <button key={category} onClick={() => onCategoryChange(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
                <div className="sort-by-category">
                    <label htmlFor="category-select">Sort :</label>
                    <select id="category-select" onChange={(e) => onCategoryChange(e.target.value)}>
                        <option value="all">All</option>
                        <option value="Photography">Photography</option>
                        <option value="Design">Design</option>
                        <option value="Art">Art</option>
                        <option value="Illustration">Illustration</option>
                        <option value="3D Modelling">3D Modelling</option>
                    </select>
                </div>
        </>
    );
};

export default CategorySort;
