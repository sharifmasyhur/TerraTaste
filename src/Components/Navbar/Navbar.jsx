import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-local">TerraTaste</div>
        <ul className="nav-menu">
            <li><a href='/'>Home</a></li>
            <li><a href="/Explore.html">Explore</a></li>
            <li><Link to="/about">About</Link></li>
            <li className='nav-contact'><Link to="/contact">Contact Us</Link></li>
        </ul>

    </div>
  )
}

export default Navbar