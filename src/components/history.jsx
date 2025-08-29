






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




// import React from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Hamburger from "../assets/hamburgericon.png";
// import Searchicon from "../assets/searchicon.png";
// import Settlementicon from "../assets/settlementicon.png";
// import Historyicon from "../assets/history.png";
// import Qpay from "../assets/qpay.png";
// import Phonepay from "../assets/phonepe.png";
// import Gpay from "../assets/gpay.png";
// import Paytm from "../assets/paytm.png";
// import axios from "axios";

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
//                         <div className="flex justify-between mt-[16px]">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
//                             />
//                             <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} />
//                         </div>
//                         <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex items-center">
//                             <img src={Historyicon} alt="History Icon" />
//                             <p className="grow ps-[12px] text-[#999999] font-medium text-[16px]">
//                                 Today’s total collection will be auto-settled by
//                                 <span className="font-bold text-[16px] text-[#42794A]">
//                                     {" "}
//                                     08:00AM, 23rd Oct’22{" "}
//                                 </span>
//                                 Tomorrow.
//                             </p>
//                             <button className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]">
//                                 <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
//                                 <span>Settle Now!</span>
//                             </button>
//                         </div>
//                         {/* table section */}
//                         <div className="mt-[16px] border border-[#EEEEEE] rounded-[16px]">
//                             <table className="w-full rounded-[16px] ">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Name</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Date & Time</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Account</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Amount</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Status</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr className="border-b">
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
//                                         <td className="p-4 flex items-center space-x-2">
//                                             <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                             <img src={Qpay} alt="Qpay" className="w-6 h-6" />
//                                         </td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,06,023</td>
//                                         <td className="p-4">
//                                             <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#EDB823] text-[#EDB823] rounded-[4px]">
//                                                 Pending
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
//                                                 View
//                                             </a>
//                                         </td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
//                                         <td className="p-4 flex items-center space-x-2">
//                                             <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                             <img src={Phonepay} alt="Phonepay" className="w-6 h-6" />
//                                         </td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
//                                         <td className="p-4">
//                                             <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
//                                                 Failed
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
//                                                 View
//                                             </a>
//                                         </td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
//                                         <td className="p-4 flex items-center space-x-2">
//                                             <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                             <img src={Gpay} alt="Gpay" className="w-6 h-6" />
//                                         </td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
//                                         <td className="p-4">
//                                             <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#61CE70] text-[#61CE70] rounded-[4px]">
//                                                 Success
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
//                                                 View
//                                             </a>
//                                         </td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
//                                         <td className="p-4 flex items-center space-x-2">
//                                             <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                             <img src={Paytm} alt="Paytm" className="w-6 h-6" />
//                                         </td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,06,023</td>
//                                         <td className="p-4">
//                                             <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
//                                                 Failed
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
//                                                 View
//                                             </a>
//                                         </td>
//                                     </tr>
//                                     <tr className="border-b">
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">Lisa</td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">03 Sep, 2021</td>
//                                         <td className="p-4 flex items-center space-x-2">
//                                             <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                             <img src={Phonepay} alt="Phonepay" className="w-6 h-6" />
//                                         </td>
//                                         <td className="p-4 font-semibold text-[20px] text-[#252525]">₹1,023</td>
//                                         <td className="p-4">
//                                             <span className="w-24 text-center inline-block px-2 py-1 text-[20px] border border-[#E87474] text-[#E87474] rounded-[4px]">
//                                                 Failed
//                                             </span>
//                                         </td>
//                                         <td className="p-4">
//                                             <a href="#" className="text-[#42794A] text-[20px] font-semibold underline">
//                                                 View
//                                             </a>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default History;



// import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Hamburger from "../assets/hamburgericon.png";
// import Searchicon from "../assets/searchicon.png";
// import Settlementicon from "../assets/settlementicon.png";
// import Historyicon from "../assets/history.png";
// import axios from "axios";
// import Popup from "./popup";

// const History = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const response = await fetch(
//                     "https://dev.expressfintech.in/transaction_history/?service_id=111",
//                     {
//                         method: "GET",
//                         headers: {
//                             Authorization:
//                                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );
//                 if (response.data.status || response.data.code === 200) {
//                     setTransactions(response.data.data);
//                 } else {
//                     setError("Failed to fetch transaction history.");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching transaction history.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTransactions();
//     }, []);

//     const filteredTransactions = transactions.filter((transaction) =>
//         transaction.transaction_id.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     console.log(transactions)

