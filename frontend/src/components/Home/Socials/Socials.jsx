import facebook from './icons/facebook.png'
import instagram from './icons/instagram.png'
import twitter from './icons/twitter.png'
import youtube from './icons/youtube.png'
import './Socials.css'

const Socials = () => {
    const icons = [facebook, instagram, twitter, youtube]
    
    return <>
        <div id="socials">
            <h3>Check Out Our Socials!</h3>
            <div id="social-icons">
                {icons.map( (icon, index) => 
                    <img src={icon} key={`icon-${index}`} />
                )}
            </div>
        </div>
    </>
}

export default Socials
