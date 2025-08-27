



// import React from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Logo from "../assets/logo.png";
// import Qrcode from "../assets/qrcode.png";
// import Besideicon from "../assets/besideupiicon.png";
// import Download from "../assets/downloadicon.png";
// import Share from "../assets/shareicon.png";
// import Iconright from "../assets/iconright.png";

// const ActiveQrcode = () => {
//     return (
//         <div>
//             <Navbar />
//             <div className="flex">
//                 <Sidebar />
//                 <div className="mt-[64px] ms-10 me-20 mb-[80px] flex-1">
//                     <p className="font-bold text-[32px] text-[#252525] mb-[16px]"> Manage QR/POS</p>

//                     <div className="flex justify-between w-full">
//                         {/* 1st div */}
//                         <div className="w-[530px] h-[730px] flex flex-col items-center border border-[#E0E0E0] rounded-[16px]">
//                             <img className="w-[72px] h-[62px] mt-[32px]" src={Logo} alt="Logo" />
//                             <div className="mt-[24px] px-[36px]">
//                                 <img
//                                     className="w-[426px] h-[426px]"
//                                     src={Qrcode} alt="QR Code"
//                                 />
//                             </div>
//                             <div className="mt-[24px] text-center mx-[77px]">
//                                 <div className="whitespace-nowrap flex items-center space-x-2 mb-4">
//                                     <p className="text-[20px] font-bold text-[#252525]">UPI ID: 9876543210@qpay</p>
//                                     <img src={Besideicon} alt="Beside Icon" />
//                                 </div>
//                                 <p className="text-[16px] font-medium text-[#999999]">Ibrahim Mohammedali</p>
//                             </div>

//                             <div className="mt-[24px] w-[100%] px-[36px] flex justify-between items-center">
//                                 <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Download} alt="Download Icon" />
//                                     <span>Download</span>
//                                 </button>
//                                 <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Share} alt="Share Icon" />
//                                     <span>Share</span>
//                                 </button>
//                             </div>
//                         </div>
//                         {/* 2nd div */}
//                         <div className="w-[530px] h-[730px] border border-[#E0E0E0] rounded-[16px] px-6 flex flex-col justify-between">
//                             <div>
//                                 <div className="flex space-x-6 ms-2 px-[4px] flex items-center border border-[#42794A] rounded-[8px] h-[50px] my-[32px]">
//                                     <button className="px-4 h-[42px] py-2 bg-[#42794A] text-white rounded-[8px] font-semibold">
//                                         Active QR Codes
//                                     </button>
//                                     <button className="px-4 h-[42px] py-2 bg-[#FFFFFF] text-[#42794A] rounded-[8px] font-semibold">
//                                         QR Code Requests
//                                     </button>
//                                 </div>
//                                 <div className="space-y-4 ">
//                                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2 ">
//                                         <div className="flex items-center space-x-2 mb-4">
//                                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 1</p>
//                                             </div>
//                                         </div>
//                                         <img src={Iconright} alt="Icon Right" />
//                                     </div>
//                                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                         <div className="flex items-center space-x-2 mb-4">
//                                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 2</p>
//                                             </div>
//                                         </div>
//                                         <img src={Iconright} alt="Icon Right" />
//                                     </div>
//                                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                         <div className="flex items-center space-x-2 mb-4">
//                                             <div className="flex items-center h-[96px] w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 3</p>
//                                             </div>
//                                         </div>
//                                         <img src={Iconright} alt="Icon Right" />
//                                     </div>
//                                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                         <div className="flex items-center space-x-2 mb-4">
//                                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                             </div>
//                                             <div>
//                                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 4</p>
//                                             </div>
//                                         </div>
//                                         <img src={Iconright} alt="Icon Right" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="w-full h-[56px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                 Request more QR Codes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ActiveQrcode;







// import React, { useState } from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Logo from "../assets/logo.png";
// import Qrcode from "../assets/qrcode.png";
// import Besideicon from "../assets/besideupiicon.png";
// import Download from "../assets/downloadicon.png";
// import Share from "../assets/shareicon.png";
// import Iconright from "../assets/iconright.png";
// import Checked from "../assets/greenchecked.png";
// import Downicon from "../assets/greenicondown.png";

// const ActiveQrcode = () => {
//     const [activeTab, setActiveTab] = useState("Active QR Codes");

