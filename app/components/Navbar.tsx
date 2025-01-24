"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Krona_One } from "next/font/google";
import { VerificationLevel, IDKitWidget, useIDKit } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import { verify } from "../actions/verify/verify";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const app_id = process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`;
  const action = process.env.NEXT_PUBLIC_WLD_ACTION;

  if (!app_id) {
    throw new Error("app_id is not set in environment variables!");
  }
  if (!action) {
    throw new Error("action is not set in environment variables!");
  }

  const { setOpen } = useIDKit();

  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert(
      "Successfully verified with World ID! Your nullifier hash is: " +
        result.nullifier_hash
    );
  };

  const handleProof = async (result: ISuccessResult) => {
    console.log(
      "Proof received from IDKit, sending to backend:\n",
      JSON.stringify(result)
    ); // Log the proof from IDKit to the console for visibility
    const data = await verify(result);
    if (data.success) {
      console.log("Successful response from backend:\n", JSON.stringify(data)); // Log the response from our backend for visibility
    } else {
      throw new Error(`Verification failed: ${data.detail}`);
    }
  };

  return (
    <nav className={`relative w-[92%] ${krona.className}`}>
      <div className="w-full flex items-center justify-between px-4 md:px-8 py-4">
        <Link
          href="/"
          className="text-xl font-semibold bg-gradient-to-r from-[#3642CA] to-[#501A7A] bg-clip-text text-transparent hover:opacity-90"
        >
          Transverse Pay
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-purple-700 hover:bg-purple-50 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-purple-700">
          <Link
            href="/docs"
            className="hover:text-purple-900 transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="/blog"
            className="hover:text-purple-900 transition-colors"
          >
            Blog
          </Link>
{/*Top up nav for testing */}
<Link
            href="/deposit"
            className="hover:text-purple-900 transition-colors"
          >
            Deposit
          </Link>


        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <IDKitWidget
            action={action}
            app_id={app_id}
            onSuccess={onSuccess}
            handleVerify={handleProof}
            verification_level={VerificationLevel.Orb} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
          />
          <button
            className="px-4 min-w-[159px] py-2 border border-primary text-primary rounded-full hover:bg-purple-50 transition-colors"
            onClick={() => setOpen(true)}
          >
            Login
          </button>
          <button
            className="px-4 min-w-[159px] text-[16px] py-2 bg-primary text-white font-extralight rounded-full hover:bg-purple-800 transition-colors"
            onClick={() => setOpen(true)}
          >
            Create Account
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-purple-100 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/docs"
              className="text-purple-700 hover:text-purple-900 transition-colors px-2 py-1"
            >
              Documentation
            </Link>
            <Link
              href="/deposit"
              className="text-purple-700 hover:text-purple-900 transition-colors px-2 py-1"
            >
              Blog
            </Link>
            <hr className="border-purple-100" />
            <button className="w-full px-4 py-2 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-50 transition-colors">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors">
              Create Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
