// import React from 'react';
// import Logo from '../assets/logo.png';
// import UserLogo from '../assets/userlogo.png';
// import Icondown from '../assets/icondown.png';

// const Navbar = () => {

//     return (
//         <>
//             <nav className='px-20  w-[100%] h-[88px] shadow-md flex justify-between py-5'>
//                 <img src={Logo} alt='Logo' />
//                 <div className='flex items-center'>
//                     <img className='' src={UserLogo} alt='User Logo' />
//                     <div className='ps-2 pe-6'>
//                         <p className='text-[14px] font-medium text-[#999999]'>Hello</p>
//                         <p className='text-[20px] font-semibold text-[252525]'>Thomas Shellby</p>
//                     </div>
//                     <div className='cursor-pointer'>
//                         <img className='ps-6 ' src={Icondown} alt='Icon Down' />
//                     </div>
//                 </div>

//             </nav>

//         </>
//     )
// }
// export default Navbar;


// desktop
import React from 'react';
import Logo from '../assets/logo.png';
import UserLogo from '../assets/userlogo.png';
import Icondown from '../assets/icondown.png';
import Mobileqr from '../assets/mobileqrlogo.png';

const Navbar = () => {
  return (

    <>


      <nav className="hidden w-full h-16 md:h-20 shadow-md md:flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 bg-white">
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />
        <div className="flex items-center space-x-2 md:space-x-4">
          <img src={UserLogo} alt="User Logo" className="h-8 w-8 md:h-10 md:w-10" />
          <div className="flex flex-col">
            <p className="text-xs md:text-sm font-medium text-[#999999]">Hello</p>
            <p className="text-base md:text-lg font-semibold text-[#252525]">Thomas Shelby</p>
          </div>
          <img src={Icondown} alt="Icon Down" className="h-5 w-5 md:h-6 md:w-6 cursor-pointer" />
        </div>
      </nav>

      {/* mobile version */}
      <nav className="md:hidden  pt-4 mb-4 px-4 max-h-[40px]  flex justify-between items-center ">
        <img src={UserLogo} alt="UserLogo" className="h-10 w-10 " />
        <div className="flex flex-col grow ps-[8px]">
          <p className="text-[14px] font-semibold  text-[#999999]">Hello</p>
          <p className="text-base pt-[4px] md:text-lg font-semibold text-[#252525]">Thomas Shelby</p>
        </div>
        <img src={Mobileqr} alt="Mobile QR" className="h-10 w-10" />

      </nav>
    </>
  );
};

export default Navbar;

// mobile