//     return (
//         <div>
//             <Navbar />
//             <div className="flex">
//                 <Sidebar />
//                 <div className="mt-[64px] ms-10 me-20 mb-[80px] flex-1">
//                     <p className="font-bold text-[32px] text-[#252525] mb-[16px]"> Manage QR/POS</p>

//                     <div className="flex justify-between w-full">
//                         {/* 1st div */}
//                         <div className="w-[530px] h-[730px] flex flex-col items-center border border-[#E0E0E0] rounded-[16px]">
//                             <img className="w-[72px] h-[62px] mt-[32px]" src={Logo} alt="Logo" />
//                             <div className="mt-[24px] px-[36px]">
//                                 <img
//                                     className="w-[426px] h-[426px]"
//                                     src={Qrcode} alt="QR Code"
//                                 />
//                             </div>
//                             <div className="mt-[24px] text-center mx-[77px]">
//                                 <div className="whitespace-nowrap flex items-center space-x-2 mb-4">
//                                     <p className="text-[20px] font-bold text-[#252525]">UPI ID: 9876543210@qpay</p>
//                                     <img src={Besideicon} alt="Beside Icon" />
//                                 </div>
//                                 <p className="text-[16px] font-medium text-[#999999]">Ibrahim Mohammedali</p>
//                             </div>

//                             <div className="mt-[24px] w-[100%] px-[36px] flex justify-between items-center">
//                                 <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Download} alt="Download Icon" />
//                                     <span>Download</span>
//                                 </button>
//                                 <button className=" bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Share} alt="Share Icon" />
//                                     <span>Share</span>
//                                 </button>
//                             </div>
//                         </div>
//                         {/* 2nd div */}
// <div className="w-[530px] h-[730px] border border-[#E0E0E0] rounded-[16px] px-6 flex flex-col justify-between">
//     <div>
//         <div className="flex  ms-2 px-[4px] flex items-center justify-between border border-[#42794A] rounded-[8px] h-[50px] my-[32px]">
//             <button
//                 className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "Active QR Codes" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
//                 onClick={() => setActiveTab("Active QR Codes")}
//             >
//                 Active QR Codes
//             </button>
//             <button
//                 className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "QR Code Requests" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
//                 onClick={() => setActiveTab("QR Code Requests")}
//             >
//                 QR Code Requests
//             </button>
//         </div>
//         <div className="space-y-4">
//             {activeTab === "Active QR Codes" ? (
//                 <>
//                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                         <div className="flex items-center space-x-2 mb-4">
//                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                             </div>
//                             <div>
//                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 1</p>
//                             </div>
//                         </div>
//                         <img src={Iconright} alt="Icon Right" />
//                     </div>
//                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                         <div className="flex items-center space-x-2 mb-4">
//                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                             </div>
//                             <div>
//                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 2</p>
//                             </div>
//                         </div>
//                         <img src={Iconright} alt="Icon Right" />
//                     </div>
//                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                         <div className="flex items-center space-x-2 mb-4">
//                             <div className="flex items-center h-[96px] w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                             </div>
//                             <div>
//                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 3</p>
//                             </div>
//                         </div>
//                         <img src={Iconright} alt="Icon Right" />
//                     </div>
//                     <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                         <div className="flex items-center space-x-2 mb-4">
//                             <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                 <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                             </div>
//                             <div>
//                                 <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                 <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                 <p className="text-[16px] font-medium text-[#999999]">Terminal 4</p>
//                             </div>
//                         </div>
//                         <img src={Iconright} alt="Icon Right" />
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     {/* Placeholder for QR Code Requests UI - Replace with actual content */}

//                     <div className=" mb-8">

//                         <div className="flex h-[97px] items-center justify-between  p-2">


//                             <div className="flex items-center space-x-2 mb-4">
//                                 <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                     <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                 </div>
//                                 <div>
//                                     <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
//                                     <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
//                                     <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
//                                 </div>
//                             </div>
//                             <img src={Iconright} alt="Icon Right" />


//                         </div>
//                         <div className="flex px-2 ms-2 me-2 items-center rounded-[8px] mt-[16px]  bg-[#EEF8F2]">
//                             <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
//                             <button className="flex-1 h-[56px] ps-2 text-[#42794A]  text-[20px] font-semibold text-left">
//                                 QR Request Accepted
//                             </button>
//                             <img className="h-[24px] w-[24px] flex-none" src={Downicon} alt="Checked" />
//                         </div>
//                         <p className="border mx-2 mt-3"></p>
//                     </div>
//                     <div className="">

