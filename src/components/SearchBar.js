// src/components/SearchBar.js
import React, { useState } from 'react';

const sampleSuggestions = [
    'Photography',
    'Design',
    'Art',
    'Illustration',
    '3D Modeling',
    'Graphic Design',
    'Digital Art',
    'Concept Art',
    'Motion Graphics',
    'Web Design'
];

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const filtered = sampleSuggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
            {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="autocomplete-suggestions">
                    {filteredSuggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
