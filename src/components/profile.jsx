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
import Users from "../assets/users.png"
import Settings from "../assets/settings.png"
import Language from "../assets/language.png"



// mobile imports 


import Userlogo from "../assets/userlogo.png"
import Copymobileicon from "../assets/copyiconmobile.png"
import Upi from "../assets/UPI.png"
import Righticonmobile from "../assets/righticonmobile.png"
import Plusmobileicon from "../assets/plusmobileicon.png"
import Eyeoffblack from "../assets/eye-off.png"

import Sbi from "../assets/sbilogomobile.png"
import Manageicon from "../assets/managemobileicon.png"
import Rightarrowmobile from "../assets/rightarrowiconmobile.png"
import Bankofbaroda from "../assets/bobicon.png"
import Uparrowmobile from "../assets/uparrowmobile.png"
import Fingerprint from "../assets/fingerprint.png"
import Toggle from "../assets/toggle.png"
import SampleLlock from "../assets/samplelock.png"
import Permission from "../assets/permissions.png"
import LanguageMobile from "../assets/languages.png"
import Privacy from "../assets/privacy.png"
import Report from "../assets/report.png"
import Help from "../assets/help.png"
import About from "../assets/about.png"
import Logout from "../assets/Logout.png"
import Footer from "./MobileFooter";



