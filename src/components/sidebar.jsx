import React from "react";
import Homeicon from "../assets/homeicon.png";
import Qricon from "../assets/qricon.png";
import Historyicon from "../assets/historyicon.png";
import Profileicon from "../assets/profileicon.png";
import Bharatlogo from "../assets/bharatconnect.png";

const Sidebar = () => {
    return (
        <>

            <aside className='w-[240px] h-[828px] rounded-[16px]  mb-2 bg-[#42794A] border border-[#42794A] mt-[64px] ms-[80px]  flex flex-col'>
                <div className=" flex-grow ">
                    <div className="h-[272px] flex flex-col  px-4 pt-4">
                        <ul className="space-y-4">

                            <li className="py-4 hover:bg-white cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px]">
                                <div className="flex">
                                    <img src={Homeicon} alt="Home"  />
                                    <span>Home</span>
                                </div>
                            </li>
                            <li className="py-4 hover:bg-white cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px]">
                                <div className="flex">
                                    <img className="h-6 w-6 me-2" src={Qricon} alt="QR Code" />
                                    <span> QR Code</span>
                                </div>
                            </li>
                            <li className="py-4 hover:bg-white cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px]">
                                <div className="flex">
                                    <img className="h-6 w-6 me-2" src={Historyicon} alt="History" />
                                    <span> History</span>
                                </div>
                            </li>
                            <li className="py-4 hover:bg-white cursor-pointer h-[56px] ps-[20px] font-medium text-[#94CA9C] text-[14px] rounded-[12px]">
                                <div className="flex">
                                    <img className="h-6 w-6 me-2" src={Profileicon} alt="Profile" />
                                    <span> Profile</span>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className=" h-[66px] bg-white rounded-b-[16px] py-4 px-[77px]">
                    <img className="cursor-pointer" src={Bharatlogo} alt="Bharat Connect" />
                </div>


            </aside>
        </>
    )
}

export default Sidebar;