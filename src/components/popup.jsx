// import React from "react";
// import Close from "../assets/close.png"
// import Bankblack from "../assets/bankblack.png"
// import Bankgreen from "../assets/bankgreen.png"

// const Popup = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <>

//             <div className=" m-10">
//                 <div className=" flex justify-between">
//                     <p className="font-bold text-[32px] text-[#252525]">Manage QR/POS</p>
//                     <img className="h-[32px] w-[32px]" src={Close} />


//                 </div>
//                 <div className="my-[32px] flex justify-between">
//                     <div className="flex ">

//                         <img src={Bankblack} />
//                         <div className="ml-[8px] whitespace-nowrap text-[#252525] text-[24px] font-semibold">Today's Total Collection</div>

//                     </div>
//                     <p className="text-[32px] text-[#252525] font-semibold">₹1,023</p>


//                 </div>
//                 <div className="my-[32px] flex justify-between">
//                     <div className="flex ">

//                         <img src={Bankgreen} />
//                         <p className="ml-[8px] text-[#61CE70] text-[24px] font-semibold">Already Settled</p>

//                     </div>
//                     <p className="text-[24px] text-[#252525] font-semibold">₹100</p>
//                 </div>

//                 <p className="border-b border-[#EEEEEE]"></p>
//                 <div className="my-[32px]">
//                     <p className="text-[14px] font-medium text-[#999999]" >SETTLEMENT CALCULATION</p>
//                     <div className="mt-[24px] flex justify-between  ">
//                         <p className="font-medium text-[20px] text-[#999999]">Amount yet to be settled</p>
//                         <p className="text-[#252525] font-semibold text-[20px]">IBRAHIM MOHAMMEDALI</p>

//                     </div>
//                     <div className="mt-[24px] flex justify-between  ">
//                         <p className="font-medium text-[20px] text-[#999999]">Past pending amount</p>
//                         <p className="text-[#252525] font-semibold text-[20px]">092141241127</p>

//                     </div>
//                     <div className="mt-[24px] flex justify-between  ">
//                         <p className="font-medium text-[20px] text-[#999999]">Charges</p>
//                         <p className="text-[#252525] font-semibold text-[20px]">07, Aug 2024</p>

//                     </div>

//                 </div>

//                 <p className="border-b border-[#EEEEEE]"></p>
//                 <div className="my-[32px] flex justify-between">
//                     <div className="flex ">

//                         <img src={Bankblack} className="w-[36px] h-[36px]" />
//                         <div className="ml-[8px] whitespace-nowrap text-[#252525] text-[20px] font-medium">Today's Total Collection</div>

//                     </div>
//                     <p className="text-[32px] text-[#252525] font-semibold">₹1,023</p>


//                 </div>

//                 <div className="h-[136px] bg-[#EAF5EE] flex justify-between items-center radius-[16px] ">
//                     <div className="p-[24px]  flex items-between  flex-col" >
//                         <p className="font-medium text-[20px] text-[#252525]">Tap ‘Settle Now’ to instantly get settlements in your<br></br>
//                             bank account.</p>

//                         <p className="text-[#61CE70] text-[20px] font-semibold">Settle Now is Chargeable</p>

//                     </div>

//                     <button className=" flex items-center  justify-center rounded-[12px] py-[16px] text-[20px] me-[24px] bg-[#42794A] w-[260px] h-[56px] text-white text-center ">
//                         Settle Now
//                     </button>

//                 </div>


//             </div>
//         </>
//     )
// }


// export default Popup

import React from "react";
import Close from "../assets/close.png";
import Bankblack from "../assets/bankblack.png";
import Bankgreen from "../assets/bankgreen.png";

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg px-6 max-h-[100vh]   w-[75vw]">
                <div className="flex justify-between items-center mb-8">
                    <p className="font-bold text-[32px] text-[#252525]">Manage QR/POS</p>
                    <img
                        className="h-[32px] w-[32px] cursor-pointer"
                        src={Close}
                        onClick={onClose}
                        alt="Close"
                    />
                </div>
                <div className="mb-8 flex justify-between">
                    <div className="flex items-center">
                        <img src={Bankblack} alt="Bank Black" />
                        <div className="ml-2 whitespace-nowrap text-[#252525] text-[24px] font-semibold">
                            Today's Total Collection
                        </div>
                    </div>
                    <p className="text-[32px] text-[#252525] font-semibold">₹1,023</p>
                </div>
                <div className="mb-8 flex justify-between">
                    <div className="flex items-center">
                        <img src={Bankgreen} alt="Bank Green" />
                        <p className="ml-2 text-[#61CE70] text-[24px] font-semibold">Already Settled</p>
                    </div>
                    <p className="text-[24px] text-[#252525] font-semibold">₹100</p>
                </div>
                <hr className="border-b border-[#EEEEEE] my-6" />
                <div className="mb-6">
                    <p className="text-[14px] font-medium text-[#999999]">SETTLEMENT CALCULATION</p>
                    <div className="mt-4 flex justify-between">
                        <p className="font-medium text-[20px] text-[#999999]">Amount yet to be settled</p>
                        <p className="text-[#252525] font-semibold text-[20px]">IBRAHIM MOHAMMEDALI</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <p className="font-medium text-[20px] text-[#999999]">Past pending amount</p>
                        <p className="text-[#252525] font-semibold text-[20px]">092141241127</p>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <p className="font-medium text-[20px] text-[#999999]">Charges</p>
                        <p className="text-[#252525] font-semibold text-[20px]">07, Aug 2024</p>
                    </div>
                </div>
                <hr className="border-b border-[#EEEEEE] my-8" />
                <div className="mb-8 flex justify-between">
                    <div className="flex items-center">
                        <img src={Bankblack} className="w-[36px] h-[36px]" alt="Bank Black" />
                        <div className="ml-2 whitespace-nowrap text-[#252525] text-[20px] font-medium">
                            Today's Total Collection
                        </div>
                    </div>
                    <p className="text-[32px] text-[#252525] font-semibold">₹1,023</p>
                </div>
                <div className="h-[136px] bg-[#EAF5EE] flex justify-between items-center rounded-[16px]">
                    <div className="p-6 flex flex-col justify-between">
                        <p className="font-medium text-[20px] text-[#252525]">
                            Tap ‘Settle Now’ to instantly get settlements in your<br />
                            bank account.
                        </p>
                        <p className="text-[#61CE70] text-[20px] font-semibold">Settle Now is Chargeable</p>
                    </div>
                    <button className="flex items-center justify-center rounded-[12px] py-4 me-6 bg-[#42794A] w-[260px] h-[56px] text-white text-center text-[20px]">
                        Settle Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;