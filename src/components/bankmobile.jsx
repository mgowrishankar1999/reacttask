import React from "react";
import Userlogo from "../assets/userlogo.png"
import Copymobileicon from "../assets/copyiconmobile.png"
import Upi from "../assets/UPI.png"
import Righticonmobile from "../assets/righticonmobile.png"
import Plusmobileicon from "../assets/plusmobileicon.png"
import Eyeoffblack from "../assets/eye-off.png"

import Sbi from "../assets/sbilogomobile.png"
import Manageicon from "../assets/managemobileicon.png"
import Rightarrowmobile from "../assets/rightarrowiconmobile.png"


const MobileBank = () => {


    return (

        <>
            <div className="md:hidden">

                <div className="  mt-[26px] mx-4 mb-4 h-[96px] shadow-sm shadow-gray-300 rounded-[16px]">
                    <div className="h-full flex items-center h-[64px]  p-[16px] ">
                        <img src={Userlogo} />
                        <div className="grow">
                            <p className="text-[#252525] font-semibold text-[14px] ps-[8px]">Thomas Shelby</p>
                            <div className="flex ">
                                <img className="" src={Upi} alt='upi' />
                                <p className="mx-1 font-medium text-[14px] text-[#999999]">8778214386@qpay</p>
                                <img src={Copymobileicon} alt='upi' />
                            </div>
                        </div>
                        <img src={Righticonmobile} alt='Righticonmobile' />
                    </div>
                </div>
                <div className="mt-[16px] mx-4 mb-4 h-[66px] rounded-[16px] border border-gray-300">
                    <div className="h-full flex items-center h-[64px]  p-[16px] ">
                        {/* <img src={Userlogo} /> */}
                        <div className="grow">
                            <p className="text-[#999999] font-medium text-[12px] ps-[8px]">Wallet balance</p>
                            <div className="flex ">
                                {/* <img className="" src={Upi} alt='upi' /> */}
                                <p className="mx-1 font-bold text-[14px] text=[#252525]">₹2,36,000.47</p>
                                <img src={Eyeoffblack} alt='Eyeoffblack' />
                            </div>
                        </div>
                        {/* <img src={Righticonmobile} alt='Righticonmobile' /> */}
                        <button className="flex border  rounded-[40px] py-2 ps-2 pe-3 text-[#42794A] font-medium text-[12px] ">
                            <img className="pe-[8px]" src={Plusmobileicon} alt='Plusmobileicon' />
                            Add money
                        </button>
                    </div>
                </div>
                <div className="mt-[16px] mx-4 mb-4 h-[118px] rounded-[16px] border border-gray-300">
                    <div className="flex items-center h-[70%]  p-[16px] ">
                        {/* <img src={Userlogo} /> */}
                        <div className="grow ">
                            <p className="text-[#999999] font-medium text-[12px] ps-[8px]">Receiving money in</p>
                            <div className="flex items-center">
                                <img className="h-6 w-6" src={Sbi} alt='sbi' />
                                <div className="flex flex-col h-full">

                                    <p className="mx-1 font-semibold text-[14px] text-[#252525]">xxxx 3941</p>
                                    <p className="mx-1 font-medium text-[12px] text-[#999999]">State Bank of India</p>
                                    {/* <img src={Eyeoffblack} alt='Eyeoffblack' /> */}
                                </div>
                            </div>
                        </div>
                        {/* <img src={Righticonmobile} alt='Righticonmobile' /> */}
                        <button className="flex border w-[94px]  rounded-[40px] py-2 ps-2 pe-3 text-[#42794A] font-medium text-[12px] ">
                            <img className="pe-[8px]" src={Manageicon} alt='Manageicon' />
                            Manage
                        </button>
                    </div>
                    <div className="border-t flex  justify-center items-center h-[30%]">
                        <div className="flex  justify-center items-center ">
                            <img className="" src={Upi} alt='upi' />
                            <p className="mx-1 font-medium text-[14px] text-[#999999]">8778214386@qpay</p>
                            <img src={Copymobileicon} alt='upi' />
                        </div>
                    </div>

                </div>
                <div className="min-h-[206px] border border-gray-300 m-[16px]">
                    <div className="p-[16px] ">

                        <p className="mx-1 font-medium text-[12px] text-[#999999]">Bank accounts</p>
                        <div className="flex overflow-x-scroll">
                            <div className="min-w-[176px] min-h-[152px] rounded-[12px] shadow-md shadow-blue-200 me-[12px] ">
                                <div className="px-[16px] pt-[16px] py-[12px] flex justify-between">
                                    <img src={Sbi} />
                                    <p className="text-[#252525] text-[8px] font-medium h-[16px] bg-[#EEEEEE] flex items-center justify-center rounded-[40px] py-1 px-2">Primary</p>


                                </div>
                                <div className="p-[16px] p-[8px]">
                                    <p className="font-semibold text-[14px] text-[#252525]">State Bank Of India</p>
                                    <p className="font-medium  text-[12px] text-[#999999]">xxxx 3941</p>

                                </div>
                                <button className=" flex h-[14px] w-[134px] rounded-[40px] h-auto  border border-gray-300 p-2 justify-center items-center">
                                    <p className="text-[#42794A] text-[12px] font-medium">Check balance</p>
                                    <img src={Rightarrowmobile} />
                                </button>


                            </div>
                            <div className="min-w-[176px] min-h-[152px] rounded-[12px] shadow-md shadow-blue-200 me-[12px]">


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default MobileBank