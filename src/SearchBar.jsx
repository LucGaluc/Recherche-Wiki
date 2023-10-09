import React, { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };
    return (
        <div className="recherche">
            <input
                type="text"
                placeholder="Recherche Wikipedia..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
}

export default SearchBar;
