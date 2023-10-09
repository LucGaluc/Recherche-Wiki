import React from "react";

function SearchResult({ title, link }) {
    return (
        <div>
            <a href={link}>{title}</a>
        </div>
    );
}

export default SearchResult;
