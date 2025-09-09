import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';

const RoutesComponent = () => {
    return (    
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<div>Home Page</div>} />
                <Route path="/about" element={<div>About Page</div>} /> 
                <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
        </Router>
    );
}   
export default RoutesComponent;