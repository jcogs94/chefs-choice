import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Socials from './Socials/Socials.jsx'
import './MainContainer.css'

const MainContainer = () => {
    return <>
        <main>
            <Hero />
            <About />
            <Socials />
        </main>
    </>
}

export default MainContainer
