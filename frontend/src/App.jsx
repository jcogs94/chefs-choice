import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import Recipes from './components/Recipes/Recipes.jsx'
import BadLink from './components/BadLink/BadLink.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

const App = () => {
    return <>
        <Nav />
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='*' element={<BadLink />} />
            </Routes>
        </main>
        <Footer />
    </>
}

export default App
