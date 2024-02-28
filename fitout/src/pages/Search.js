import React, {useState} from 'react'

import {searchUsersByUsername} from '../firebase/firebase'

import "./Search.css"

function Search() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]); // State to hold search results

    // Function to handle input changes and update query state
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const performSearch =  async () =>{

        if (query.trim() !== "") {
            try {
                const searchResults = await searchUsersByUsername(query.trim());
                setResults(searchResults); // Update state with search results
                console.log(searchResults); // For debugging purposes
            } catch (error) {
                console.error("Search error:", error);
            }
        }
    } 

    return (
        <div className="searchpage">
             <label for="search"></label>
  
            <input
                className="searchBar"
                placeholder="Search"
                
                onChange={performSearch} // Update to use handleInputChange
                value={query}
            />
        
            {/* Optional: Display search results */}
            <div>
                {results.map((user) => (
                    <div className="results">
                    <div key={user.id}>{user.name}</div>
                    </div>
                ))}
            </div>
    </div>
    );
}

export default Search