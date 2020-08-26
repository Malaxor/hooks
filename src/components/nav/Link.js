import React from 'react';

export const Link = ({ href, className, children }) => {
   const onClick = event => {
      if(event.metaKey || event.ctrlKey) {
         return;
      }
      event.preventDefault(); // prevent browser reload
      window.history.pushState({}, "", href); // update URL

      const navEvent = new PopStateEvent('popstate'); // communicate to Route component that the URL has changed
      window.dispatchEvent(navEvent);
   }
   return (
      <a onClick={onClick} className={className} href={href}>
         {children}
      </a>
   )   
}