//     const modelHandler = () => {
//         setIsModalOpen(true)
//     }

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
//                         <div className="flex justify-between mt-[16px]">
//                             <input
//                                 type="text"
//                                 placeholder="Search by Transaction ID..."
//                                 className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} alt="Hamburger Icon" />
//                         </div>
//                         <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex items-center">
//                             <img src={Historyicon} alt="History Icon" />
//                             <p className="grow ps-[12px] text-[#999999] font-medium text-[16px]">
//                                 Today’s total collection will be auto-settled by
//                                 <span className="font-bold text-[16px] text-[#42794A]">
//                                     {" "}08:00AM, 23rd Oct’22{" "}
//                                 </span>
//                                 Tomorrow.
//                             </p>
//                             <button className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]"
//                                 onClick={modelHandler}
//                             >
//                                 <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
//                                 <span>Settle Now!</span>
//                             </button>
//                         </div>
//                         {/* table section */}
//                         <div className="mt-[16px] border border-[#EEEEEE] rounded-[16px]">
//                             <table className="w-full rounded-[16px]">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Name</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Date & Time</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Account</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Amount</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Status</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {loading ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
//                                                 Loading...
//                                             </td>
//                                         </tr>
//                                     ) : error ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#E87474]">
//                                                 {error}
//                                             </td>
//                                         </tr>
//                                     ) : filteredTransactions.length === 0 ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
//                                                 No transactions found.
//                                             </td>
//                                         </tr>
//                                     ) : (
//                                         filteredTransactions.map((transaction) => (
//                                             <tr key={transaction.transaction_id} className="border-b">
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     User {transaction.user_id}
//                                                 </td>
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     {new Date(transaction.created_date).toLocaleDateString("en-IN", {
//                                                         day: "2-digit",
//                                                         month: "short",
//                                                         year: "numeric",
//                                                     })}
//                                                 </td>
//                                                 <td className="p-4 flex items-center space-x-2">
//                                                     <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                                     <img
//                                                         src={transaction.wallet.image}
//                                                         alt={transaction.wallet.name}
//                                                         className="w-6 h-6"
//                                                     />
//                                                 </td>
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     ₹{parseFloat(transaction.amount).toLocaleString("en-IN")}
//                                                 </td>
//                                                 <td className="p-4">
//                                                     <span
//                                                         className={`w-24 text-center inline-block px-2 py-1 text-[20px] border rounded-[4px] ${transaction.status === "PENDING"
//                                                             ? "border-[#EDB823] text-[#EDB823]"
//                                                             : transaction.status === "SUCCESS"
//                                                                 ? "border-[#61CE70] text-[#61CE70]"
//                                                                 : "border-[#E87474] text-[#E87474]"
//                                                             }`}
//                                                     >
//                                                         {transaction.status.charAt(0) + transaction.status.slice(1).toLowerCase()}
//                                                     </span>
//                                                 </td>
//                                                 <td className="p-4">
//                                                     <a
//                                                         href={`/transaction/${transaction.transaction_id}`}
//                                                         className="text-[#42794A] text-[20px] font-semibold underline"
//                                                     >
//                                                         View
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Popup isOpen={isModalOpen} onClose={closeModal} />
//         </>
//     );
// };

// export default History;


// import React, { useEffect } from "react";

// const History = () => {
//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const response = await fetch(
//                     "https://dev.expressfintech.in/transaction_history/?service_id=111",
//                     {
//                         method: "GET",
//                         headers: {
//                             Authorization:
//                                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 // Check for application-level errors in the response body
//                 if (data.status === "error") {
//                     throw new Error(`Application error: ${data.message}`);
//                 }

//                 console.log("API Response:", data);
//             } catch (err) {
//                 console.error("Error fetching transaction history:", {
//                     message: err.message,
//                     status: err.status,
//                 });
//             }
//         };

//         fetchTransactions();
//     }, []);

//     return null;
// };

// export default History;



// import React, { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import Sidebar from "./sidebar";
// import Hamburger from "../assets/hamburgericon.png";
// import Settlementicon from "../assets/settlementicon.png";
// import Historyicon from "../assets/history.png";
// import Popup from "./popup";

// const History = () => {
//     const [transactions, setTransactions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     useEffect(() => {
//         const fetchTransactions = async () => {
//             try {
//                 const response = await fetch(
//                     "https://dev.expressfintech.in/transaction_history/?service_id=111",
//                     {
//                         method: "GET",
//                         headers: {
//                             Authorization:
//                                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
//                             "Content-Type": "application/json",
//                         },
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 const data = await response.json();

//                 if (data.status === "error") {
//                     throw new Error(`Application error: ${data.message}`);
//                 }

//                 setTransactions(data.data || []); // Set transactions from data.data
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching transaction history:", {
//                     message: err.message,
//                     status: err.status,
//                     name: err.name,
//                     cause: err.cause,
//                 });
//                 setError("An error occurred while fetching transaction history.");
//                 setLoading(false);
//             }
//         };

//         fetchTransactions();
//     }, []);

//     const filteredTransactions = transactions.filter((transaction) =>
//         transaction.transaction_id.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     console.log("Transactions:", transactions);

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
//                         <div className="flex justify-between mt-[16px]">
//                             <input
//                                 type="text"
//                                 placeholder="Search by Transaction ID..."
//                                 className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} alt="Hamburger Icon" />
//                         </div>
//                         <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex items-center">
//                             <img src={Historyicon} alt="History Icon" />
//                             <p className="grow ps-[12px] text-[#999999] font-medium text-[16px]">
//                                 Today’s total collection will be auto-settled by
//                                 <span className="font-bold text-[16px] text-[#42794A]">
//                                     {" "}08:00AM, 23rd Oct’22{" "}
//                                 </span>
//                                 Tomorrow.
//                             </p>
//                             <button
//                                 className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]"
//                                 onClick={openModal}
//                             >
//                                 <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
//                                 <span>Settle Now!</span>
//                             </button>
//                         </div>
//                         {/* Table section */}
//                         <div className="mt-[16px] border border-[#EEEEEE] rounded-[16px]">
//                             <table className="w-full rounded-[16px]">
//                                 <thead>
//                                     <tr className="bg-gray-100">
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Name</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Date & Time</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Account</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Amount</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Status</th>
//                                         <th className="p-4 text-left text-[14px] text-[#999999] font-semibold">Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {loading ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
//                                                 Loading...
//                                             </td>
//                                         </tr>
//                                     ) : error ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#E87474]">
//                                                 {error}
//                                             </td>
//                                         </tr>
//                                     ) : filteredTransactions.length === 0 ? (
//                                         <tr>
//                                             <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
//                                                 No transactions found.
//                                             </td>
//                                         </tr>
//                                     ) : (
//                                         filteredTransactions.map((transaction) => (
//                                             <tr key={transaction.transaction_id} className="">
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     User {transaction.user_id}
//                                                 </td>
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     {new Date(transaction.created_date).toLocaleDateString("en-IN", {
//                                                         day: "2-digit",
//                                                         month: "short",
//                                                         year: "numeric",
//                                                     })}
//                                                 </td>
//                                                 <td className="p-4 flex items-center space-x-2">
//                                                     <span className="text-[20px] font-medium text-[#999999]">From</span>
//                                                     <img
//                                                         src={transaction.wallet.image}
//                                                         alt={transaction.wallet.name}
//                                                         className="w-6 h-6"
//                                                     />
//                                                 </td>
//                                                 <td className="p-4 font-semibold text-[20px] text-[#252525]">
//                                                     ₹{parseFloat(transaction.amount).toLocaleString("en-IN")}
//                                                 </td>
//                                                 <td className="p-4">
//                                                     <span
//                                                         className={`w-24 text-center inline-block px-2 py-1 text-[20px] border rounded-[4px] ${transaction.status === "PENDING"
//                                                                 ? "border-[#EDB823] text-[#EDB823]"
//                                                                 : transaction.status === "SUCCESS"
//                                                                     ? "border-[#61CE70] text-[#61CE70]"
//                                                                     : "border-[#E87474] text-[#E87474]"
//                                                             }`}
//                                                     >
//                                                         {transaction.status.charAt(0) + transaction.status.slice(1).toLowerCase()}
//                                                     </span>
//                                                 </td>
//                                                 <td className="p-4">
//                                                     <a
//                                                         href={`/transaction/${transaction.transaction_id}`}
//                                                         className="text-[#42794A] text-[20px] font-semibold underline"
//                                                     >
//                                                         View
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* pagination here have to come */}
//                     </div>
//                 </div>
//             </div>
//             <Popup isOpen={isModalOpen} onClose={closeModal} />
//         </>
//     );
// };

// export default History;



import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Hamburger from "../assets/hamburgericon.png";
import Settlementicon from "../assets/settlementicon.png";
import Historyicon from "../assets/history.png";
import Popup from "./popup";

const History = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); // Track current page
    const [totalPages, setTotalPages] = useState(0); // Track total pages from API

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(
                    `https://dev.expressfintech.in/transaction_history/?service_id=111&page=${currentPage}`,
                    {
                        method: "GET",
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk",
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (data.status === "error") {
                    throw new Error(`Application error: ${data.message}`);
                }

                setTransactions(data.data || []);
                setTotalPages(data.totalPages || 0); // Update totalPages from API response
                setLoading(false);
            } catch (err) {
                console.error("Error fetching transaction history:", {
                    message: err.message,
                    status: err.status,
                    name: err.name,
                    cause: err.cause,
                });
                setError("An error occurred while fetching transaction history.");
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [currentPage]); // Re-fetch when currentPage changes

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.transaction_id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("Transactions:", transactions);

    // Pagination handlers
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

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
                                placeholder="Search by Transaction ID..."
                                className="border text-[20px] border-[#ccc] rounded-[8px] h-[48px] py-[12px] ps-[12px] w-full mb-[16px]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <img className="h-[48px] w-[48px] ms-[16px]" src={Hamburger} alt="Hamburger Icon" />
                        </div>
                        <div className="md:h-[104px] bg-[#EEF8F2] py-[28px] ps-[24px] border border-[#42794A] rounded-[16px] flex items-center">
                            <img src={Historyicon} alt="History Icon" />
                            <p className="grow ps-[12px] text-[#999999] font-medium text-[16px]">
                                Today’s total collection will be auto-settled by
                                <span className="font-bold text-[16px] text-[#42794A]">
                                    {" "}08:00AM, 23rd Oct’22{" "}
                                </span>
                                Tomorrow.
                            </p>
                            <button
                                className="flex items-center justify-center w-[221px] h-[56px] me-[24px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px]"
                                onClick={openModal}
                            >
                                <img src={Settlementicon} alt="Settlement Icon" className="mr-2" />
                                <span>Settle Now!</span>
                            </button>
                        </div>
                        {/* Table section */}
                        <div className="mt-[16px] border border-[#EEEEEE] rounded-[16px]">
                            <table className="w-full rounded-[16px]">
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
                                    {loading ? (
                                        <tr>
                                            <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
                                                Loading...
                                            </td>
                                        </tr>
                                    ) : error ? (
                                        <tr>
                                            <td colSpan="6" className="p-4 text-center text-[20px] text-[#E87474]">
                                                {error}
                                            </td>
                                        </tr>
                                    ) : filteredTransactions.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="p-4 text-center text-[20px] text-[#252525]">
                                                No transactions found.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredTransactions.map((transaction) => (
                                            <tr key={transaction.transaction_id} className="">
                                                <td className="p-4 font-semibold text-[20px] text-[#252525]">
                                                    User {transaction.user_id}
                                                </td>
                                                <td className="p-4 font-semibold text-[20px] text-[#252525]">
                                                    {new Date(transaction.created_date).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </td>
                                                <td className="p-4 flex items-center space-x-2">
                                                    <span className="text-[20px] font-medium text-[#999999]">From</span>
                                                    <img
                                                        src={transaction.wallet.image}
                                                        alt={transaction.wallet.name}
                                                        className="w-6 h-6"
                                                    />
                                                </td>
                                                <td className="p-4 font-semibold text-[20px] text-[#252525]">
                                                    ₹{parseFloat(transaction.amount).toLocaleString("en-IN")}
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`w-24 text-center inline-block px-2 py-1 text-[20px] border rounded-[4px] ${transaction.status === "PENDING"
                                                                ? "border-[#EDB823] text-[#EDB823]"
                                                                : transaction.status === "SUCCESS"
                                                                    ? "border-[#61CE70] text-[#61CE70]"
                                                                    : "border-[#E87474] text-[#E87474]"
                                                            }`}
                                                    >
                                                        {transaction.status.charAt(0) + transaction.status.slice(1).toLowerCase()}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <a
                                                        href={`/transaction/${transaction.transaction_id}`}
                                                        className="text-[#42794A] text-[20px] font-semibold underline"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-[16px]">
                            <button
                                className="flex items-center justify-center w-[120px] h-[48px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px] disabled:opacity-50"
                                onClick={handlePrevious}
                                disabled={currentPage === 0}
                            >
                                Previous
                            </button>
                            <span className="text-[20px] font-medium text-[#252525]">
                                Page {currentPage + 1} of {totalPages}
                            </span>
                            <button
                                className="flex items-center justify-center w-[120px] h-[48px] rounded-[8px] bg-[#42794A] text-white font-medium text-[20px] disabled:opacity-50"
                                onClick={handleNext}
                                disabled={currentPage >= totalPages - 1}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Popup isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default History;