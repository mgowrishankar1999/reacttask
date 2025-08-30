import React from "react";
import Mobilehomewhite from "../assets/mobilehomewhite.png"
import Mobilebank from "../assets/mobilebank.png"
import Mobilehistory from "../assets/mobilehistory.png"
import Mobileprofile from "../assets/mobileprofile.png"


const Footer = () => {


    return (
        <>
            <div className=" h-[80px] bg-[#42794A]">
                <div className='flex justify-around items-center  h-full w-full '>
                    <div className='flex flex-col items-center justify-center '>
                        <img className='h-[24px] w-[24px]' src={Mobilehomewhite} alt="Mobilehomewhite" />
                        <p className='text-[#FFFFFF] text-[12px] font-medium pt-1'>Home</p>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <img className='h-[24px] w-[24px]' src={Mobilebank} alt="Mobilebank" />
                        <p className='text-[#94CA9C] text-[12px] font-medium pt-1 '>Bank</p>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <img className='h-[24px] w-[24px]' src={Mobilehistory} alt="Mobilehistory" />
                        <p className='text-[#94CA9C] text-[12px] font-medium pt-1'>History</p>
                    </div>
                    <div className='flex flex-col items-center justify-center '>
                        <img className='h-[24px] w-[24px]' src={Mobileprofile} alt="Mobileprofile" />
                        <p className='text-[#94CA9C] text-[12px] font-medium pt-1'>Profile</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer