import React from 'react';
import Logo from '../assets/logo.png';
import UserLogo from '../assets/userlogo.png';
import Icondown from '../assets/icondown.png';

const Navbar = () => {

    return (
        <>
            <nav className='px-20  w-full h-[88px] shadow-md flex justify-between py-5'>
                <img src={Logo} alt='Logo' />
                <div className='flex items-center'>
                    <img className='' src={UserLogo} alt='User Logo' />
                    <div className='ps-2 pe-6'>
                        <p className='text-[14px] font-medium text-[#999999]'>Hello</p>
                        <p className='text-[20px] font-semibold text-[252525]'>Thomas Shellby</p>
                    </div>
                    <div className='cursor-pointer'>
                        <img className='ps-6 ' src={Icondown} alt='Icon Down' />
                    </div>
                </div>

            </nav>

        </>
    )
}
export default Navbar;