import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

function App() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchQuery) => {
        fetch(
            `https://fr.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${searchQuery}&format=json`
        )
            .then((response) => response.json())
            .then((data) => {
                const titles = data[1];
                const links = data[3];
                const results = titles.map((title, index) => ({
                    title,
                    link: links[index],
                }));
                setSearchResults(results);
                console.log(results); // Afficher les résultats dans la console
                //  const enleve = results.splice(1, 10); // Si tu veux afficher qu'un seul resultat mais je trouve ca bofbof
            })
            .catch((error) => {
                console.error("Erreur de recherche:", error);
            });
    };

    return (
        <div>
            <h1>Recherche Wikipedia</h1>
            <SearchBar onSearch={handleSearch} />
            <div>
                {searchResults.map((result, index) => (
                    <SearchResult
                        key={index}
                        title={result.title}
                        link={result.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