const Profile = () => {


    return (
        <>
            <div className="hidden md:block min-h-screen bg-gray-50">
                <Navbar />
                <div className="flex flex-col md:flex-row">
                    <div className="w-[30%]">
                        <Sidebar />
                    </div>
                    <div className="mt-4 w-[70%] me-20 mb-10">
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
                                <p className="text-[#999999] font-semibold text-[14px]">BUSINESS SERVICES</p>
                                <div className="flex ">
                                    <div className="w-[96px] me-[14px] h-[120px]">

                                        <div className=' my-[16px] w-[80px] bg-gray-100 rounded-[16px] h-[80px] flex items-center justify-center '>
                                            <img className="h-[44px] w-[44px]" src={Speaker} alt="speaker" />

                                        </div>
                                        <div className="text-[14px] leading-tight text-center font-medium text-[#252525]">Smart <br></br>Speaker</div>
                                    </div>
                                    <div className="w-[96px] h-[120px]">

                                        <div className=' my-[16px] w-[80px] bg-gray-100 rounded-[16px] h-[80px] flex items-center justify-center '>
                                            <img className="h-[44px] w-[44px]" src={Pos} alt="speaker" />

                                        </div>
                                        <div className="text-[14px] font-medium text-[#252525] text-center leading-tight">Smart <br></br>Speaker</div>
                                    </div>
                                </div>

                            </div>
                            {/* <div className="w-[490px] h-[200px]  ps-[32px]">
                            <div className='my-[24px]  w-[96px] h-[120px] flex'>

                            </div>

                        </div> */}
                            <div className="w-[490px] h-[200px] ps-[32px] pt-[24px] border border-[#EEEEEE]">
                                <p className="text-[#999999] font-semibold text-[14px]">Manage Business</p>
                                <div className="flex ">
                                    <div className="w-[96px] me-[14px] h-[120px]">

                                        <div className=' my-[16px] w-[80px] bg-gray-100 rounded-[16px] h-[80px] flex items-center justify-center '>
                                            <img className="h-[44px] w-[44px]" src={Users} alt="Users" />

                                        </div>
                                        <div className="text-[14px] leading-tight text-center font-medium text-[#252525]">Payment  <br></br>Settings</div>
                                    </div>
                                    <div className="w-[96px] h-[120px]">

                                        <div className=' my-[16px] w-[80px] bg-gray-100 rounded-[16px] h-[80px] flex items-center justify-center '>
                                            <img className="h-[44px] w-[44px]" src={Settings} alt="Settings" />

                                        </div>
                                        <div className="text-[14px] font-medium text-[#252525] text-center leading-tight">Manage <br></br>Staff</div>
                                    </div>
                                    <div className="w-[96px] h-[120px]">

                                        <div className=' my-[16px] w-[80px] bg-gray-100 rounded-[16px] h-[80px] flex items-center justify-center '>
                                            <img className="h-[44px] w-[44px]" src={Language} alt="Language" />

                                        </div>
                                        <div className="text-[14px] font-medium text-[#252525] text-center leading-tight">Change <br></br>Language</div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>









            {/* mobile version */}

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
                <div className="min-h-[206px] border border-gray-300 m-[16px] rounded-[16px]">
                    <div className="p-[16px] ">

                        <p className="mx-1 font-medium text-[12px] text-[#999999]">Bank accounts</p>
                        <div className="flex overflow-x-scroll ">
                            <div className="min-w-[176px] min-h-[152px] rounded-[12px] shadow-md shadow-blue-200 me-[12px] ">
                                <div className="px-[16px] pt-[16px] py-[12px] flex  justify-between w-[100%]">
                                    <img src={Sbi} />
                                    <p className="text-[#252525] text-[8px] font-medium h-[16px] bg-[#EEEEEE] flex items-center justify-center rounded-[40px] py-1 px-2">Primary</p>


                                </div>
                                <div className="px-[16px] py-[8px]">
                                    <p className="font-semibold text-[14px] text-[#252525]">State Bank Of India</p>
                                    <p className="font-medium  text-[12px] text-[#999999]">xxxx 3941</p>

                                </div>
                                <button className=" flex h-[14px] w-[134px] rounded-[40px] h-auto flex justify-center m-auto border border-gray-300 p-2 ">
                                    <p className="text-[#42794A] text-[12px] font-medium">Check balance</p>
                                    <img src={Rightarrowmobile} />
                                </button>


                            </div>
                            <div className="min-w-[176px] min-h-[152px] rounded-[12px] shadow-md shadow-blue-200 me-[12px] ">
                                <div className="px-[16px] pt-[16px] py-[12px] flex  justify-between w-[100%]">
                                    <img src={Bankofbaroda} />
                                    <p className="text-[#252525] text-[8px] font-medium h-[16px] bg-[#EEEEEE] flex items-center justify-center rounded-[40px] py-1 px-2">Primary</p>


                                </div>
                                <div className="px-[16px] py-[8px]">
                                    <p className="font-semibold text-[14px] text-[#252525]">Bank of Baroda</p>
                                    <p className="font-medium  text-[12px] text-[#999999]">xxxx 2941</p>

                                </div>
                                <button className=" flex h-[14px] w-[134px] rounded-[40px] h-auto flex justify-center m-auto border border-gray-300 p-2 ">
                                    <p className="text-[#42794A] text-[12px] font-medium">Check balance</p>
                                    <img src={Rightarrowmobile} />
                                </button>


                            </div>

                        </div>
                    </div>

                </div>

                <div className="min-h-[190px] m-4 rounded-[16px] border border-gray-300 ">

                    <div className="flex justify-between items-center p-[16px]">
                        <p className="font-medium text-[12px] text-[#999999]">Security & Protection</p>
                        <img src={Uparrowmobile} />
                    </div>

                    <div className="mx-[16px] my-[8px] px-2 h-[58px] flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={Fingerprint} alt='fingerprint' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]">Screen lock</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Biometric & Screen Locks</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Toggle} alt='toggle' />
                    </div>
                    <div className="mx-[16px] my-[8px] px-2 h-[58px] flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={SampleLlock} alt='fingerprint' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]">Change Password</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Reset Your app password</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='toggle' />
                    </div>

                </div>
                <div className="min-h-[190px] m-4 rounded-[16px] border border-gray-300 ">

                    <div className="flex justify-between items-center p-[16px]">
                        <p className="font-medium text-[12px] text-[#999999]">Settings & Preferences</p>
                        <img src={Uparrowmobile} />
                    </div>

                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={LanguageMobile} alt='Language' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]">Languages</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Choose language: English</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='toggle' />
                    </div>
                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={Permission} alt='Permission' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]"> Permissions</p>
                            <p className=" text-[#999999] text-[12px] font-medium "> Manage data sharing settings</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='righticon' />
                    </div>

                </div>
                <div className="min-h-[330px] m-4 rounded-[16px] border border-gray-300 ">

                    <div className="flex justify-between items-center p-[16px]">
                        <p className="font-medium text-[12px] text-[#999999]">Help & Support</p>
                        <img src={Uparrowmobile} />
                    </div>

                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={Help} alt='Help' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]">Help</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Biometric & Screen Locks</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='righticon' />
                    </div>
                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={Report} alt='Report' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]"> Report fraud</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Reset your app password</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='toggle' />
                    </div>
                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={Privacy} alt='Privacy' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]">  Privacy policy</p>
                            <p className=" text-[#999999] text-[12px] font-medium ">Reset your app password</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='toggle' />
                    </div>
                    <div className="mx-[16px] my-[8px] h-[58px] px-2 flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <img className="h-6 w-6" src={About} alt='About' />
                        <div className="flex flex-col ms-3 grow">
                            <p className="font-semibold text-[14px] text-[#252525]"> About us</p>
                            <p className=" text-[#999999] text-[12px] font-medium "> Reset your app password</p>

                        </div>
                        <img className="w-6 h-[14px]" src={Righticonmobile} alt='toggle' />
                    </div>

                </div>

                <div className="min-h-[80px] m-4 rounded-[16px]  border border-gray-300 ">


                    <div className="mx-[16px] my-[8px] h-[58px]  flex items-center rounded-[12px] shadow-md shadow-blue-100  ">
                        <button className="h-[48px] bg-[#E87474] rounded-[12px] w-full flex justify-center items-center text-[14px] font-semibold text-[#FFFFFF]">
                            <img className="mr-[8px]" src={Logout} />
                            Logout
                        </button>
                    </div>


                </div>
                <Footer />
            </div>
        </>
    )
}

export default Profile