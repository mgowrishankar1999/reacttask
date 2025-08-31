


// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Billpayment from "../assets/billpayment.png";
// import Profilecircle from "../assets/profilecircle.png";
// import Qrcode from "../assets/qrcode.png";

// const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="flex ">
//                 <Sidebar />
//                 <div className="mt-[64px] ms-10 me-20">
//                     {/* 1st section */}
//                     <div
//                         className="h-[240px] w-full border-2 border-[#61CE70] rounded-[12px] flex items-center justify-between p-6 overflow-hidden relative"
//                         style={{
//                             background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 35%)',
//                             color: '#ffffff',
//                             clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
//                         }}
//                     >
//                         <div>
//                             <h1 className="text-[40px] font-bold text-white tracking-normal leading-[48px]">Pay ₹1/month* for the QPay POS Device</h1>
//                             <p className="text-lg mt-2 text-[16px] text-[#FFFFFF]">One device for accepting all modes of payments</p>
//                             <button
//                                 className="mt-4 px-[20px] py-3 bg-white text-[#42794A] text-[14px] rounded-[8px] h-10 w-[180px] font-semibold hover:bg-gray-100"
//                             >
//                                 Download App Now!
//                             </button>
//                         </div>
//                         <div className="relative me-[76px]">
//                             <img
//                                 src={Billpayment}
//                                 alt="QPay POS Device Illustration"
//                                 className="h-[180px] w-auto z-10"
//                             />
//                         </div>
//                     </div>
//                     {/* 2nd section */}
//                     <div className="mt-10 h-[140px] flex justify-between">
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">1.5K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Account Holders</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">2.1K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Transactions</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">2.3K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Settlement</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">45K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">QR Orders</p>
//                         </div>
//                     </div>
//                     {/* 3rd section */}
//                     <div className="mt-[20px]">
//                         <div className="flex justify-between">
//                             <div className="w-[530px] h-[392px]  border border-[#EEEEEE] rounded-[12px]  ">

//                                 <div className="mx-8">
//                                     <p className='mt-[32px] font-semibold text-[14px] text-[#999999]'>PROFILE</p>
//                                     <div className="flex items-center mt-[24px]">
//                                         <div className="w-[184px] h-[184px] rounded flex items-center justify-center">
//                                             <img src={Profilecircle} alt="Profile Circle" className="w-full h-full object-cover" />
//                                         </div>
//                                         <div className="ms-[33px] my-[28px]">
//                                             <p className="text-[#252525] font-semibold text-[20px]">Complete your profile</p>
//                                             <ul className="list-disc list-inside text-[#999999] mt-2">
//                                                 <li>Personal KYC</li>
//                                                 <li>Company KYC</li>
//                                                 <li>Onboarding details</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className='border-t border-[#EEEEEE] my-6'>

//                                     </div>

//                                     <button className=" w-full h-[56px]  bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                         Next
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="w-[530px] h-[392px] border border-[#EEEEEE] rounded-[12px] ">
//                                 <div className="mx-8">
//                                     <p className="mt-[32px] font-semibold text-[14px] text-[#999999]">QR</p>
//                                     <div className="flex items-center mt-[24px]">
//                                         <div className="w-[184px] h-[184px] rounded flex items-center justify-center">
//                                             <img src={Qrcode} alt="QR Code" className="w-full h-full object-cover" />
//                                         </div>
//                                         <div className="ms-[33px] my-[28px]">
//                                             <p className="text-[#252525] font-semibold text-[20px]">Order QR</p>
//                                             <ul className="list-disc list-inside text-[#999999] mt-2">
//                                                 <li>Receive Payment</li>
//                                                 <li>Order new QRs</li>
//                                                 <li>Download QR</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="border-t border-[#EEEEEE] my-6"></div>
//                                     <button className="w-full h-[56px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                         View more
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* 4th section */}
//                     <div className="mt-[20px]">
//                         <div className="flex justify-between">
//                             <div className="w-[48%] h-[240px]  border border-[#EEEEEE] rounded-[12px] p-6 flex flex-col justify-between">
//                                 <div>
//                                     <div className="flex items-center">
//                                         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488m-3.631 2.983c.561.223 1.163.223 1.724 0M4.25 12h15.5M4.25 8h10m-10 8h6" />
//                                         </svg>
//                                         <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Settlement</h2>
//                                     </div>
//                                     <div className="mt-4">
//                                         <p className="text-2xl font-bold text-gray-900">₹1,23,816.19</p>
//                                         <ul className="list-none text-gray-600 mt-2">
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <button className="px-4 py-2 bg-[#42794A] text-white rounded-[8px]">
//                                     Settle Now
//                                 </button>
//                             </div>
//                             <div className="w-[48%] h-[240px]  border border-[#EEEEEE] rounded-[12px] p-6 flex flex-col justify-between">
//                                 <div>
//                                     <div className="flex items-center">
//                                         <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488m-3.631 2.983c.561.223 1.163.223 1.724 0M4.25 12h15.5M4.25 8h10m-10 8h6" />
//                                         </svg>
//                                         <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Total Transactions</h2>
//                                     </div>
//                                     <div className="mt-4">
//                                         <p className="text-2xl font-bold text-gray-900">₹1,23,816.19</p>
//                                         <ul className="list-none text-gray-600 mt-2">
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                             <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <button className="px-4 py-2 bg-[#42794A] text-white rounded-[8px]">
//                                     View All
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;


// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Billpayment from "../assets/billpayment.png";
// import Profilecircle from "../assets/profilecircle.png";
// import Qrcode from "../assets/qrcode.png";
// import Iconright from "../assets/iconright.png";

// const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="flex ">
//                 <Sidebar />
//                 <div className="mt-[64px] ms-10 me-20 mb-[80px]">
//                     {/* 1st section */}
//                     <div
//                         className="h-[240px] w-full border-2 border-[#61CE70] rounded-[12px] flex items-center justify-between p-6 overflow-hidden relative"
//                         style={{
//                             background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 35%)',
//                             color: '#ffffff',
//                             clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
//                         }}
//                     >
//                         <div>
//                             <h1 className="text-[40px] font-bold text-white tracking-normal leading-[48px]">Pay ₹1/month* for the QPay POS Device</h1>
//                             <p className="text-lg mt-2 text-[16px] text-[#FFFFFF]">One device for accepting all modes of payments</p>
//                             <button
//                                 className="mt-4 px-[20px] py-3 bg-white text-[#42794A] text-[14px] rounded-[8px] h-10 w-[180px] font-semibold hover:bg-gray-100"
//                             >
//                                 Download App Now!
//                             </button>
//                         </div>
//                         <div className="relative me-[76px]">
//                             <img
//                                 src={Billpayment}
//                                 alt="QPay POS Device Illustration"
//                                 className="h-[180px] w-auto z-10"
//                             />
//                         </div>
//                     </div>
//                     {/* 2nd section */}
//                     <div className="mt-10 h-[140px] flex justify-between">
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">1.5K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Account Holders</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">2.1K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Transactions</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">2.3K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">Settlement</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">45K</p>
//                             <p className="text-[20px] font-medium text-[#999999]">QR Orders</p>
//                         </div>
//                     </div>
//                     {/* 3rd section */}
//                     <div className="mt-[20px]">
//                         <div className="flex justify-between">
//                             <div className="w-[535px] h-[392px] border border-[#EEEEEE] rounded-[12px]">
//                                 <div className="mx-8">
//                                     <p className="mt-[32px] font-semibold text-[14px] text-[#999999]">PROFILE</p>
//                                     <div className="flex items-center mt-[24px]">
//                                         <div className="w-[184px] h-[184px] rounded flex items-center justify-center">
//                                             <img src={Profilecircle} alt="Profile Circle" className="w-full h-full object-cover" />
//                                         </div>
//                                         <div className="ms-[33px] my-[28px]">
//                                             <p className="text-[#252525] font-semibold text-[20px]">Complete your profile</p>
//                                             <ul className="list-disc list-inside text-[#999999] mt-2">
//                                                 <li>Personal KYC</li>
//                                                 <li>Company KYC</li>
//                                                 <li>Onboarding details</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="border-t border-[#EEEEEE] my-6"></div>
//                                     <button className="w-full h-[56px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                         Next
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="w-[535px] h-[392px] border border-[#EEEEEE] rounded-[12px]">
//                                 <div className="mx-8">
//                                     <p className="mt-[32px] font-semibold text-[14px] text-[#999999]">QR</p>
//                                     <div className="flex items-center mt-[24px]">
//                                         <div className="w-[184px] h-[184px] rounded flex items-center justify-center">
//                                             <img src={Qrcode} alt="QR Code" className="w-full h-full object-cover" />
//                                         </div>
//                                         <div className="ms-[33px] my-[28px]">
//                                             <p className="text-[#252525] font-semibold text-[20px]">Order QR</p>
//                                             <ul className="list-disc list-inside text-[#999999] mt-2">
//                                                 <li>Receive Payment</li>
//                                                 <li>Order new QRs</li>
//                                                 <li>Download QR</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <div className="border-t border-[#EEEEEE] my-6"></div>
//                                     <button className="w-full h-[56px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                         View more
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* 4th section */}
//                     <div className="mt-[20px]">
//                         <div className="flex justify-between">
//                             <div className="w-[535px] h-[392px] border border-[#EEEEEE] rounded-[12px]">

