import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
   const [ term, setTerm ] = useState('python');
   const [ debouncedTerm, setDebouncedTerm ] = useState('python');
   const [ results, setResults ] = useState([]);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedTerm(term)
      }, 600)
      return () => clearTimeout(timerId)
   }, [term])
   
   useEffect(() => {
      const search = async () => {
         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
               action: 'query',
               list: 'search',
               origin: '*',
               format: 'json',
               srsearch: debouncedTerm
            }
         });
         setResults(data.query.search);
      }
      debouncedTerm && search();
   }, [debouncedTerm]);

   const renderedResults = results.map(({ pageid, title, snippet }) => (
      <div key={pageid} className='item'>
         <div className='right floated content'>
            <a 
               href={`https://en.wikipedia.org?curid=${pageid}`}
               target='_blank' 
               className='ui button'>
            Go
            </a>
         </div>
         <div className='content'>
            <div className='header'>
               {title}
            </div>
            {/* snippet returns and HTML string
               dangerouslySetInnerHTML prop, with __html object, turns the third party string (potentially harmful) into readable HTML
            */}
            <span dangerouslySetInnerHTML={{ __html: snippet }}></span>
         </div>
      </div>
   )); 
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