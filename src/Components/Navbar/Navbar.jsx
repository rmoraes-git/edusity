
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
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