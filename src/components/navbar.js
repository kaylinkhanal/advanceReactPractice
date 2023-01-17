import {Link} from 'react-router-dom';

const NavBar = ()=> {
    return (
        <div className="Nav">
            <Link to="/">Home</Link> 
            <Link to="/login">Login</Link> 
        </div>
    )
}
export default NavBar