import React from "react";
import Backicon from "../assets/backiconmobile.png"
import { useState } from "react";

const MobileBank = () => {

    const [active, setActive] = useState('Cards')



    return (
        <>
            <div className="h-[22px]"></div>
            <div className="h-[72px] w-full">
                <div className="w-1/2 flex justify-between items-between m-4">
                    <img className="cursor-pointer" src={Backicon} alt="" />
                    <p className="font-semibold text-[20px] text-[#252525]">Bank</p>

                </div>
                <div className={`flex justify-between  items-between p-[16px] border-b border-gray-300 ${active === 'Accounts' ? 'border-b border-green-500':'border-b border-gray-300'}`}>
                    <button
                        onClick={() => setActive('Accounts')}

                        className={`text-[#999999] w-1/2 font-medium teaxt-[12px] `}>
                        Accounts
                    </button>
                    <button
                        onClick={() => setActive('Cards')}
                        className="text-[#999999] w-1/2 font-medium teaxt-[12px]">
                        Cards

                    </button>

                </div>


            </div>

        </>
    )
}

export default MobileBank