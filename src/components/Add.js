

import React,{useState} from 'react';



const Add = () => {

    const [query,setQuery]=useState("");
    const [results,setResults]=useState([])

    const onChange=e=>{
        e.preventDefault();
        setQuery(e.target.value)
        // const URL_API="https://api.themoviedb.org/3/search/company?"
        fetch(`https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_APP}&query=${e.target.value}&page=1`)
            .then(res=>res.json())
            .then(data=>{
                if(!data.errors){
                    setResults(data.results)
                }else{
                    setResults([])
                }
            })
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" 
                            value={query}
                            onChange={onChange}
                        />
                    </div>

                    {results.length>0 && (
                        <ul className="results">
                            {results.map(res=>(
                                <li key={res.id}>{res.name}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
             
        </div>
    )
}

export default Add;
