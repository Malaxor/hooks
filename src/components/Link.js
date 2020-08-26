import React from 'react';

const Link = ({ href, className, children }) => {
   const onClick = event => {
      event.preventDefault(); // prevent browser reload
      window.history.pushState({}, "", href); // update URL
   }
   return (
      <a onClick={onClick} className={className} href={href}>
         {children}
      </a>
   )   
}
export default Link;