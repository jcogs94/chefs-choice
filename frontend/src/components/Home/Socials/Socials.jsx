import { Link } from 'react-router-dom'
import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import twitter from './icons/twitter.png'
import youtube from './icons/youtube.png'
import './Socials.css'

const Socials = () => {
    const icons = [
        { img: facebook, link: '/facebook'},
        { img: instagram, link: '/instagram'},
        { img: twitter, link: '/twitter'},
        { img: youtube, link: '/youtube'}
    ]
    
    return <>
        <div id="socials">
            <h3>Check Out Our Socials!</h3>
            <div id="social-icons">
                {icons.map( (icon, index) => 
                    <Link to={icon.link}><img src={icon.img} key={`icon-${index}`} /></Link>
                )}
            </div>
        </div>
    </>
}

export default Socials