//                                 <div className="flex mx-[16px] justify-between items-center ">
//                                     <div className='flex-col my-[12px]  '>
//                                         <p className=" font-semibold text-[14px] text-[#999999]">SETTLEMENT</p>
//                                         <p className="mt-[8px] font-semibold text-[20px] text-[#252525]">1,23,816.19</p>

//                                     </div>
//                                     <div className="flex grow-1">

//                                         <img src={Iconright} alt="Right Icon" className="" />
//                                     </div>

//                                 </div>

//                                 <div className="border-t border-[#EEEEEE] my-2 mx-[16px]"></div>
//                                 <div className="mt-[24px] mx-[16px] space-y-[8px]">
//                                     <div className="flex  justify-between items-center  ">
//                                         <div className='flex-col  '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Gowri</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>

//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>

//                                     </div>
//                                     <div className="flex justify-between items-center">
//                                         <div className='flex-col   '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Henry</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>
//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>

//                                     </div>
//                                     <div className="flex justify-between items-center">
//                                         <div className='flex-col   '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Raju</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>
//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>


//                                     </div>
//                                     <button className="w-full h-[56px] my-4 bg-[#42794A] text-[20px]  font-medium text-white rounded-[12px]">
//                                         Settle Now
//                                     </button>
//                                 </div>

//                             </div>


//                             <div className="w-[535px] h-[392px] border border-[#EEEEEE] rounded-[12px]">

//                                 <div className="flex mx-[16px] justify-between items-center ">
//                                     <div className='flex-col my-[12px]  '>
//                                         <p className=" font-semibold text-[14px] text-[#999999]">TOTAL TRANSACTIONS</p>
//                                         <p className="mt-[8px] font-semibold text-[20px] text-[#252525]">1,23,816.19</p>

//                                     </div>
//                                     <div className="flex grow-1">

//                                         <img src={Iconright} alt="Right Icon" className="" />
//                                     </div>

//                                 </div>

//                                 <div className="border-t border-[#EEEEEE] my-2 mx-[16px]"></div>
//                                 <div className="mt-[24px] mx-[16px] space-y-[8px]">
//                                     <div className="flex  justify-between items-center  ">
//                                         <div className='flex-col  '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Gowri</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>

//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>

//                                     </div>
//                                     <div className="flex justify-between items-center">
//                                         <div className='flex-col   '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Henry</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>
//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>

