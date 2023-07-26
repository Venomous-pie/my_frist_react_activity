import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <header>
        <div className='container'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </div>
        </header>
    )
}

export default Header