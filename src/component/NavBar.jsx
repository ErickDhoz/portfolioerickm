import { useState } from 'react';
import { Link } from 'react-router-dom';
import WebhookIcon from '@mui/icons-material/Webhook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {

    let [open, setOpen] = useState(false);
    const menu = () => {
        setOpen(!open)
    }

    return (
        <div className=" shadow-md w-full fixed top-0 left-0 z-10">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className='font-bold text-2xl cursor-pointer flex item-center text-gray-800'>
                    <span className='text-indigo-600 mr-1'>
                        <WebhookIcon/>
                    </span>
                    <Link to='/' className='hover:text-indigo-600'>Designer</Link>
                </div>
                <div onClick={ menu }
                    className={
                        `text-3xl absolute right-8 top-3 hover:text-indigo-600 cursor-pointer md:hidden ${
                            open ? 'hidden' : ''
                        }`
                }>
                    <MenuIcon/>
                </div>
                <div onClick={ menu }
                    className={
                        ` text-red-600 text-3xl absolute right-8 top-3 hover:text-red-800 cursor-pointer md:hidden ${
                            open ? '' : 'hidden'
                        }`
                }>
                    <CloseIcon/>
                </div>
                <ul className={
                    `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
        ${
                        open ? 'top-16 opacity-100' : 'top-[-490px]'
                    }`
                }>

                    <li className='md:ml-8 text-xl md:my-0 my-7 font-bold hover:text-gray-400 hover:underline active:underline'>
                        <Link to='about'>About</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 font-bold hover:text-gray-400 hover:underline'>
                        <Link to='skills'>Skills</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 font-bold hover:text-gray-400 hover:underline'>
                        <Link to='projects'>Projects</Link>
                    </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 font-bold hover:text-gray-400 hover:underline'>
                        <Link to='contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
