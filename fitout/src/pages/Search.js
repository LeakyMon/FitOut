import React, {useState, useEffect} from 'react'

import {searchUsersByUsername} from '../firebase/firebase'
//import {HandleClick} from '../navigation/Sidenav'; 
import "./search.css"
import { useNavigate } from 'react-router-dom';

function Search() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]); // State to hold search results
    //const [tempUsername, setTempUsername] = useState("");
    const navigate = useNavigate();

    const handleClick = (username,id) => {
        navigate(`/profile/${username}/${id}`);
    };

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

   //var resClick = document.getElementById('res');
  //resClick.style.cursor='pointer';
   
   
  

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
            <br></br>
            <div className="results">
                {results.map((user) => (
                      <div key={user.id} className="results" onClick={() => handleClick(user.username, user.id)}>
                      {user.name}
                  </div>
                    
                ))}
            </div>
    </div>
    </main>
    );
}

export default Search;