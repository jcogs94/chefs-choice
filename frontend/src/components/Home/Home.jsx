import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Socials from './Socials/Socials.jsx'
import './Home.css'

const Home = () => {
    return <>
        <Hero />
        <h1>Chef's Choice</h1>
        <Socials />
        <About />
    </>
}

export default Home
