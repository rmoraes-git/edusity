
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About</li>
                <li>Campus</li>
                <li>Testemonial</li>
                <li><button className='btn'>Cotact</button></li>

            </ul>
        </nav>
    )
}

export default Navbar