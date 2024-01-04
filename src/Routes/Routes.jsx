import Searchresults from "../components/Searchresults/Searchresults.jsx";
import Home from "../pages/Home.jsx"; 
import {Routes as Routing, Route} from 'react-router-dom'
const Routes =  () => {
 
  return (
   <Routing>
    <Route path="/" element={<Home />} />
    <Route path="/search-weather" element={<Searchresults />} />
   </Routing>
  
  );
};

export default Routes;
