'use client';

import Link from "next/link";
import { Home, Activity, Bell, Target, Eye, Plus, RefreshCw, Settings, HelpCircle } from "lucide-react";
import { Krona_One, Raleway } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

export default function SideBar() {
  return (
    <aside className={`w-[280px] h-full bg-purple-50 text-purple-700 flex flex-col ${krona.className}`}>
      {/* Logo Section */}
      <div className="px-4 py-6 border-b border-purple-100">
        <Link
          href="/"
          className="text-[16px] leading-[20px] bg-gradient-to-r from-[#3642CA] to-[#501A7A] bg-clip-text text-transparent font-[Krona One] hover:opacity-90 block"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Transverse Pay
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 mt-6">
        <nav className={`flex flex-col space-y-3 px-4 ${raleway.className}`}>
          <Link href="/dashboard" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Home size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Dashboard</span>
          </Link>
          <Link href="/activities" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Activity size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Activities</span>
          </Link>
          <Link href="/notifications" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Bell size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Notifications</span>
          </Link>
          <Link href="/goals" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Target size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Goals</span>
          </Link>
          <Link href="/watchlist" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Eye size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Watchlist</span>
          </Link>
        </nav>

{/* Add Quick Link */}
<div className="mt-28 px-4 border-t border-purple-100 pt-4">
  <button className="flex items-center space-x-2 text-[#666666] font-raleway text-[12px] leading-[14px] font-medium">
    <Plus size={16} strokeWidth={1.5} />
    <span>Add quick Link</span>
  </button>
</div>



      </div>

      {/* Utilities Section */}
      <div className="px-4 py-40 mt-8 border-t border-purple-100">
        <nav className={`flex flex-col space-y-13 ${raleway.className}`}>
          {/* Refresh Button */}
          <Link href="/refresh" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <RefreshCw size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Refresh</span>
          </Link>

          {/* Settings Button */}
          <Link href="/settings" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Settings size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Settings</span>
          </Link>

          {/* Help Center Button */}
          <Link href="/help-center" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <HelpCircle size={18} />
            <span className="text-[13px] leading-[16px] text-[#61278B]">Help Center</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}
