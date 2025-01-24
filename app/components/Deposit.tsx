'use client'
import Link from "next/link"
import React, { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import {Raleway  } from "next/font/google";
const krona = Raleway({
    weight: "600",
    subsets: ["latin"],
});
const Deposit = () => {
    const [selectedWallet, setSelectedWallet] = useState("")
    const [selectedToken, setSelectedToken] = useState("")
    
    const [showWalletDropdown, setShowWalletDropdown] = useState(false)
    const [showTokenDropdown, setShowTokenDropdown] = useState(false)
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)

    const wallet = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
    ]

    const token = [
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
    ]

    const handleConfirmClick = () => {
        setIsConfirmationModalOpen(true)
    }

    return (
        <div className={`flex items-center justify-center min-h-screen bg-[#e1e1e1] ${krona.className} `}>
    <div className={`flex  flex-col fixed justify-center min-h-fit  my-8 bg-white shadow md:w-[50%] mx-auto rounded-[40px] w-[90%] ${krona.className}`}>
            <Link href='/'>   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x mx-10 mt-8 "><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </Link>
            
            <div className="md:pb-[7%] md:pt-[0%] pb-[14%] pt-[8%]">
            <h2 className={`h-[53px] leading-[32.87px]  flex justify-center mx-auto text-[28px] font-[600] ${krona.className}`}>Top Up Money</h2>    
            <div className="flex justify-center gap-3 w-[29%] md:w-[26%] mx-auto flex-col items-start ">
                    <p className="font-[500] text-sm h-[14px] text-custom-gray ">Total Balance </p>
                    <h4 className="font-[500] text-lg flex items-center  gap-9">$11,485.30 <span className="rounded font-[500] text-sm leading-[13.23px] text-btntext bg-custom-green px-2 py-1">+5.3%</span> </h4>
                </div>

                <div className="flex justify-center gap-8 mt-8 md:w-[90%]  mx-auto flex-col items-start ">

                    <div onClick={() => setIsModalOpen(true)} className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wallet text-primary"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-[500] text-lg">Top Up via other Wallets</h3>
                            <p className="font-400 text-sm text-custom-gray">You can Top Up your Transverse account by transferring from other Wallets.</p>
                        </div>
                    </div>


                    <div onClick={() => setIsModalOpen(true)} className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-landmark text-primary"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-[500] text-lg">Top Up via Bank Account </h3>
                            <p className="font-400 text-sm text-custom-gray">Use bank transfer to Top Up your Transverse Wallet now.</p>
                        </div>
                    </div>

                    <div onClick={() => setIsModalOpen(true)} className="flex justify-start gap-5 w-[90%] mx-auto items-center border border-gray-300 rounded-lg px-4 py-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-qr-code text-primary"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-[500] text-lg">Top Up via QR code </h3>
                            <p className="font-400 text-sm text-custom-gray">Scan a bar QR code to Top Up your Transverse Wallet adccount immediately. </p>
                        </div>
                    </div>


                </div>


            </div>

            {/* Modal for Top Up Details */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
                    <div className="flex flex-col py-[6%] md:py-0 md:pb-[2%] md:pt-[0%] pb-[5%] pt-[2%] justify-center bg-white shadow md:w-[50%] mx-auto rounded-[40px] w-[90%] md:my-8 ">
                  <div className="block   ">
                  <button 
                            onClick={() => setIsConfirmationModalOpen(false)} 
                            className=" text-gray-900 hover:text-gray-800 text-[30px]"
                        >
                              <svg
                             onClick={() => setIsModalOpen(false)} 
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-left mx-10 mt-8"
                            >
                                <path d="m12 19-7-7 7-7" />
                                <path d="M19 12H5" />
                            </svg>
                        
                        </button> 

                        <div className="">
                        <h2 className={`h-[43px] leading-[32.87px]  flex justify-center mx-auto text-[28px] font-[600] ${krona.className}`}>Top Up Money</h2>    
            <div className="flex justify-center gap-3 w-[29%] md:w-[26%] mx-auto flex-col items-start ">
                    <p className="font-[500] text-sm h-[14px] text-custom-gray ">Total Balance </p>
                    <h4 className="font-[500] text-lg flex items-center  gap-9">$11,485.30 <span className="rounded font-[500] text-sm leading-[13.23px] px-2 py-1 text-btntext bg-custom-green">+5.3%</span> </h4>
                </div>
                </div>
                  </div>
                       
                       
                            <div className="flex justify-center gap-2 mt-8 md:w-[90%] mx-auto flex-col items-start ">
                                <div className="flex flex-col gap-2 w-[90%] mx-auto">
                                    <label className="text-lg font-bold ">Select Wallet you want to Top Up from</label>
                                    <div
                                        className="relative w-[100%] mx-auto border border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                        onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                                    >
                                        <div className={`flex-1 font-medium ${selectedWallet ? "text-black" : "text-custom-gray "}`}>
                                            {selectedWallet ? (
                                                <span className="text-black">
                                                    {wallet.find((option) => option.value === selectedWallet)?.label}
                                                </span>
                                            ) : (
                                                <span className="text-custom-gray font-[500] text-sm">You can only select one wallet at a time</span>
                                            )}
                                        </div>
                                        <div className="text-gray-400">
                                            {showWalletDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </div>

                                        {showWalletDropdown && (
                                            <ul className="absolute top-full left-0 w-[100%] mx-auto bg-white border border-[#E5E5E5] mt-1 rounded-[10px] z-10">
                                                {wallet.map((option, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedWallet(option.value);
                                                            setShowWalletDropdown(false);
                                                        }}
                                                    >
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* Token Dropdown */}
                                <div className="flex flex-col gap-2 w-[90%] mx-auto">
                                    <label className="text-lg font-bold">Select Token</label>
                                    <div
                                        className="relative w-[100%] mx-auto border border-gray-300 rounded-lg p-3 flex items-center justify-between cursor-pointer"
                                        onClick={() => setShowTokenDropdown(!showTokenDropdown)}
                                    >
                                        <div className={`flex-1 font-medium ${selectedToken ? "text-black" : "text-custom-gray "}`}>
                                            {selectedToken ? (
                                                <span className="text-black">
                                                    {token.find((option) => option.value === selectedToken)?.label}
                                                </span>
                                            ) : (
                                                <span className="text-custom-gray font-[500] text-sm">You can only select one token at a time</span>
                                            )}
                                        </div>
                                        <div className="text-gray-400">
                                            {showTokenDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </div>

                                        {showTokenDropdown && (
                                            <ul className="absolute top-full left-0 w-[100%] mx-auto bg-white border border-[#E5E5E5] mt-1 rounded-[10px] z-10">
                                                {token.map((option, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedToken(option.value);
                                                            setShowTokenDropdown(false);
                                                        }}
                                                    >
                                                        {option.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-start flex-col gap-2 w-[90%] mx-auto">
                                    <label className="text-lg font-bold">Enter Amount</label>
                                    <div className="flex gap-2 items-center border border-gray-300 rounded-lg p-3 ">
                                        <input type="text" className="outline-none bg-transparent w-full " />
                                        <h3 className="bg-input-bg text-sm text-primary font-[400] h-[24px] w-[54px] flex items-center justify-center rounded-[6px]">MAX</h3>
                                    </div>
                                </div>

                                <div onClick={handleConfirmClick} className="flex justify-center w-[90%] mx-auto items-center rounded-[20px] bg-primary text-white h-[60px] mt-5 ">
                                    <button>Confirm</button>
                                </div>
                            </div>
                        </div>

                      
                    
                </div>
            )}

            {/* Confirmation Modal */}
            {isConfirmationModalOpen && (
                <div className={`fixed inset-0 flex items-center justify-center   bg-black bg-opacity-50 ${krona.className}`}>
                   <div className="bg-white rounded-[40px] w-[90%] md:w-[50%] h-[652px] md:h-[576px]  shadow-lg ">
                    <svg  onClick={() => setIsConfirmationModalOpen(false)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x mx-10 mt-8 "><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        <div className="flex flex-col items-center justify-center gap-5 p-5 md:px-[5%] md:pt-[10%]">

        
                        <h2 className="text-2xl font text-center">Congratulations <span className="text-[32px] text-primary"> Prof 🥳</span></h2>
                        <p className="font-[400] text-[20px] text-center">You have successfully Topped Up your account
                        <span className="font-[500]">-Prof Isaac</span> with $500 ETH.</p>
                        <p className="text-[14px] font-[400] text-custom-gray text-center">Transfer request is being processed and you will receive your money in a bit😎</p>
                        <div className="flex justify-center items-center md:gap-10 mt-4 md:flex-row flex-col gap-4">
                            <button className="border-primary border bg-lightpurple text-primary text-[14px] w-[240px] h-[60px] rounded-[20px]" onClick={() => setIsConfirmationModalOpen(false)}>Top Up Again</button>
                            <button className="text-white bg-primary text-[14px] w-[240px] h-[60px] rounded-[20px]" onClick={() => setIsConfirmationModalOpen(false)}>Go to Dashboard</button>
                        </div>
                       
                    </div>
                    </div>
                </div>
            )}
        </div>

      </div>
    )
}

export default Deposit