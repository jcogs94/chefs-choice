import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return <>
        <nav>
            <Link to='/'><h1>Chef's Choice</h1></Link>
            <Link to='/recipes'><button>View Recipes</button></Link>
        </nav>
    </>
}

export default Nav
