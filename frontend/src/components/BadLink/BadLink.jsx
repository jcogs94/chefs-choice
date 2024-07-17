import { Link } from 'react-router-dom'
import './BadLink.css'

const BadLink = () => {
    return <>
        <h2 id='bad-link-heading'>Whoops, bad link!</h2>
        <p id='bad-link-p'>Click <Link to='/'>here</Link> to go back home.</p>
    </>
}

export default BadLink
