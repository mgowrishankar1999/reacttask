// import React from "react";
// import { useLocation } from "react-router-dom";
// import Homeicon from "../assets/homeicon.png";
// import Qricon from "../assets/qricon.png";
// import Historyicon from "../assets/historyicon.png";
// import Profileicon from "../assets/profileicon.png";
// import Bharatlogo from "../assets/bharatconnect.png";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     return (
//         <>
//             <aside className="min-w-[15%] min-h-[828px] rounded-[16px] mb-2 bg-[#42794A] border border-[#42794A] mt-[64px] ms-[80px] flex flex-col">
//                 <div className="flex-grow">
//                     <div className="h-[272px] flex flex-col px-4 pt-4">
//                         <ul className="space-y-4">
//                             <li
//                                 onClick={() => navigate('/')}

//                                 className={`py-4 cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px] ${location.pathname === "/" ? "bg-white" : "hover:bg-white"
//                                     }`}
//                             >
//                                 <div className="flex">
//                                     <img src={Homeicon} alt="Home" />
//                                     <span>Home</span>
//                                 </div>
//                             </li>
//                             <li
//                                 onClick={() => navigate('/active-qrcode')}
//                                 className={`py-4 cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px] ${location.pathname === "/active-qrcode" ? "bg-white" : "hover:bg-white"
//                                     }`}>
//                                 <div className="flex">
//                                     <img className="h-6 w-6 me-2" src={Qricon} alt="QR Code" />
//                                     <span>QR Code</span>
//                                 </div>
//                             </li>
//                             <li
//                                 onClick={() => navigate('/history')}
//                                 className={`py-4 cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px] ${location.pathname === "/history" ? "bg-white" : "hover:bg-white"
//                                     }`}>
//                                 <div className="flex">
//                                     <img className="h-6 w-6 me-2" src={Historyicon} alt="History" />
//                                     <span>History</span>
//                                 </div>
//                             </li>
//                             <li
//                                 onClick={() => navigate('/profile')}

//                                 className={`py-4 cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px] ${location.pathname === "/profile" ? "bg-white" : "hover:bg-white"
//                                     }`}>
//                                 <div className="flex">
//                                     <img className="h-6 w-6 me-2" src={Profileicon} alt="Profile" />
//                                     <span>Profile</span>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="h-[66px] bg-white rounded-b-[16px] py-4 px-[77px]">
//                     <img className="cursor-pointer" src={Bharatlogo} alt="Bharat Connect" />
//                 </div>
//             </aside >
//         </>
//     );
// };

// export default Sidebar;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Homeicon from '../assets/homeicon.png';
import Qricon from '../assets/qricon.png';
import Historyicon from '../assets/historyicon.png';
import Profileicon from '../assets/profileicon.png';
import Bharatlogo from '../assets/bharatconnect.png';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="hidden md:h-[828px] bg-[#42794A] border border-[#42794A] rounded-lg mt-4 mx-4 md:mx-6 lg:ms-20 md:flex flex-col">
      <div className="flex-grow p-4">
        <ul className="space-y-2">
          {[
            { path: '/', icon: Homeicon, label: 'Home' },
            { path: '/active-qrcode', icon: Qricon, label: 'QR Code' },
            { path: '/history', icon: Historyicon, label: 'History' },
            { path: '/profile', icon: Profileicon, label: 'Profile' },
          ].map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`py-2 px-4 cursor-pointer rounded-lg text-sm font-medium text-[#94CA9C] flex items-center space-x-2 hover:bg-white ${location.pathname === item.path ? 'bg-white text-[#42794A]' : ''}`}
            >
              <img src={item.icon} alt={item.label} className="h-6 w-6" />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-16 bg-white rounded-b-lg flex items-center justify-center">
        <img src={Bharatlogo} alt="Bharat Connect" className="h-8 cursor-pointer" />
      </div>
    </aside>
  );
};

export default Sidebar;