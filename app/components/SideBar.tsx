"use client";

import Link from "next/link";
import { Home, Activity, Bell, Target, Eye, Plus, RefreshCw, Settings, HelpCircle } from "lucide-react";
import { Krona_One } from "next/font/google";

const krona = Krona_One({
  weight: "400",
  subsets: ["latin"],
});

export default function SideBar() {
  return (
    <aside className={`w-[280px] h-full bg-purple-50 text-purple-700 flex flex-col ${krona.className}`}>
      {/* Logo Section */}
      <div className="px-4 py-6 border-b border-purple-100">
        <Link
          href="/"
          className="text-xl font-semibold bg-gradient-to-r from-[#3642CA] to-[#501A7A] bg-clip-text text-transparent hover:opacity-90"
        >
          Transverse Pay
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 mt-6">
        <nav className="flex flex-col space-y-3 px-4">
          <Link href="/dashboard" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Home size={18} />
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link href="/activities" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Activity size={18} />
            <span className="text-sm">Activities</span>
          </Link>
          <Link href="/notifications" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Bell size={18} />
            <span className="text-sm">Notifications</span>
          </Link>
          <Link href="/goals" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Target size={18} />
            <span className="text-sm">Goals</span>
          </Link>
          <Link href="/watchlist" className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Eye size={18} />
            <span className="text-sm">Watchlist</span>
          </Link>
        </nav>

        {/* Add Quick Link */}
        <div className="mt-8 px-4 border-t border-purple-100 pt-4">
          <button className="flex items-center space-x-3 py-12 px-3 w-full text-left text-purple-700 hover:bg-purple-100">
            <Plus size={18} />
            <span className="text-sm">Add quick Link</span>
          </button>
        </div>
      </div>

      {/* Utilities Section */}
      <div className="px-4 py-16 border-t border-purple-100">
        <div className="flex flex-col space-y-3">
          <button className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <RefreshCw size={18} />
            <span className="text-sm">Refresh</span>
          </button>
          <button className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <Settings size={18} />
            <span className="text-sm">Settings</span>
          </button>
          <button className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-purple-100">
            <HelpCircle size={18} />
            <span className="text-sm">Help Center</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
