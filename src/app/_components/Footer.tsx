"use client";
import Link from "next/link"
import Image from 'next/image'
import Linked from "../../../public/img/linkedin.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Facebook from "../../../public/img/facebook.png";
import Twitter from "../../../public/img/twitter.png";
import Logo from "../../../public/img/SabersWhite.png";


export default function Footer() {
    return (
        <footer className="w-full h-auto bg-[#012D9A]">
            <section id="container" className=" w-full h-[724px] mx-auto max-w-8xl">
                <div className="font-spaceGrotesk flex flex-col">
                    <div id="title" className="md:pt-[75px] flex flex-row justify-between items-center w-full">
                        <h1 className=" md:ml-[160px] w-[878px] h-[300px] text-[#FFFFFF] text-right text-[140px] font-medium leading-[150px] tracking-[-0.025em]">Want to Start a Project?</h1>
                        <div id="contacts" className="flex ml-auto items-center md:mr-[154px] md:gap-[22px]">
                            <Image src={Linked} alt="linked_in" />
                            <Image src={Facebook} alt="Facebook" />
                            <Image src={Twitter} alt="Twitter" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:pt-[23px]">
                        <button className="flex items-center justify-between py-2 px-2 bg-[white] font-bold font-spaceGrotesk text-[22px] leading-[36px] tracking-[-0.025em] text-[#012D9A] rounded-[100px]">
                            <span className="mr-3 ml-4">Let&apos;s Talk</span>
                            <button className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#FE0000]">
                                <FaArrowRightLong size={20} className="text-white" />
                            </button>
                        </button>
                    </div>
                    <div id="logo-nav" className="flex md:pt-[86px] items-center justify-between md:mx-[160px]">
                        <Image src={Logo} alt="sabers" className="mr-auto" />
                        <div className="gap-[42px] flex font-spaceGrotesk text-[24px] text-left text-white">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/project">Project</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                </div>

            </section>
        </footer>
    );
};