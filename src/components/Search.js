import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [ term, setTerm ] = useState('music');
   const [ results, setResults ] = useState([]);

   useEffect(() => {
      const search = async () => {
         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
               action: 'query',
               list: 'search',
               origin: '*',
               format: 'json',
               srsearch: term
            }
         });
         setResults(data.query.search);
      }
      // invoke search() when component first renders with preset term, avoiding setTimeout and clearTimeout until the first re-render
      if(term && !results.length) {
         search();
      }
      else {
         // trigger search after 500ms (throttle API requests)
         const timeOutId = setTimeout(() => {
            term && search();
         }, 500);
         return () => clearTimeout(timeOutId); // when this function is inoked, it resets setTimeout
      }
   }, [term]);
   const renderedResults = results.map(result => {
      return (
         <div key={result.pageid} className='item'>
            <div className='right floated content'>
               <a 
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                  target='_blank' 
                  className='ui button'>
               Go
               </a>
            </div>
            <div className='content'>
               <div className='header'>
                  {result.title}
               </div>
               {/* result.snippet returns and HTML string
                 dangerouslySetInnerHTML prop, with __html object, turns the third party string (potentially harmful) into readable HTML
               */}
               <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
         </div>
      )
   }); 
   return (
      <div>
         <div className='ui form'>
            <div className='ui field'>
               <label>Enter Search Term</label>
               <input 
                  className='input'
                  value={term}
                  onChange={e => setTerm(e.target.value)}
               >  
               </input>
            </div>
         </div>
         <div className='ui celled list'>
            {renderedResults}
         </div>
      </div>
   );
}
export default Search;