import Hero from './Hero/Hero.jsx'
import CallToAction from './CallToAction/CallToAction.jsx'
import About from './About/About.jsx'
import Socials from './Socials/Socials.jsx'
import './Home.css'

const Home = () => {
    return <>
        <Hero />
        <h1>Chef's Choice</h1>
        <Socials />
        <CallToAction />
        <About />
    </>
}

export default Home
