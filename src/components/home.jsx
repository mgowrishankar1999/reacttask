


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
import Mobilewallet from '../assets/mobilewalleticon.png';

const Home = () => {
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


            {/* mobile */}

            <Navbar />
            <div className='md:hidden m-[16px] min-h-[206px] bg-gradient-to-b from-[#61CE70] to-[#42794A] rounded-[16px]'>


                <div className='min-h-[52px] border-b border-white'>
                    <button className='w-[140px] h-[52px] border-r flex items-center'>
                        <img className='w-6 h-6' src={Mobilewallet} alt="Mobile Wallet" />
                        <div className='ms-2'>
                            <p className='text-[10px] text-white font-medium '>Qpay wallet</p>
                            <p className='pt-[2px] font-bold text-[12px] text-white'>₹2,36,000.47</p>
                        </div>
                    </button>
                    <button className='w-[140px] border-r'></button>
                </div>

            </div>
        </>
    );
};

export default Home;