import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
   const [ open, setOpen ] = useState(false);
   const ref = useRef();
   
   useEffect(() => {
      const onBodyClick = event => {
         // if the click event is on an element inside the Dropdown component, do nothing (return)
         if(ref.current.contains(event.target)) {
            return;
         }
         // run only when the click event is outside the ref.current (outside the component)
         setOpen(false);
      }
      document.body.addEventListener('click', onBodyClick);
      return () => document.body.removeEventListener('click', onBodyClick);
   }, []); // useEffect runs only once, immediately after first render
   const renderedOptions = options.map(option => {
      if(selected === option) {
         return null;
      }
      return (
         <div 
            key={option.value} 
            className='item'
            onClick={() => onSelectedChange(option)}
         >
         {option.label}
         </div>
      )
   });
   return (
      <div ref={ref} className='ui form'>
         <div className='field'>
            <label className='label'>
               {label}
            </label>
            <div 
               onClick={() => setOpen(!open)} 
               className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            >
               <i className='dropdown icon'></i>
               <div className='text'>{selected.label}</div>
               <div className={`menu ${open ? 'visible transition' : ''}`}>
                  {renderedOptions}
               </div>
            </div>
         </div>
      </div>
   )
}
export default Dropdown;