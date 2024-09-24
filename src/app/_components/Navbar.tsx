"use client";
import React from "react";
import LogoSabers from "../../../public/img/logo.png";
import Link from "next/link"
import Image from 'next/image'

export default function Nav() {
    return (
        <main className="max-w-8xl mx-auto h-[80px]">
            <nav className="2xl:bg-black ml-[158px] mr-[163px] md:mb-[23px] mt-[29px]">
                <div className="flex text-[16px] font-poppins  items-center justify-between gap-[42px]">
                    <Image src={LogoSabers} className="mr-auto" alt="Logo Sabers"></Image>
                    <Link href="/" >Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/services" >Services</Link>
                    <Link className="ml-auto border border-[#FE0000] bg-[#FE0000] text-[14px] text-white font-bold px-10 py-3 rounded-[81px] hover:bg-white hover:text-[#FE0000] transition-all duration-300  ease-in-out hover:border]" href="/contact-us" >Contact Us</Link>
                </div>
            </nav>
        </main>
    )
}
