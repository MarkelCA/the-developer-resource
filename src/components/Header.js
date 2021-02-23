import '../index.css';
import '../css/Header.css';
import main_logo from '../img/logo/logo-full-transparent.png';

const Header = () => {
    return (
        <div id="header" className='flex text-2xl text-white blue h-36 mb-6'>
            <a id='main-logo-container' href="../../index.html" className='w-4/12  flex mr-3'>
                <div id="logo-header" className='m-auto h-full w-full px-2 border-r-2 border-white'>
                    <img src={main_logo} alt="main-logo" className='m-auto h-full' />
                </div>
                <h1 className='text-md my-auto p-2 pl-4'>The developer resource</h1>
            </a>
            <nav className='w-full m-auto'>
                <ul id="main-nav" className='w-full'>
                    <li>About</li>
                    <li>Products</li>
                    <li>Our Team</li>
                    <li className='ml-auto mr-4'>Contact</li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
