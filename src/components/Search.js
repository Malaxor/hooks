import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [ term, setTerm ] = useState('');

   useEffect(() => {
      (async () => {
         const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
            params: {
               action: 'query',
               list: 'search',
               origin: '*',
               format: 'json',
               srsearch: term
            }
         })
      })();

   }, [term]);
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
      </div>
   );
}
export default Search;