//                                     </div>
//                                     <div className="flex justify-between items-center">
//                                         <div className='flex-col   '>
//                                             <p className=" font-semibold text-[20px] text-[#252525]">Raju</p>
//                                             <p className="mt-[2px] font-semibold text-[20px] text-[#999999]">1,23,816.19</p>

//                                         </div>
//                                         <p className="font-semibold text-[20px] text-[#252525]">+₹90</p>


//                                     </div>
//                                     <button className="w-full h-[56px] my-4 bg-[#42794A] text-[20px]  font-medium text-white rounded-[12px]">
//                                         View All
//                                     </button>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;



import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Billpayment from '../assets/billpayment.png';
import Profilecircle from '../assets/profilecircle.png';
import Qrcode from '../assets/qrcode.png';
import Iconright from '../assets/iconright.png';

// mobile imports
import Mobilewallet from '../assets/mobilewalleticon.png';
import Bankmobile from '../assets/mobilebankicon.png'
import Linkicon from '../assets/linkicon.png'
import Newicon from '../assets/newicon.png'
import Flighticon from "../assets/flighticon.png";
import Busicon from "../assets/busicon.png";
import Trainicon from "../assets/trainicon.png";
import Hotelicon from "../assets/hotelicon.png";
import Qrmobileicon from "../assets/qrmobileicon.png";
import Copymobileicon from "../assets/copyicon.png";
import Sharemobileicon from "../assets/shareiconmobile.png";
import Optionsmobileicon from "../assets/optionsicon.png";
import Moreicon from "../assets/moreiconmobile.png";
import Dth from "../assets/dth.png";
import Creditcard from "../assets/creditcard.png";
import Mobileelectricity from "../assets/mobileelectricity.png";
import Mobileiconphone from "../assets/mobileiconphone.png";
import Gas from "../assets/gas.svg";
import Image1 from "../assets/img1.png"
import Image2 from "../assets/img2.png"
import Image3 from "../assets/img3.png"
import Image4 from "../assets/img4.png"
import Image5 from "../assets/img5.png"
import Image6 from "../assets/img6.png"

import Sbi from "../assets/sbilogomobile.png"
import Baroda from "../assets/barodalogomobile.png"
import Statementmobile from "../assets/statementiconmobile.png"
import Transfermobile from "../assets/transfericonmobile.png"
import Eyeon from "../assets/eyeon.png"
import Eyeoff from "../assets/eyeoff.png"

import Footer from "../components/MobileFooter"
import { useState, useRef } from 'react';

