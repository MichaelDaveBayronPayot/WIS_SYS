import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

function RoutesComponent () {

    return (    
        <Router>
            <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} /> 
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
}   
export default RoutesComponent;