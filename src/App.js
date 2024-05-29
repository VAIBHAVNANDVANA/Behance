// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategorySort from './components/CategorySort';
import ImageGallery from './components/ImageGallery';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <div className="App">
            <Header />
            <SearchBar />
            <CategorySort onCategoryChange={setSelectedCategory} />
            <ImageGallery selectedCategory={selectedCategory} />
        </div>
    );
}

export default App;
