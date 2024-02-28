import React, {useState, useEffect} from 'react'

import {searchUsersByUsername} from '../firebase/firebase'

import "./search.css"

function Search() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]); // State to hold search results
    var length = 0;
    // Function to handle input changes and update query state
    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        console.log(inputValue);
        console.log("Input change");
        setQuery(e.target.value);
    };


    useEffect(()=>{
        console.log(query);
        performSearch();
    },[query]);
    

    const performSearch = async () => {
        if (query.trim() !== "") {
            console.log("performing search");
            try {
                const searchResults = await searchUsersByUsername(query.trim());
                setResults(searchResults); // Update state with search results
                console.log(searchResults); // For debugging purposes
                
            } catch (error) {
                console.error("Search error:", error);
            }
        }
        else {
            setResults([]);
        }
    }

   

    return (
        <main>
        <div className="searchpage">
            <div className="searchBar">

             <label for="search"><b></b></label>
  
             <form text="test"onChange={handleInputChange} id="searchtext" value="Search">
             <input type="text" placeholder="Search"></input>
             </form>
            </div>
   
            {/* Optional: Display search results */}
            <div className="results">
                {results.map((user) => (
                    <div className="results">
                    <br></br>
                    <div key={user.id}>{user.name}</div>
                    </div>
                ))}
            </div>
    </div>
    </main>
    );
                }

export default Search;