import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return <>
        <footer>
            <div>
                <Link to="/">Home</Link>
                <Link to="/recipes">View Recipes</Link>
                <Link to="/recipes/new">Add Your Own Recipe</Link>
            </div>
            <div>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </footer>
    </>
}

export default Footer
