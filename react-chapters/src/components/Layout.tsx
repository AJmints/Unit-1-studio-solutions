import {Outlet, Link} from 'react-router-dom'
import Header from './Header'

export default function Layout() {

    return (
        <>
        <Header/>
        <nav>
            <div className='navbar'>
                <Link className='navbar' to="/">Part 1 Reading</Link>
                <Link className='navbar' to="/part1-studio">Part 1 Studio</Link>  
            </div>
        </nav>
        <Outlet />
        </>
    )
}