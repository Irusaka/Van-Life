import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans';

export default function App() {

    return (
        <BrowserRouter>
            <main>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/vans' element={<Vans />} />
                </Routes>  
            </main>
        </BrowserRouter>
    )
}