//                         <div className="flex h-[97px] items-center justify-between  p-2">


//                             <div className="flex items-center space-x-2 mb-4">
//                                 <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                     <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                 </div>
//                                 <div>
//                                     <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
//                                     <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
//                                     <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
//                                 </div>
//                             </div>
//                             <img src={Iconright} alt="Icon Right" />


//                         </div>
//                         <div className="flex px-2 ms-2 me-2 items-center rounded-[8px] mt-[16px]  bg-[#EEF8F2]">
//                             <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
//                             <button className="flex-1 h-[56px] ps-2 text-[#42794A]  text-[20px] font-semibold text-left">
//                                 QR Request Accepted
//                             </button>
//                             <img className="h-[24px] w-[24px] flex-none" src={Downicon} alt="Checked" />
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     </div>
//     <button className="w-full h-[56px] mb-[10px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//         Request more QR Codes
//     </button>
// </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ActiveQrcode;


















// import React, { useState } from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Logo from "../assets/logo.png";
// import Qrcode from "../assets/qrcode.png";
// import Besideicon from "../assets/besideupiicon.png";
// import Download from "../assets/downloadicon.png";
// import Share from "../assets/shareicon.png";
// import Iconright from "../assets/iconright.png";
// import Checked from "../assets/greenchecked.png";
// import Downicon from "../assets/greenicondown.png";

// const ActiveQrcode = () => {
//     const [activeTab, setActiveTab] = useState("Active QR Codes");

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <Navbar />
//             <div className="flex flex-col md:flex-row">
//                 <div className="w-[30%]">
//                     <Sidebar />
//                 </div>
//                 <div className="mt-4 w-[70%] me-20 mb-10">
//                     {/* 1st Section */}
//                     <div className="w-full border-2 border-[#61CE70] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 overflow-hidden"
//                         style={{
//                             background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 40%)',
//                             color: '#ffffff',
//                             clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
//                         }}
//                     >
//                         <div className="mb-4 md:mb-0 md:pr-4">
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">Manage Your QR/POS</h1>
//                             <p className="text-sm sm:text-base mt-2">Effortlessly handle your QR codes and POS devices</p>
//                             <button className="mt-4 px-4 py-2 bg-white text-[#42794A] text-sm rounded-lg font-semibold hover:bg-gray-100">
//                                 Explore Features
//                             </button>
//                         </div>
//                         <img src={Qrcode} alt="QR Code Illustration" className="h-32 md:h-40 lg:h-48 w-auto" />
//                     </div>

//                     {/* 2nd Section */}
//                     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                         {[
//                             { value: '1.5K', label: 'Active QR Codes' },
//                             { value: '2.1K', label: 'QR Transactions' },
//                             { value: '2.3K', label: 'POS Devices' },
//                             { value: '45K', label: 'QR Requests' },
//                         ].map((item, index) => (
//                             <div key={index} className="border border-gray-200 rounded-lg flex flex-col items-center justify-center p-4">
//                                 <p className="font-bold text-2xl sm:text-3xl text-[#42794A]">{item.value}</p>
//                                 <p className="text-base sm:text-lg font-medium text-gray-500">{item.label}</p>
//                             </div>
//                         ))}
//                     </div>

//                     {/* 3rd Section */}
//                     <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">


//                         <div className="flex flex-col items-center border border-[#E0E0E0] rounded-[16px]">
//                             <img className="w-[72px] h-[62px] mt-[32px]" src={Logo} alt="Logo" />
//                             <div className="mt-[24px] px-[36px]">
//                                 <img
//                                     className="w-[426px] h-[426px]"
//                                     src={Qrcode} alt="QR Code"
//                                 />
//                             </div>
//                             <div className="mt-[24px] text-center mx-[77px]">
//                                 <div className="whitespace-nowrap flex items-center space-x-2 mb-4">
//                                     <p className="text-[20px] font-bold text-[#252525]">UPI ID: 9876543210@qpay</p>
//                                     <img src={Besideicon} alt="Beside Icon" />
//                                 </div>
//                                 <p className="text-[16px] font-medium text-[#999999]">Ibrahim Mohammedali</p>
//                             </div>

