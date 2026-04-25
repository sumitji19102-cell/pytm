"use client";

import { FaWhatsapp } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      
      {/* Mobile Frame */}
      <div className="w-[360px] h-[780px] bg-[#e8f3f8] rounded-xl shadow-lg overflow-hidden flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <IoArrowBack size={22} />

          <img
            src="https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo.png"
            alt="Paytm"
            className="w-[90px]"
          />

          <div className="text-xl font-bold">⋮</div>
        </div>

        {/* Top Content */}
        <div className="flex flex-col items-center px-4">

          <h2 className="text-xl font-semibold mt-2">Rekha Devi</h2>

          <p className="text-gray-600 text-sm mt-1">
            UPI ID: justification@naviaxis
          </p>

          {/* Amount */}
          <div className="flex items-center gap-2 mt-6">
            <h1 className="text-4xl font-bold">₹15</h1>

            <RiVerifiedBadgeFill className="text-green-500 text-3xl" />
          </div>

          {/* Date + Ref */}
          <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
            <span>24 Apr, 01:44 PM</span>
            <span>•</span>
            <span>Ref. No: 301346400956</span>
            <MdContentCopy className="cursor-pointer text-lg" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
              Check Balance
            </button>

            <button className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium">
              Pay Again
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-medium">
              <FaWhatsapp />
              Share
            </button>
          </div>
        </div>

        {/* Bottom Image Section (AD / Spin & Win) */}
        <div className="mt-6 flex-1 overflow-hidden">
          <img
            src="https://i.ibb.co/KxYZPkvT/photo-2026-04-25-07-34-48.jpg"
            alt="offer"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}