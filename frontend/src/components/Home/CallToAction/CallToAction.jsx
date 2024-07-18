import { Link } from 'react-router-dom'
import './CallToAction.css'

const CallToAction = () => {
    return <>
        <div id="call-to-action">
            <div>
                <p>Check out our recipes here:</p>
                <Link to='/recipes'><button>View Recipes</button></Link>
            </div>
            <div>
                <p>Want to add your own recipe?</p>
                <Link to='/recipes/new'><button>Add Recipe</button></Link>
            </div>
        </div>
    </>
}

export default CallToAction
