import '../index.css';
import '../css/Header.css';
import main_logo from '../img/logo/logo.png';

const Header = () => {
    return (
        <div id="header" className='flex text-2xl text-white blue h-32 mb-6'>
            <img src={main_logo} alt="main-logo" />
            <nav className='w-full'>
                <ul id="main-nav" className='w-full'>
                    <li>About</li>
                    <li>Products</li>
                    <li>Our Team</li>
                    <li className='ml-auto'>Contact</li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