//                             <div className="mt-[24px] w-[100%] px-[36px] flex justify-between items-center">
//                                 <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Download} alt="Download Icon" />
//                                     <span>Download</span>
//                                 </button>
//                                 <button className=" bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
//                                     <img src={Share} alt="Share Icon" />
//                                     <span>Share</span>
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="w-[530px] h-[730px] border border-[#E0E0E0] rounded-[16px] px-6 flex flex-col justify-between">
//                             <div>
//                                 <div className="flex  ms-2 px-[4px] flex items-center justify-between border border-[#42794A] rounded-[8px] h-[50px] my-[32px]">
//                                     <button
//                                         className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "Active QR Codes" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
//                                         onClick={() => setActiveTab("Active QR Codes")}
//                                     >
//                                         Active QR Codes
//                                     </button>
//                                     <button
//                                         className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "QR Code Requests" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
//                                         onClick={() => setActiveTab("QR Code Requests")}
//                                     >
//                                         QR Code Requests
//                                     </button>
//                                 </div>
//                                 <div className="space-y-4">
//                                     {activeTab === "Active QR Codes" ? (
//                                         <>
//                                             <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                                 <div className="flex items-center space-x-2 mb-4">
//                                                     <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                         <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                         <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                         <p className="text-[16px] font-medium text-[#999999]">Terminal 1</p>
//                                                     </div>
//                                                 </div>
//                                                 <img src={Iconright} alt="Icon Right" />
//                                             </div>
//                                             <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                                 <div className="flex items-center space-x-2 mb-4">
//                                                     <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                         <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                         <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                         <p className="text-[16px] font-medium text-[#999999]">Terminal 2</p>
//                                                     </div>
//                                                 </div>
//                                                 <img src={Iconright} alt="Icon Right" />
//                                             </div>
//                                             <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                                 <div className="flex items-center space-x-2 mb-4">
//                                                     <div className="flex items-center h-[96px] w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                         <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                         <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                         <p className="text-[16px] font-medium text-[#999999]">Terminal 3</p>
//                                                     </div>
//                                                 </div>
//                                                 <img src={Iconright} alt="Icon Right" />
//                                             </div>
//                                             <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
//                                                 <div className="flex items-center space-x-2 mb-4">
//                                                     <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                         <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
//                                                         <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
//                                                         <p className="text-[16px] font-medium text-[#999999]">Terminal 4</p>
//                                                     </div>
//                                                 </div>
//                                                 <img src={Iconright} alt="Icon Right" />
//                                             </div>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {/* Placeholder for QR Code Requests UI - Replace with actual content */}

//                                             <div className=" mb-8">

//                                                 <div className="flex h-[97px] items-center justify-between  p-2">


//                                                     <div className="flex items-center space-x-2 mb-4">
//                                                         <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                             <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
//                                                             <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
//                                                             <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
//                                                         </div>
//                                                     </div>
//                                                     <img src={Iconright} alt="Icon Right" />


//                                                 </div>
//                                                 <div className="flex px-2 ms-2 me-2 items-center rounded-[8px] mt-[16px]  bg-[#EEF8F2]">
//                                                     <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
//                                                     <button className="flex-1 h-[56px] ps-2 text-[#42794A]  text-[20px] font-semibold text-left">
//                                                         QR Request Accepted
//                                                     </button>
//                                                     <img className="h-[24px] w-[24px] flex-none" src={Downicon} alt="Checked" />
//                                                 </div>
//                                                 <p className="border mx-2 mt-3"></p>
//                                             </div>
//                                             <div className="">

//                                                 <div className="flex h-[97px] items-center justify-between  p-2">


//                                                     <div className="flex items-center space-x-2 mb-4">
//                                                         <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
//                                                             <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
//                                                             <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
//                                                             <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
//                                                         </div>
//                                                     </div>
//                                                     <img src={Iconright} alt="Icon Right" />
//                                                 </div>
//                                                 <div className="flex px-2 ms-2 me-2 items-center rounded-[8px] mt-[16px]  bg-[#EEF8F2]">
//                                                     <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
//                                                     <button className="flex-1 h-[56px] ps-2 text-[#42794A]  text-[20px] font-semibold text-left">
//                                                         QR Request Accepted
//                                                     </button>
//                                                     <img className="h-[24px] w-[24px] flex-none" src={Downicon} alt="Checked" />
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )}
//                                 </div>
//                             </div>
//                             <button className="w-full h-[56px] mb-[10px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
//                                 Request more QR Codes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ActiveQrcode;


