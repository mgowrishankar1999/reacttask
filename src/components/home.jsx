// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Billpayment from "../assets/billpayment.png";

// const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="flex">
//                 <Sidebar />
//                 <div className=" mt-[64px] ms-10 me-20">
//                     {/* 1st section  */}
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
//                             <p className="text-lg mt-2  text-[16px] text-[#FFFFFF]">One device for accepting all modes of payments</p>
//                             <button
//                                 className="mt-4 px-[20px] py-3 bg-white text-[#42794A] text-[14px] rounded-[8px]  h-10 w-[180px] font-semibold hover:bg-gray-100"
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
//                             <p className='text-[20px]  font-medium text-[#999999]'>Account Holders</p>
//                         </div>
//                         <div className="w-[234px] h-[140px]  border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className='font-bold text-[40px] text-[#42794A]'>2.1K</p>
//                             <p className='text-[20px] font-medium text-[#999999]'>Transactions</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">2.3K</p>
//                             <p className='text-[20px] font-medium text-[#999999]'>Settlement</p>
//                         </div>
//                         <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
//                             <p className="font-bold text-[40px] text-[#42794A]">45K</p>
//                             <p className='text-[20px] font-medium text-[#999999]'>QR Orders</p>
//                         </div>

//                     </div>
//                     {/* 3rd section */}

//                     <div className="mt-[20px]">

//                     </div>
//                     {/* 4th section */}

//                     <div className="mt-[20px]">

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;


import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Billpayment from "../assets/billpayment.png";
import Profilecircle from "../assets/profilecircle.png";
import Qrcode from "../assets/qrcode.png";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex ">
                <Sidebar />
                <div className="mt-[64px] ms-10 me-20">
                    {/* 1st section */}
                    <div
                        className="h-[240px] w-full border-2 border-[#61CE70] rounded-[12px] flex items-center justify-between p-6 overflow-hidden relative"
                        style={{
                            background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 35%)',
                            color: '#ffffff',
                            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
                        }}
                    >
                        <div>
                            <h1 className="text-[40px] font-bold text-white tracking-normal leading-[48px]">Pay ₹1/month* for the QPay POS Device</h1>
                            <p className="text-lg mt-2 text-[16px] text-[#FFFFFF]">One device for accepting all modes of payments</p>
                            <button
                                className="mt-4 px-[20px] py-3 bg-white text-[#42794A] text-[14px] rounded-[8px] h-10 w-[180px] font-semibold hover:bg-gray-100"
                            >
                                Download App Now!
                            </button>
                        </div>
                        <div className="relative me-[76px]">
                            <img
                                src={Billpayment}
                                alt="QPay POS Device Illustration"
                                className="h-[180px] w-auto z-10"
                            />
                        </div>
                    </div>
                    {/* 2nd section */}
                    <div className="mt-10 h-[140px] flex justify-between">
                        <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
                            <p className="font-bold text-[40px] text-[#42794A]">1.5K</p>
                            <p className="text-[20px] font-medium text-[#999999]">Account Holders</p>
                        </div>
                        <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
                            <p className="font-bold text-[40px] text-[#42794A]">2.1K</p>
                            <p className="text-[20px] font-medium text-[#999999]">Transactions</p>
                        </div>
                        <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
                            <p className="font-bold text-[40px] text-[#42794A]">2.3K</p>
                            <p className="text-[20px] font-medium text-[#999999]">Settlement</p>
                        </div>
                        <div className="w-[234px] h-[140px] border border-[#EEEEEE] rounded-[12px] flex flex-col items-center justify-center">
                            <p className="font-bold text-[40px] text-[#42794A]">45K</p>
                            <p className="text-[20px] font-medium text-[#999999]">QR Orders</p>
                        </div>
                    </div>
                    {/* 3rd section */}
                    <div className="mt-[20px]">
                        <div className="flex justify-between">
                            <div className="w-[490px] h-[392px]  border border-[#EEEEEE] rounded-[12px]  ">
                                <div>

                                    <div className="mt-1">
                                        <div className="flex items-center">
                                            <div className="w-[184px] ms-[32px] h-[184px] rounded flex items-center justify-center">
                                                <img src={Profilecircle} alt="Profile Circle" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="ms-[33px] my-[28px]">
                                                <p className="text-gray-700">Complete your profile</p>
                                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                                    <li>Personal KYC</li>
                                                    <li>Company KYC</li>
                                                    <li>Onboarding details</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='border-t border-[#EEEEEE] my-6'>

                                        </div>

                                        <button className=" px-4  bg-[#42794A] text-white rounded-[8px]">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[490px] h-[392px]  border border-[#EEEEEE] rounded-[12px] p-6 flex items-center">
                                <div>

                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                                <img src={Qrcode} alt="QR Code" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-gray-700">Order QR</p>
                                                <ul className="list-disc list-inside text-gray-600 mt-2">
                                                    <li>Receive Payment</li>
                                                    <li>Order new QRs</li>
                                                    <li>Download QR</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <button className="mt-4 px-4 py-2 bg-[#42794A] text-white rounded-[8px]">
                                            View more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 4th section */}
                    <div className="mt-[20px]">
                        <div className="flex justify-between">
                            <div className="w-[48%] h-[240px]  border border-[#EEEEEE] rounded-[12px] p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488m-3.631 2.983c.561.223 1.163.223 1.724 0M4.25 12h15.5M4.25 8h10m-10 8h6" />
                                        </svg>
                                        <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Settlement</h2>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-gray-900">₹1,23,816.19</p>
                                        <ul className="list-none text-gray-600 mt-2">
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-[#42794A] text-white rounded-[8px]">
                                    Settle Now
                                </button>
                            </div>
                            <div className="w-[48%] h-[240px]  border border-[#EEEEEE] rounded-[12px] p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488m-3.631 2.983c.561.223 1.163.223 1.724 0M4.25 12h15.5M4.25 8h10m-10 8h6" />
                                        </svg>
                                        <h2 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Total Transactions</h2>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-2xl font-bold text-gray-900">₹1,23,816.19</p>
                                        <ul className="list-none text-gray-600 mt-2">
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                            <li>Ibrahim 23 Oct, 09:15 AM <span className="float-right">+₹90</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-[#42794A] text-white rounded-[8px]">
                                    View All
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;