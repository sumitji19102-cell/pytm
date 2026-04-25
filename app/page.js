"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Home() {
  const [dateTime, setDateTime] = useState("");
  const [refNumber, setRefNumber] = useState("");

  // 🔹 User Inputs
  const [name, setName] = useState("");
  const [upi, setUpi] = useState("");

  // 🔹 Random 12 digit ref
  const generateRef = () => {
    let num = "";
    for (let i = 0; i < 12; i++) {
      num += Math.floor(Math.random() * 10);
    }
    return num;
  };

  useEffect(() => {
    setRefNumber(generateRef());

    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      });

      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime(`${date}, ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen pt-14 bg-[#e8f3f8] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <IoArrowBack size={22} />

        <img
          src="https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo.png"
          alt="Paytm"
          className="w-[90px]"
        />

        <div className="text-xl">⋮</div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-4">

        {/* 🔥 Dynamic Name */}
        <h2 className="text-xl font-semibold mt-2">{name}</h2>

        {/* 🔥 Dynamic UPI */}
        <p className="text-gray-600 text-sm mt-1">
          UPI ID: {upi}
        </p>

        {/* Amount */}
        <div className="flex items-center gap-2 mt-6">
          <h1 className="text-5xl font-bold">₹15</h1>
          <RiVerifiedBadgeFill className="text-green-500 text-3xl" />
        </div>

        {/* Date + Ref */}
        <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm flex-wrap justify-center">
          <span>{dateTime}</span>
          <span>•</span>
          <span>Ref. No: {refNumber}</span>
          <MdContentCopy className="cursor-pointer text-lg" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6 flex-wrap justify-center">
          <button className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">
            Check Balance
          </button>

          <button className="bg-white px-5 py-2 rounded-full shadow text-sm font-medium">
            Pay Again
          </button>

          <button className="bg-green-500 text-white px-5 py-2 rounded-full shadow flex items-center gap-2 text-sm font-medium">
            <FaWhatsapp />
            Share
          </button>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="mt-6 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
  <img
    src="https://i.ibb.co/KxYZPkvT/photo-2026-04-25-07-34-48.jpg"
    alt="offer"
    className="w-screen h-auto object-cover"
  />
</div>

      {/* 🔥 INPUT SECTION (Bottom) */}
      <div className="bg-white p-4 mt-[300px]  shadow-inner">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upi}
          onChange={(e) => setUpi(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg outline-none"
        />

      </div>

    </div>
  );
}