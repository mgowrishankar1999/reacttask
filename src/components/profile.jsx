import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Billpayment from "../assets/profilebg.png";
import Bankicon from "../assets/bank.png";
import Profileicon from "../assets/profile.png";
import Verificationicon from "../assets/verification.png";
import Qricon from "../assets/qr.png";

import Iconright from "../assets/icongreenright.png"
import Speaker from "../assets/speaker.png"
import Pos from "../assets/posmachine.png"



const Profile = () => {


    return (
        <>

            <Navbar />
            <div className="flex ">
                <Sidebar />
                <div className="mt-[64px] ms-10 me-20 mb-[80px]">
                    {/* 1st section */}
                    <div
                        className="h-[240px] w-full border-2 border-[#61CE70] rounded-[12px] flex items-center justify-between p-6 overflow-hidden relative"
                        style={{
                            background: 'linear-gradient(120deg, rgba(66, 121, 74, 1) 0%, rgba(97, 206, 112, 1) 60%, #ffffff 35%)',
                            color: '#ffffff',
                            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)',
                        }}
                    >
                        <div>
                            <h1 className="text-[40px] font-bold text-white tracking-normal leading-[48px]">Pay ₹1/month* for the QPay POS Device</h1>
                            <p className="text-lg mt-2 text-[16px] text-[#FFFFFF]">One device for accepting all modes of payments</p>
                            <button
                                className="mt-4 px-[20px] py-3 bg-white text-[#42794A] text-[14px] rounded-[8px] h-10 w-[180px] font-semibold hover:bg-gray-100"
                            >
                                Download App Now!
                            </button>
                        </div>
                        <div className="relative me-[76px]">
                            <img
                                src={Billpayment}
                                alt="QPay POS Device Illustration"
                                className="h-[180px] w-auto z-10"
                            />
                        </div>
                    </div>

                    <div className="mt-[4px] flex justify-between ">
                        <div className="w-[238px] rounded-[14px] h-[211px] mt-[40px] bg-[#EEF8F2]">
                            <div className="flex  justify-between mx-[24px] mt-[24px] mb-[14px]">
                                <img className="h-[64px] w-[64px]" src={Bankicon} alt='banckicon' />
                                <img className="h-[24px] w-[24px]" src={Iconright} alt="iconright" />

                            </div>
                            <div className="mx-[24px] mb-[24px]">
                                <p className="text-[24px] font-semibold text-[#42794A]">XXXX 9820</p>
                                <p className="text-[20px] font-medium text-[#999999]">
                                    ICICI Bank | Chennai Egmore Branch
                                </p>
                            </div>
                        </div>
                        <div className="w-[238px] rounded-[14px] h-[211px] mt-[40px] bg-[#EEF8F2]">
                            <div className="flex  justify-between mx-[24px] mt-[24px] mb-[14px]">
                                <img className="h-[64px] w-[64px]" src={Profileicon} alt='Profileicon' />
                                <img className="h-[24px] w-[24px]" src={Iconright} alt="iconright" />

                            </div>
                            <div className="mx-[24px] mb-[24px]">
                                <p className="text-[24px] font-semibold text-[#42794A]">Business Profile</p>
                                <p className="text-[20px] font-medium text-[#999999]">
                                    View and edit your business details
                                </p>
                            </div>
                        </div>
                        <div className="w-[238px] rounded-[14px] h-[211px] mt-[40px] bg-[#EEF8F2]">
                            <div className="flex  justify-between mx-[24px] mt-[24px] mb-[14px]">
                                <img className="h-[64px] w-[64px]" src={Verificationicon} alt='Verificationicon' />
                                <img className="h-[24px] w-[24px]" src={Iconright} alt="iconright" />

                            </div>
                            <div className="mx-[24px] mb-[24px]">
                                <p className="text-[24px] font-semibold text-[#42794A]">KYC Verification</p>
                                <p className="text-[20px] font-medium text-[#999999]">
                                    Unlock exclusive benefits with KYC
                                </p>
                            </div>
                        </div>
                        <div className="w-[238px] rounded-[14px] h-[211px] mt-[40px] bg-[#EEF8F2]">
                            <div className="flex  justify-between mx-[24px] mt-[24px] mb-[14px]">
                                <img className="h-[64px] w-[64px]" src={Qricon} alt='Qricon' />
                                <img className="h-[24px] w-[24px]" src={Iconright} alt="iconright" />

                            </div>
                            <div className="mx-[24px] mb-[24px]">
                                <p className="text-[24px] font-semibold text-[#42794A]">Order QR</p>
                                <p className="text-[20px] font-medium text-[#999999]">
                                    Get paid, manage & order QRs
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-between mt-[40px] ">

                        <div className="w-[490px] h-[200px] ps-[32px] pt-[24px] border border-[#EEEEEE]">
                            <p className="text-[#999999] font-semibold text-[14px]">Business Services</p>
                            <div className="flex ">
                                <div className="w-[96px] me-[14px] h-[120px]">

                                    <div className=' my-[16px] w-[80px] bg-gray-200 h-[80px] flex items-center justify-center '>
                                        <img className="h-[44px] w-[44px]" src={Speaker} alt="speaker" />

                                    </div>
                                    <div className="text-[14px] leading-tight text-center font-medium text-[#252525]">Smart <br></br>Speaker</div>
                                </div>
                                <div className="w-[96px] h-[120px]">

                                    <div className=' my-[16px] w-[80px] bg-gray-200 h-[80px] flex items-center justify-center '>
                                        <img className="h-[44px] w-[44px]" src={Pos} alt="speaker" />

                                    </div>
                                    <div className="text-[14px] font-medium text-[#252525] text-center leading-tight">Smart <br></br>Speaker</div>
                                </div>
                            </div>

                        </div>
                        <div className="w-[490px] h-[200px]  ps-[32px]">
                            <div className='my-[24px]  w-[96px] h-[120px] flex'>

                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile