import React from "react";
import Backicon from "../assets/backiconmobile.png";
import { useState } from "react";
import Card from "../assets/card.png"
import Copyiconmobile from "../assets/copyiconmobile.png"
import Eyeoff from "../assets/eye-off.png"
import Cardaddnew from "../assets/cardaddnewicon.png"
import Footer from "./MobileFooter";
import { useNavigate } from 'react-router-dom';

const MobileBank = () => {
    const [active, setActive] = useState("Cards");
    const navigate = useNavigate();

    return (
        <>
            <div className="md:hidden mb-[82px]">
                <div className="h-[22px]"></div>
                <div className="h-[72px] w-full">
                    <div className="w-1/2 flex justify-between items-center m-4">
                        {/* <img className="cursor-pointer" src={Backicon} alt="Back" /> */}
                        <img
                            src={Backicon}
                            alt="Navigate to home"
                            onClick={() => navigate('/')}
                            style={{ cursor: 'pointer' }}
                        />
                        <p className="font-semibold text-[20px] text-[#252525]">Bank</p>
                    </div>
                    <div className="flex justify-between items-center ">
                        <button
                            onClick={() => setActive("Accounts")}
                            className={`w-1/2 font-medium text-[12px] text-[#999999]  p-4 border-b ${active === "Accounts" ? "border-b border-[#42794A]" : "border-gray-300"
                                }`}
                        >
                            Accounts
                        </button>
                        <button
                            onClick={() => setActive("Cards")}
                            className={`w-1/2 font-medium text-[12px] text-[#999999] p-4 border-b ${active === "Cards" ? "border-b border-[#42794A]" : "border-gray-300"
                                }`}
                        >
                            Cards
                        </button>


                    </div>
                    {active === "Cards" ?

                        (
                            <>
                                <div>
                                    <p className="mx-4  mt-4 text-[12px] font-medium text-[#999999]" >My cards </p>

                                    <img className="w-full" src={Card} />
                                    <div className="min-h-[194px] border border-gray-300 rounded-[16px] mx-4 mb-2">
                                        <div className="m-4 flex justify-between items-center border-b border-gray-300 py-2">
                                            <div className="justify-between items-center ">

                                                <p className="text-[12px] text-[#999999] font-medium ">
                                                    Card number
                                                </p>
                                                <p className="text-[#252525] font-semibold text-[14px]">9876543210123453</p>
                                            </div>
                                            <img src={Copyiconmobile} />

                                        </div>
                                        <div className="m-4 flex justify-between items-center border-b border-gray-300 py-2">
                                            <div className="justify-between items-center ">

                                                <p className="text-[12px] text-[#999999] font-medium ">
                                                    Expiry
                                                </p>
                                                <p className="text-[#252525] font-semibold text-[14px]">09/30</p>
                                            </div>
                                            <img src={Copyiconmobile} />

                                        </div>
                                        <div className="m-4  flex justify-between items-center border-b border-gray-300 py-2">
                                            <div className="justify-between items-center ">

                                                <p className="text-[12px] text-[#999999] font-medium ">
                                                    Security code (CVV)
                                                </p>
                                                <p className="text-[#252525] font-semibold text-[14px]">***</p>
                                            </div>
                                            <img src={Eyeoff} />

                                        </div>




                                    </div>
                                    <div className=" mt-[64px] h-[58px] flex items-center rounded-[12px] shadow-md shadow-blue-100  ">

                                        <button className="h-[38px] w-full m-4 bg-[#42794A]  rounded-[30px]  flex justify-center items-center text-[12px] font-medium text-[#FFFFFF]">
                                            <img className="mr-[8px]" src={Cardaddnew} />
                                            Add new card
                                        </button>
                                    </div>
                                </div>



                            </>
                        )

                        :


                        (<>
                            <div>
                                <p className="mx-4  mt-4 text-[12px] font-medium text-[#999999]" >My Accounts </p>
                            </div>
                        </>)}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default MobileBank;