import './Socials.css'

const Socials = () => {
    const socialIcons = ['icon', 'icon', 'icon', 'icon', 'icon']
    
    return <>
        <div id="socials">
            <h3>Check Out Our Socials!</h3>
            <div id="social-icons">
                {socialIcons.map( (icon) => 
                    <p>{icon}</p>
                )}
            </div>
        </div>
    </>
}

export default Socials