const Home = () => {
    const [banks, setBanks] = useState([
        { name: 'QPay Wallet', balance: '₹2,36,000.47', icon: Mobilewallet },
        { name: 'Bank 1', balance: '₹2,36,000.47', icon: Sbi, accountNumber: 'XXXXXXX46536', ifsc: 'KKBK0008798' },
        { name: 'Bank 2', balance: '₹2,36,000.47', icon: Baroda, accountNumber: 'XXXXXXX46536', ifsc: 'KKBK0008798' },
        { name: 'Bank 3', balance: '₹2,36,000.47', icon: Bankmobile, accountNumber: 'XXXXXXX46536', ifsc: 'KKBK0008798' },
    ]);
    const [selectedBankIndex, setSelectedBankIndex] = useState(null);

    const scrollRef = useRef(null);

    const addBank = () => {
        const newBankNumber = banks.length - 1;
        const newBank = {
            name: `Bank ${newBankNumber + 1}`,
            balance: '₹0.00',
            icon: Bankmobile,
            accountNumber: 'XXXXXXX46536',
            ifsc: 'KKBK0008798',
        };
        setBanks([...banks, newBank]);
        setTimeout(() => {
            if (scrollRef.current) {
                const scrollContainer = scrollRef.current;
                const lastBankIndex = banks.length;
                const bankWidth = 140;
                scrollContainer.scrollTo({
                    left: lastBankIndex * bankWidth - 140,
                    behavior: 'smooth',
                });
            }
        }, 0);
    };

    const handleBankClick = (index) => {
        setSelectedBankIndex(index === selectedBankIndex ? null : index);
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const bankWidth = 140;
            const containerWidth = scrollContainer.clientWidth;
            const scrollPosition = index * bankWidth - (containerWidth - bankWidth) / 2;
            scrollContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    };


    return (
        <>
            <div className="min-h-screen bg-gray-50 hidden md:block ">
                <Navbar />
                <div className="hidden  md:flex  ">
                    <div className='w-[30%]'>

                        <Sidebar />
                    </div>
                    <div className=" mt-4  w-[70%] me-20 mb-10">
                        {/* 1st Section */}
                        <div
                            className="w-full border-2 border-[#61CE70] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 overflow-hidden"
                            style={{
                                background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 40%)',
                                color: '#ffffff',
                                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
                            }}
                        >
                            <div className="mb-4 md:mb-0 md:pr-4">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">Pay ₹1/month* for the QPay POS Device</h1>
                                <p className="text-sm sm:text-base mt-2">One device for accepting all modes of payments</p>
                                <button className="mt-4 px-4 py-2 bg-white text-[#42794A] text-sm rounded-lg font-semibold hover:bg-gray-100">
                                    Download App Now!
                                </button>
                            </div>
                            <img src={Billpayment} alt="QPay POS Device Illustration" className="h-32 md:h-40 lg:h-48 w-auto" />
                        </div>
                        {/* 2nd Section */}
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { value: '1.5K', label: 'Account Holders' },
                                { value: '2.1K', label: 'Transactions' },
                                { value: '2.3K', label: 'Settlement' },
                                { value: '45K', label: 'QR Orders' },
                            ].map((item, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg flex flex-col items-center justify-center p-4">
                                    <p className="font-bold text-2xl sm:text-3xl text-[#42794A]">{item.value}</p>
                                    <p className="text-base sm:text-lg font-medium text-gray-500">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        {/* 3rd Section */}
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'PROFILE',
                                    img: Profilecircle,
                                    subtitle: 'Complete your profile',
                                    items: ['Personal KYC', 'Company KYC', 'Onboarding details'],
                                    button: 'Next',
                                },
                                {
                                    title: 'QR',
                                    img: Qrcode,
                                    subtitle: 'Order QR',
                                    items: ['Receive Payment', 'Order new QRs', 'Download QR'],
                                    button: 'View more',
                                },
                            ].map((section, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-6">
                                    <p className="text-sm font-semibold text-gray-500">{section.title}</p>
                                    <div className="flex flex-col sm:flex-row items-center mt-4">
                                        <img src={section.img} alt={section.title} className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded" />
                                        <div className="mt-4 sm:mt-0 sm:ml-6">
                                            <p className="text-lg font-semibold text-gray-800">{section.subtitle}</p>
                                            <ul className="list-disc list-inside text-gray-500 mt-2 text-sm">
                                                {section.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 my-4"></div>
                                    <button className="w-full h-12 bg-[#42794A] text-white text-base font-medium rounded-lg">
                                        {section.button}
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* 4th Section */}
                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {[
                                { title: 'SETTLEMENT', amount: '1,23,816.19' },
                                { title: 'TOTAL TRANSACTIONS', amount: '1,23,816.19' },
                            ].map((section, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500">{section.title}</p>
                                            <p className="mt-2 text-lg font-semibold text-gray-800">{section.amount}</p>
                                        </div>
                                        <img src={Iconright} alt="Right Icon" className="h-5 w-5" />
                                    </div>
                                    <div className="border-t border-gray-200 my-4"></div>
                                    <div className="space-y-3">
                                        {['Gowri', 'Henry', 'Raju'].map((name, i) => (
                                            <div key={i} className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-base font-semibold text-gray-800">{name}</p>
                                                    <p className="text-base text-gray-500">{section.amount}</p>
                                                </div>
                                                <p className="text-base font-semibold text-gray-800">+₹90</p>
                                            </div>
                                        ))}
                                        <button className="w-full h-12 bg-[#42794A] text-white text-base font-medium rounded-lg">
                                            {section.title === 'SETTLEMENT' ? 'Settle Now' : 'View All'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* ------------------------mobile --version code ---------------*/}

            <div className='md:hidden bg-[#DDDDDD] pt-3 '>
                <Navbar />
                <div
                    style={{ background: 'radial-gradient(circle, #61CE70, #42794A)' }}
                    className="m-[16px] h-[206px] rounded-[16px]"
                >
                    <div className="h-[52px] border-b border-white flex overflow-x-auto scrollbar-hidden" ref={scrollRef}>
                        {banks.map((bank, index) => (
                            <button
                                key={index}
                                className={`w-[140px] h-[52px] border-r flex items-center flex-shrink-0 ${selectedBankIndex === index ? 'bg-[#42794A]' : ''
                                    }`}
                                onClick={() => handleBankClick(index)}
                            >
                                <img className="ps-[16px]" src={bank.icon} alt={bank.name} />
                                <div className="ms-2">
                                    <p className="text-[10px] text-white font-medium">{bank.name}</p>
                                    <p className="pt-[2px] font-bold text-[12px] text-white">{bank.balance}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col h-[154px] justify-center items-center">
                        {selectedBankIndex === null ? (
                            <>
                                <button
                                    className="h-[26px] w-[144px] flex justify-center items-center space-x-1 border rounded-[20px]"
                                    onClick={addBank}
                                >
                                    <img src={Linkicon} alt="linkicon" />
                                    <p className="text-white text-[12px] font-medium">Link Account</p>
                                </button>
                                <button className="h-[26px] w-[144px] bg-[#FFFFFF] mt-[8px] flex justify-center items-center space-x-1 border rounded-[20px]">
                                    <img src={Newicon} alt="Newicon" />
                                    <p className="text-[#42794A] text-[12px] font-medium">New Account</p>
                                </button>
                            </>
                        ) : (
                            <div className="w-full flex flex-col items-center px-4">


                                {banks[selectedBankIndex].name == 'QPay Wallet' && (
                                    <>

                                        <p className="text-[12px] text-white font-medium mb-[2px]">Account balance</p>
                                        <div className='flex items-center justify-center'>
                                            <p className="text-[20px] text-white font-bold  me-[8px] "> ₹ {banks[selectedBankIndex].balance}</p>
                                            <img className='h-4 w-4' src={Eyeoff} />

                                        </div>

                                        <div className="flex space-x-4 mt-4">
                                            <button className="h-[26px] w-[144px]  border border-[#FFFFFF] text-[#FFFFFF] rounded-[20px] flex items-center justify-center space-x-2">
                                                <span className="text-[20px]">+</span>
                                                <p className="text-[12px] font-medium">Add money</p>
                                            </button>
                                            <button className="h-[26px] w-[144px] bg-white border border-[#42794A] text-[#42794A] rounded-[20px] flex items-center justify-center space-x-2">
                                                {/* <span className="text-[20px]">↔</span> */}
                                                <img className='h-4 w-4' src={Transfermobile} />

                                                <p className="text-[12px] font-medium">Transfer</p>
                                            </button>
                                        </div>
                                    </>
                                )}
                                {banks[selectedBankIndex].name !== 'QPay Wallet' && (
                                    <>
                                        {/* <div className="flex items-center justify-between mb-2">
                                            <img src={banks[selectedBankIndex].icon} alt={banks[selectedBankIndex].name} className="h-6 w-6" />
                                            <p className="text-[14px] font-semibold text-[#252525]">{banks[selectedBankIndex].name}</p>
                                        </div>
                                        <p className="text-[12px] text-[#999999] mb-1">Account number</p>
                                        <p className="text-[14px] font-medium text-[#252525] mb-2">{banks[selectedBankIndex].accountNumber}</p>
                                        <p className="text-[12px] text-[#999999] mb-1">IFSC Code</p>
                                        <p className="text-[14px] font-medium text-[#252525] mb-4">{banks[selectedBankIndex].ifsc}</p> */}

                                        <div className='w-[296px] h-[80px] flex  flex-col justify-between items-between'>
                                            <div className='flex justify-between '>
                                                <div className='flex flex-col'>
                                                    <p className='text-[#FFFFFF] text-[10px] font-medium '>Account number </p>
                                                    <div className='flex text-[#FFFFFF] font-bold text-[12px] '>
                                                        <p>{banks[selectedBankIndex].accountNumber}</p>
                                                        <img className='ps-[8px] object-cover' src={Eyeon} />
                                                    </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-[#FFFFFF] text-[10px] font-medium '>Bank </p>
                                                    <div className='flex text-[#FFFFFF] font-bold text-[12px] '>
                                                        <p>{banks[selectedBankIndex].name}</p>
                                                        {/* <img className='ps-[8px] object-cover' src={Eyeon} /> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col'>
                                                    <p className='text-[#FFFFFF] text-[10px] font-medium '>IFSC Code </p>
                                                    <div className='flex text-[#FFFFFF] font-bold text-[12px] '>
                                                        <p>{banks[selectedBankIndex].ifsc}</p>
                                                        {/* <img className='ps-[8px] object-cover' src={Eyeon} /> */}
                                                    </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <p className='text-[#FFFFFF] text-[10px] font-medium '>Account balance </p>
                                                    <div className='flex text-[#FFFFFF] font-bold text-[12px] '>
                                                        <p>₹ {banks[selectedBankIndex].balance}</p>
                                                        <img className='ps-[8px] ' src={Eyeoff} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* this is button section  */}
                                        <div className="flex space-x-4 pt-[16px]">
                                            <button className="h-[26px] w-[144px]  border border-[#FFFFFF]  rounded-[20px] flex items-center justify-center space-x-2">
                                                <img src={Statementmobile} alt="Statement" />
                                                <p className="text-[12px] text-[#FFFFFF] font-medium">Statement</p>
                                            </button>
                                            <button className="h-[26px] w-[144px] bg-white border border-[#42794A] text-[#42794A] rounded-[20px] flex items-center justify-center space-x-2">
                                                <img src={Transfermobile} alt="Transfer" />
                                                <p className="text-[12px] font-medium">Transfer</p>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className='min-h-[124px] rounded-[16px] m-[16px]  border border-gray-300'>
                    <p className='text-[12px] text-[#999999] font-semibold ps-[16px] pt-[16px] pb-2'>Ticket Booking</p>
                    <div className='flex h-[70px] justify-center items-center space-x-4'>
                        <div className='h-[70px] w-[62px] flex flex-col  items-center  '>
                            <img className='w-[48px] h-[48px]' src={Flighticon} alt='flighticon' />
                            <p className='font-medium text-[12px] text-[#252525]'>Flight</p>
                        </div>
                        <div className='max-h-[70px] w-[62px] flex flex-col  items-center  '>
                            <img className='w-[48px] h-[48px]' src={Busicon} alt='busicon' />
                            <p className='font-medium text-[12px] text-[#252525]'>Bus</p>
                        </div>
                        <div className='h-[70px] w-[62px] flex flex-col  items-center '>
                            <img className='w-[48px] h-[48px]' src={Trainicon} alt='trainicon' />
                            <p className='font-medium text-[12px] text-[#252525]'>Train</p>
                        </div>
                        <div className='h-[70px] w-[62px] flex flex-col  items-center '>
                            <img className='w-[48px] h-[48px]' src={Hotelicon} alt='hotelicon' />
                            <p className='font-medium text-[12px] text-[#252525]'>Hotels</p>
                        </div>

                    </div>

                </div>


                <div className='m-[16px] bg-[#FFFFFF] rounded-[10px] h-[106px]'>
                    <div className='min-h-[74px] flex flex-col justify-between h-full'>
                        <div className='h-[32px] px-4 pt-4 pb-11 '>
                            <p className='text-[12px] font-medium text-[#999999]'>Receive money</p>
                            <p className='text-[252525] font-bold text-[14px]'>UPI ID: 9876543210@qpay</p>
                        </div>
                        <div className='pt-3 pb-[16px] ps-4 pe-[18px]  flex justify-between items-center min-h-[30px] '>

                            <div className='flex whitespace-nowrap min-w-[80px] h-[30px] bg-[#EEEEEE] rounded-[40px] items-center justify-center ' >
                                <img className='h-[14px] w-[14px]' src={Qrmobileicon} alt='Qrcode' />
                                <p className='text-[#252525] ps-[4px] text-[12px] font-medium'>QR code </p>
                            </div>
                            <div className='flex whitespace-nowrap min-w-[80px] h-[30px] bg-[#EEEEEE] rounded-[40px] items-center justify-center ' >
                                <img className='h-[14px] w-[14px]' src={Copymobileicon} alt='copy' />
                                <p className='text-[#252525] ps-[4px] text-[12px] font-medium'>Copy </p>
                            </div>
                            <div className='flex whitespace-nowrap min-w-[80px] h-[30px] bg-[#EEEEEE] rounded-[40px] items-center justify-center ' >
                                <img className='h-[14px] w-[14px]' src={Sharemobileicon} alt='share' />
                                <p className='text-[#252525] ps-[4px] text-[12px] font-medium'>Share </p>
                            </div>
                            <div>
                                <img className='h-[30px] w-[30px]' src={Optionsmobileicon} alt='options' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-[16px] min-h-[226px] border border-gray-300 rounded-[10px]">
                    <p className="mx-4 mt-4 text-[#999999] font-semibold text-[12px]">Bill Payments</p>
                    <div className="min-h-[172px] grid grid-cols-2 gap-4 p-[16px] ">
                        <div className="flex items-center space-x-4  h-[52px] rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Mobileiconphone} alt='Recharge' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525]'> Mobile <br></br>Recharge</p>
                        </div>
                        <div className="flex items-center space-x-4  h-[52px] rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Mobileelectricity} alt='Payment' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525]'> Electricity <br></br>Payment</p>
                        </div>
                        <div className="flex items-center space-x-4  h-[52px] rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Creditcard} alt='Credit Card ' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525] '> Credit Card <br></br>Bill</p>
                        </div>
                        <div className="flex items-center space-x-4  h-[52px] rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Dth} alt='DTH' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525]'> DTH / Cable Tv</p>
                        </div>
                        <div className="flex items-center space-x-4  h-[52px] rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Gas} alt='Gas' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525]'> Gas <br></br>Cylinder</p>
                        </div>
                        <div className="flex items-center space-x-4  h-[52px] leading-ti2ht rounded p-2 bg-[#FFFFFF] rounded-[12px]">
                            <img className='h-6 w-6' src={Moreicon} alt='Moreicon' />
                            <p className='ml-[16px] font-medium text-[12px] text-[#252525]'> More <br></br>Payments</p>
                        </div>


                    </div>
                </div>

                <div className='m-[16px] h-[104px] border border-gray-300 rounded-[10px]'>

                    <p className='pt-[12px] ps-[12px] pb-[8px] text-[#999999] text-[12px] font-semibold'> Recent Transactions</p>
                    <div className='flex justify-between ps-[12px]'>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image1} alt="Image1" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Itachi</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image2} alt="Image2" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Madara</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image3} alt="Image3" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Hinata</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image4} alt="Image4" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Naruto</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image5} alt="Image5" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Obito</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img className='' src={Image6} alt="Image6" />
                            <p className='text-[#2525252] text-[12px] font-medium '>Sakura</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;