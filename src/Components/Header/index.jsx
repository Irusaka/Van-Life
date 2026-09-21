import { Link, useLocation } from 'react-router'

export default function Header(){
        const path = useLocation()

    return (
        <header>
            <nav>
                <h1><Link to='/'>#VANLIFE</Link></h1>
                <ul>
                    <li><Link className={path.pathname === '/about' ? 'actual-location' : ''} to='/about'>About</Link></li>
                    <li><Link className={path.pathname === '/vans' ? 'actual-location' : ''} to='/vans'>Vans</Link></li>
                </ul>
            </nav>
        </header>
    )
}