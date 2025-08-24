import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Logo from "../assets/logo.png";
import Qrcode from "../assets/qrcode.png";
import Besideicon from "../assets/besideupiicon.png";
import Download from "../assets/downloadicon.png";
import Share from "../assets/shareicon.png";

const ActiveQrcode = () => {
    return (
        <div>
            <Navbar />
            <div className="flex ">
                <Sidebar />
                <div className="mt-[64px] ms-10 me-20 mb-[80px]">
                    <p className="font-bold text-[32px] text-[#252525] mb-[16px]"> Manage QR/POS</p>

                    <div className="flex  ">
                        {/* 1st div */}
                        <div className="w-[490px] h-[730px] flex flex-col items-center border border-[#E0E0E0] rounded-[16px] ">
                            <img className="w-[72px] h-[62px] mt-[32px]" src={Logo} alt="Logo" />
                            <div className="mt-[24px] px-[36px]">
                                <img
                                    className="w-[426px] h-[426px]"
                                    src={Qrcode} alt="QR Code" />

                            </div>
                            <div className="mt-[24px]  text-center  mx-[77px] ">


                                <div className=" whitespace-nowrap flex items-center space-x-2">

                                    <p className="text-[20px] font-bold text-[#252525]">UPI ID: 9876543210@qpay</p>
                                    <img src={Besideicon} alt="Beside Icon" />
                                </div>
                                <p className="text-[16px] font-medium text-[#999999]">Ibrahim Mohammedali</p>
                            </div>

                            <div className="mt-[24px] w-[100%] px-[36px] flex justify-between items-center ">
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
                        {/* 2nd div */}
                        <div className="w-[490px] h-[730px]">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActiveQrcode;