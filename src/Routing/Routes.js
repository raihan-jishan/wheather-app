import {Routes as Router, Route} from 'react-router-dom';
import Wheather from '../pages/Home.js';
import Location from '../pages/Location.js';
export default function Routes() {
    return(
        <Router>
            <Route path='/' element={<Wheather />}/>
            <Route exact path='/location' element={<Location />}/>
            <Route exact path='*' element={<Wheather />}/>
           
        </Router>
    )
}