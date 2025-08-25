






// import React from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Hamburger from "../assets/hamburgericon.png";
// import Searchicon from "../assets/searchicon.png";
// import Settlementicon from "../assets/settlementicon.png";
// import Historyicon from "../assets/history.png";
// import Qpay from "../assets/qpay.png";
// import Phonepay from "../assets/phonepay.png";
// import Gpay from "../assets/gpay.png";
// import Paytm from "../assets/paytm.png";

// const History = () => {
//     return (
//         <>
//             <div className="min-h-screen bg-gray-50">
//                 <Navbar />
//                 <div className="flex flex-col md:flex-row">
//                     <div className="w-[30%]">
//                         <Sidebar />
//                     </div>
//                     <div className="mt-4 w-[70%] me-20 mb-10">
//                         <div className="flex justify-between items-center">
//                             <p className="font-bold text-[32px] text-[#252525] mb-[16px]">
//                                 Settlement History
//                             </p>
//                             <button className="w-[242px] h-[48px] border border-[#42794A] rounded-[8px] text-[#42794A] font-medium text-[20px]">
//                                 Download statement
//                             </button>
//                         </div>
//                         <div className="flex  justify-between mt-[16px]">

//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
//                             />
//                             <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} />
//                         </div>
//                         <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex  items-center">
//                             <img src={Historyicon} alt="History Icon" />
//                             <p className="grow ps-[12px] text-[#999999] font-medium text-[16px] ">Today’s total collection will be auto-settled by<span className="font-bold text-[16px] text-[#42794A]"> 08:00AM, 23rd Oct’22 </span> Tomorrow.</p>
//                             <button className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]">
//                                 <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
//                                 <span>Settle Now!</span>
//                             </button>
//                         </div>
//                         {/* table section  */}
//                         <div className="mt-[16px]">

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default History;




import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Hamburger from "../assets/hamburgericon.png";
import Searchicon from "../assets/searchicon.png";
import Settlementicon from "../assets/settlementicon.png";
import Historyicon from "../assets/history.png";
import Qpay from "../assets/qpay.png";
import Phonepay from "../assets/phonepe.png";
import Gpay from "../assets/gpay.png";
import Paytm from "../assets/paytm.png";

const History = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="flex flex-col md:flex-row">
                    <div className="w-[30%]">
                        <Sidebar />
                    </div>
                    <div className="mt-4 w-[70%] me-20 mb-10">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-[32px] text-[#252525] mb-[16px]">
                                Settlement History
                            </p>
                            <button className="w-[242px] h-[48px] border border-[#42794A] rounded-[8px] text-[#42794A] font-medium text-[20px]">
                                Download statement
                            </button>
                        </div>
                        <div className="flex justify-between mt-[16px]">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
                            />
                            <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} />
                        </div>
                        <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex items-center">
                            <img src={Historyicon} alt="History Icon" />
                            <p className="grow ps-[12px] text-[#999999] font-medium text-[16px]">
                                Today’s total collection will be auto-settled by
                                <span className="font-bold text-[16px] text-[#42794A]">
                                    {" "}
                                    08:00AM, 23rd Oct’22{" "}
                                </span>
                                Tomorrow.
                            </p>
                            <button className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]">
                                <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
                                <span>Settle Now!</span>
                            </button>
                        </div>
                        {/* table section */}
                        <div className="mt-[16px] border border-[#EEEEEE] rounded-[16px]">
                            <table className="w-full rounded-[16px] ">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Name</th>
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Date & Time</th>
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Account</th>
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Amount</th>
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Status</th>
                                        <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
                                        <td className="p-4 flex items-center space-x-2">
                                            <span className="text-[20px] font-medium text-[#999999]">From</span>
                                            <img src={Qpay} alt="Qpay" className="w-6 h-6" />
                                        </td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,06,023</td>
                                        <td className="p-4">
                                            <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#EDB823] text-[#EDB823] rounded-[4px]">
                                                Pending
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
                                        <td className="p-4 flex items-center space-x-2">
                                            <span className="text-[20px] font-medium text-[#999999]">From</span>
                                            <img src={Phonepay} alt="Phonepay" className="w-6 h-6" />
                                        </td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
                                        <td className="p-4">
                                            <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
                                                Failed
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
                                        <td className="p-4 flex items-center space-x-2">
                                            <span className="text-[20px] font-medium text-[#999999]">From</span>
                                            <img src={Gpay} alt="Gpay" className="w-6 h-6" />
                                        </td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
                                        <td className="p-4">
                                            <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#61CE70] text-[#61CE70] rounded-[4px]">
                                                Success
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
                                        <td className="p-4 flex items-center space-x-2">
                                            <span className="text-[20px] font-medium text-[#999999]">From</span>
                                            <img src={Paytm} alt="Paytm" className="w-6 h-6" />
                                        </td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,06,023</td>
                                        <td className="p-4">
                                            <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
                                                Failed
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
                                        <td className="p-4 flex items-center space-x-2">
                                            <span className="text-[20px] font-medium text-[#999999]">From</span>
                                            <img src={Phonepay} alt="Phonepay" className="w-6 h-6" />
                                        </td>
                                        <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
                                        <td className="p-4">
                                            <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
                                                Failed
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
                                                View
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;