import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Logo from "../assets/logo.png";
import Qrcode from "../assets/qrcode.png";
import Besideicon from "../assets/besideupiicon.png";
import Download from "../assets/downloadicon.png";
import Share from "../assets/shareicon.png";
import Iconright from "../assets/iconright.png";
import Checked from "../assets/greenchecked.png";
import Downicon from "../assets/greenicondown.png";
import Iconup from "../assets/iconupblack.png";

const ActiveQrcode = () => {
    const [activeTab, setActiveTab] = useState("Active QR Codes");
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <div className="w-[30%]">
                    <Sidebar />
                </div>
                <div className="mt-4 w-[70%] me-20 mb-10">
                    {/* 1st Section */}
                    <div className="w-full border-2 border-[#61CE70] rounded-lg flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 overflow-hidden"
                        style={{
                            background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 40%)',
                            color: '#ffffff',
                            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
                        }}
                    >
                        <div className="mb-4 md:mb-0 md:pr-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">Manage Your QR/POS</h1>
                            <p className="text-sm sm:text-base mt-2">Effortlessly handle your QR codes and POS devices</p>
                            <button className="mt-4 px-4 py-2 bg-white text-[#42794A] text-sm rounded-lg font-semibold hover:bg-gray-100">
                                Explore Features
                            </button>
                        </div>
                        <img src={Qrcode} alt="QR Code Illustration" className="h-32 md:h-40 lg:h-48 w-auto" />
                    </div>

                    {/* 2nd Section */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { value: '1.5K', label: 'Active QR Codes' },
                            { value: '2.1K', label: 'QR Transactions' },
                            { value: '2.3K', label: 'POS Devices' },
                            { value: '45K', label: 'QR Requests' },
                        ].map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg flex flex-col items-center justify-center p-4">
                                <p className="font-bold text-2xl sm:text-3xl text-[#42794A]">{item.value}</p>
                                <p className="text-base sm:text-lg font-medium text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* 3rd Section */}
                    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center border border-[#E0E0E0] rounded-[16px]">
                            <img className="w-[72px] h-[62px] mt-[32px]" src={Logo} alt="Logo" />
                            <div className="mt-[24px] px-[36px]">
                                <img
                                    className="w-[426px] h-[426px]"
                                    src={Qrcode} alt="QR Code"
                                />
                            </div>
                            <div className="mt-[24px] text-center mx-[77px]">
                                <div className="whitespace-nowrap flex items-center space-x-2 mb-4">
                                    <p className="text-[20px] font-bold text-[#252525]">UPI ID: 9876543210@qpay</p>
                                    <img src={Besideicon} alt="Beside Icon" />
                                </div>
                                <p className="text-[16px] font-medium text-[#999999]">Ibrahim Mohammedali</p>
                            </div>
                            <div className="mt-[24px] w-[100%] px-[36px] flex justify-between items-center">
                                <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
                                    <img src={Download} alt="Download Icon" />
                                    <span>Download</span>
                                </button>
                                <button className="bg-[#EEEEEE] text-[20px] font-semibold text-[#252525] rounded-[8px] w-[204px] h-[56px] flex items-center justify-center space-x-2">
                                    <img src={Share} alt="Share Icon" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-[530px] h-[730px] border border-[#E0E0E0] rounded-[16px] px-6 flex flex-col justify-between">
                            <div>
                                <div className="flex ms-2 px-[4px] flex items-center justify-between border border-[#42794A] rounded-[8px] h-[50px] my-[32px]">
                                    <button
                                        className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "Active QR Codes" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
                                        onClick={() => setActiveTab("Active QR Codes")}
                                    >
                                        Active QR Codes
                                    </button>
                                    <button
                                        className={`px-4 h-[42px] w-[240px] py-2 rounded-[8px] font-semibold ${activeTab === "QR Code Requests" ? "bg-[#42794A] text-white" : "bg-[#FFFFFF] text-[#42794A]"}`}
                                        onClick={() => setActiveTab("QR Code Requests")}
                                    >
                                        QR Code Requests
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {activeTab === "Active QR Codes" ? (
                                        <>
                                            <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                        <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
                                                        <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
                                                        <p className="text-[16px] font-medium text-[#999999]">Terminal 1</p>
                                                    </div>
                                                </div>
                                                <img src={Iconright} alt="Icon Right" />
                                            </div>
                                            <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                        <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
                                                        <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
                                                        <p className="text-[16px] font-medium text-[#999999]">Terminal 2</p>
                                                    </div>
                                                </div>
                                                <img src={Iconright} alt="Icon Right" />
                                            </div>
                                            <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <div className="flex items-center h-[96px] w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                        <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
                                                        <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
                                                        <p className="text-[16px] font-medium text-[#999999]">Terminal 3</p>
                                                    </div>
                                                </div>
                                                <img src={Iconright} alt="Icon Right" />
                                            </div>
                                            <div className="flex h-[97px] items-center justify-between border-b border-[#E0E0E0] p-2">
                                                <div className="flex items-center space-x-2 mb-4">
                                                    <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                        <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[20px] font-semibold text-[#252525]">QZ01946579</p>
                                                        <p className="text-[16px] text-[#252525] font-medium">All Marketing Sales - MS1903041155331648980231</p>
                                                        <p className="text-[16px] font-medium text-[#999999]">Terminal 4</p>
                                                    </div>
                                                </div>
                                                <img src={Iconright} alt="Icon Right" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <div className="flex h-[97px] items-center justify-between p-2">
                                                    <div className="flex items-center space-x-2 mb-4">
                                                        <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                            <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
                                                            <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
                                                            <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
                                                        </div>
                                                    </div>
                                                    <img src={Iconright} alt="Icon Right" />
                                                </div>
                                                <div className="flex px-2 ms-2 me-2 items-center rounded-t-[8px] bg-[#EEF8F2]">
                                                    <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
                                                    <button
                                                        className="flex-1 h-[56px] ps-2 text-[#42794A] text-[20px] font-semibold text-left"
                                                        onClick={toggleDropdown1}
                                                    >
                                                        QR Request Accepted
                                                    </button>
                                                    <img className="h-[24px] w-[24px] flex-none" src={isDropdownOpen1 ? Iconup : Downicon} alt="Toggle" />
                                                </div>
                                                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isDropdownOpen1 ? 'max-h-96' : 'max-h-0'}`}>
                                                    <div className="px-2 ms-2 me-2 rounded-b-[8px] bg-[#EEF8F2]">
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px] rounded" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Production</span>
                                                        </div>
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px]" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Dispatch</span>
                                                        </div>
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px]" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Delivery</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="border mx-2 mt-3"></p>
                                            </div>
                                            <div className="">
                                                <div className="flex h-[97px] items-center justify-between p-2">
                                                    <div className="flex items-center space-x-2 mb-4">
                                                        <div className="h-[96px] flex items-center w-[96px] justify-center border border-[#E0E0E0] rounded-[10px]">
                                                            <img src={Qrcode} alt="QR Code" className="w-[74px] h-[74px]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[20px] font-semibold text-[#252525]">QR Request #002</p>
                                                            <p className="text-[16px] text-[#252525] font-medium">Approved - Requested on 2025-08-22</p>
                                                            <p className="text-[16px] font-medium text-[#999999]">Status: Approved</p>
                                                        </div>
                                                    </div>
                                                    <img src={Iconright} alt="Icon Right" />
                                                </div>
                                                <div className="flex px-2 ms-2 me-2 items-center rounded-t-[8px] bg-[#EEF8F2]">
                                                    <img className="h-[24px] w-[24px] flex-none" src={Checked} alt="Checked" />
                                                    <button
                                                        className="flex-1 h-[56px] ps-2 text-[#42794A] text-[20px] font-semibold text-left"
                                                        onClick={toggleDropdown2}
                                                    >
                                                        QR Request Accepted
                                                    </button>
                                                    <img className="h-[24px] w-[24px] flex-none" src={isDropdownOpen2 ? Iconup : Downicon} alt="Toggle" />
                                                </div>
                                                <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isDropdownOpen2 ? 'max-h-96' : 'max-h-0'}`}>
                                                    <div className="px-2 ms-2 me-2 rounded-b-[8px] bg-[#EEF8F2]">
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px] rounded" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Production</span>
                                                        </div>
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px]" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Dispatch</span>
                                                        </div>
                                                        <div className="flex items-center h-[56px]">
                                                            <input type="checkbox" className="mr-2 h-[24px] w-[24px]" />
                                                            <span className="text-[20px] text-[#999999] font-semibold">Awaiting Delivery</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <button className="w-full h-[56px] mb-[10px] bg-[#42794A] text-[20px] font-medium text-white rounded-[12px]">
                                Request more QR Codes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveQrcode;