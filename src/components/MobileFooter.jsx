// import React from "react";
// import Mobilehomewhite from "../assets/mobilehomewhite.png"
// import Mobilebank from "../assets/mobilebank.png"
// import Mobilehistory from "../assets/mobilehistory.png"
// import Mobileprofile from "../assets/mobileprofile.png"


// const Footer = () => {


//     return (
//         <>
//             <div className=" h-[80px] bg-[#42794A]">
//                 <div className='flex justify-around items-center  h-full w-full '>
//                     <div className='flex flex-col items-center justify-center '>
//                         <img className='h-[24px] w-[24px]' src={Mobilehomewhite} alt="Mobilehomewhite" />
//                         <p className='text-[#FFFFFF] text-[12px] font-medium pt-1'>Home</p>
//                     </div>
//                     <div className='flex flex-col items-center justify-center '>
//                         <img className='h-[24px] w-[24px]' src={Mobilebank} alt="Mobilebank" />
//                         <p className='text-[#94CA9C] text-[12px] font-medium pt-1 '>Bank</p>
//                     </div>
//                     <div className='flex flex-col items-center justify-center '>
//                         <img className='h-[24px] w-[24px]' src={Mobilehistory} alt="Mobilehistory" />
//                         <p className='text-[#94CA9C] text-[12px] font-medium pt-1'>History</p>
//                     </div>
//                     <div className='flex flex-col items-center justify-center '>
//                         <img className='h-[24px] w-[24px]' src={Mobileprofile} alt="Mobileprofile" />
//                         <p className='text-[#94CA9C] text-[12px] font-medium pt-1'>Profile</p>
//                     </div>

//                 </div>

//             </div>

//         </>
//     )
// }

// export default Footer



// import React from "react";
// import Mobilehomewhite from "../assets/mobilehomewhite.png";
// import Mobilebank from "../assets/mobilebank.png";
// import Mobilehistory from "../assets/mobilehistory.png";
// import Mobileprofile from "../assets/mobileprofile.png";

// // after active the ison below 

// import Profileiconwhite from "../assets/profileiconwhite.png";
// import Bankiconwhite from "../assets/bankiconwhite.png"
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//     const navigate = useNavigate()
//     const navItems = [
//         { path: "/", name: "home", icon: Mobilehomewhite, label: "Home", textColor: "text-[#FFFFFF]" },
//         { path: "/bank", name: "bank", icon: Mobilebank, label: "Bank", textColor: "text-[#94CA9C]" },
//         { path: "/", name: "history", icon: Mobilehistory, label: "History", textColor: "text-[#94CA9C]" },
//         { path: "/banks", name: "profile", icon: Mobileprofile, label: "Profile", textColor: "text-[#94CA9C]" },
//     ];

//     return (
//         <div className="h-[80px] bg-[#42794A]">
//             <div className="flex justify-around items-center h-full w-full">
//                 {navItems.map((item) => (
//                     <div
//                         onClick={() => navigate(item.path)}
//                         key={item.name} className="flex flex-col items-center justify-center">
//                         <img className="h-[24px] w-[24px]" src={item.icon} alt={item.name} />
//                         <p className={`${item.textColor} text-[12px] font-medium pt-1`}>{item.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Footer;



import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Default icons
import Mobilehome from "../assets/defaulthomeiconmobile.png";
import Mobilebank from "../assets/mobilebank.png";
import Mobilehistory from "../assets/mobilehistory.png";
import Mobileprofile from "../assets/mobileprofile.png";

// White/active icons
import Profileiconwhite from "../assets/profileiconwhite.png";
import Bankiconwhite from "../assets/bankiconwhite.png";
// import Historyiconwhite from "../assets/historyiconwhite.png"; // add this if you have it
import Homeiconwhite from "../assets/mobilehomewhite.png"; // already white

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {
            path: "/",
            name: "home",
            defaultIcon: Mobilehome,
            activeIcon: Homeiconwhite,
            label: "Home",
        },
        {
            path: "/bank",
            name: "bank",
            defaultIcon: Mobilebank,
            activeIcon: Bankiconwhite,
            label: "Bank",
        },
        {
            path: "/",
            name: "history",
            defaultIcon: Mobilehistory,
            activeIcon: Mobilehistory,
            label: "History",
        },
        {
            path: "/profile",
            name: "profile",
            defaultIcon: Mobileprofile,
            activeIcon: Profileiconwhite,
            label: "Profile",
        },
    ];

    return (
        <div className="h-[80px] bg-[#42794A]">
            <div className="flex justify-around items-center h-full w-full">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <div
                            onClick={() => navigate(item.path)}
                            key={item.name}
                            className="flex flex-col items-center justify-center cursor-pointer"
                        >
                            <img
                                className="h-[24px] w-[24px]"
                                src={isActive ? item.activeIcon : item.defaultIcon}
                                alt={item.name}
                            />
                            <p
                                className={`text-[12px] font-medium pt-1 ${isActive ? "text-white" : "text-[#94CA9C]"
                                    }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
