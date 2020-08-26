const Route = ({ path, children }) => {
   if(window.location.pathname === path) {
      return children;
   } 
   return null;
}
export default Route;