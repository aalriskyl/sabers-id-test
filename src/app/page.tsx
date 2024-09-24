"use client";
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Combined from "../../public/img/grouped-vector-bg.png";
// import ArrowLogo from "../../public/img/arrow-logo.png";
// import ContactUs from "../../public/img/contact-us.png";
import Rect from "../../public/img/rect-map.png";
import Hook from "../../public/img/crane-hook.png";
import Dummy1 from "../../public/img/dummy-1.png";
import Nav from "./_components/Navbar";
import Link from "next/link";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Footer from './_components/Footer';


export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const getHookPosition = (index: number) => {
    if (selectedIndex === null) return '';
    const offset = 428 * index; // Adjust the offset based on the image positions
    return `translateX(${offset}px)`; // Moves the hook horizontally based on the selected image
  };

  return (
    <main className="w-full h-auto min-h-screen">
      <Nav />
      <section id="hero" className="max-w-8xl mx-auto">
        {/* Header */}
        <div id="content" className="content relative">
          <Image src={Combined} alt="image" />
          <div className="absolute flex flex-col inset-0">
            <h1 className="md:w-[1100px] md:ml-[159px] md:text-[110px] md:mt-[110px] md:leading-[120px] text-[#012D9A] font-bold font-spaceGrotesk text-4xl">
              Expert Construction Service for Every Project
            </h1>
            <div className="font-epilogue text-[#5F5F5F] ">
              <p className="md:ml-[159px] w-[594px] md:mt-[30px] text-[24px]  md:mb-[40px]">
                General Contractor, Civil Electrical, Power Systems and Telecommunication Network
              </p>
              <div className="md:ml-[159px] grid grid-cols-2 w-[500px]">
                <p className="font-epilogue text-[44px] font-semibold w-[392px]">20+</p>
                <p className="font-epilogue text-[44px] font-semibold w-[392px]">10+</p>
                <p className="font-epilogue text-[24px] w-[392px]">Clients</p>
                <p className="font-epilogue text-[24px] w-[392px]">Project Completed</p>
              </div>
            </div>
          </div>


        </div>
        <div className="relative z-10">
          <div className={`absolute px-14 py-12 -top-[140px] bg-white rounded-tr-[60px] left-0`}>
            <div
              id="contact-top-left"
              className={`absolute left-0 -top-[47px] z-50 w-12 h-12 bg-white [mask-image:radial-gradient(circle_at_100%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <div
              id="contact-top-right"
              className={`absolute -right-[63px] bottom-[38px] z-50 w-16 h-16 bg-white [mask-image:radial-gradient(circle_at_100%_0%,transparent_0,transparent_71%,black_71%)]`}
            ></div>
            <button className="w-[789px] ] flex items-center justify-between py-4 font-bold bg-[#FE0000] rounded-full text-[#FFF7F7] font-epilogue text-[34px] hover:bg-white hover:text-[#FE0000] transition-all duration-300 transform ease-in-out hover:border-2 border-[#FE0000] border">
              <span className="flex-1 text-center md:ml-20">Contact Us</span>
              <IoIosArrowForward size={40} className="mr-8" />
            </button>
          </div>
        </div>
        {/* About */}
        <div id="about" className="flex flex-col mx-auto items-center justify-center z-50 mt-20 mb-[50px]">
          <h1 className="text-black font-bold text-center font-spaceGrotesk md:text-[40px]">PT Sumber Artho Bersaudara</h1>
          <p className="items-center text-center md:w-[1273px] md:mt-[16px] font-epilogue text-[24px] md:mb-[32px]">PT. Sumber Artho Bersaudara is a dynamic company specializing in Civil, Contractor Civil, Electrical Power Systems, and Telecommunication Network services. With a commitment to excellence and a focus on delivering high-quality solutions, we pride ourselves on our expertise and dedication to meeting the diverse needs of our clients.</p>
          <Link href="/about-us" className="px-10 py-3 border-2 text-[#FE0000] border-[#FE0000] rounded-full bg-white font-epilogue text-[20px] font-medium hover:bg-[#FE0000] hover:text-white transition-all duration-300 transform hover:scale-104 ease-in-out">See Details</Link>
        </div>
        {/* Header */}
        <div id="our-project" className="flex flex-col">
          <div className="flex gap-4 md:mb-[102px]">
            <h1 className="font-bold font-spaceGrotesk text-[60px] leading-[120%] md:ml-[159px] text-[#012D9A]">
              Our Project
            </h1>
            <h1 className="font-bold bg-[#EEEEEE] px-2 font-spaceGrotesk text-[60px] leading-[120%] text-[#012D9A]">
              Footprints
            </h1>
          </div>
          <div id="map-wrapper" className="relative flex-flex-col">
            <div className="flex items-center justify-end relative">
              <div id="modal-blue" className="flex absolute rounded-tr-[120px] rounded-br-[120px] top-0 -left-10 bg-[#012D9A] w-[291px] h-[851px] min-h-[851px] max-h-[200px]"
              >
                <div id="open-modal" className="bg-[#FFFFFF] px-2 py-1 absolute bottom-[390px] -right-[30px] border-[#EEEEEE] border-[10px] rounded-[55px] ">
                  <Link className="flex items-center font-spaceGrotesk justify-center font-bold text-[20px] text-[#BCB7B7]" href="#">OPEN
                    <IoIosArrowForward size={40} className="" /></Link>
                </div>
              </div>
              <Image src={Rect} alt="bg-alt" />
            </div>
          </div>
        </div>
        {/* Project Milestone */}
        <div className="flex flex-row items-center mt-[128px] md:ml-[159px] md:mb-[23px]">
          <div className="flex flex-col relative md:mr-auto">
            <div className="bg-[#EEEEEE] absolute w-[251px] -left-5 h-[70px] z-0" />
            <h1 className="font-bold z-50 font-spaceGrotesk text-[60px] leading-[120%] text-[#012D9A]">Project</h1>
            <h1 className="font-bold font-spaceGrotesk text-[60px] leading-[120%] text-[#012D9A]">Mile Stone</h1>
          </div>
          <div className="md:mr-[166px] w-[484px]">
            <p className="font-epilogue text-[24px] text-[#5F5F5F]">General Contractor, Civil Electrical, Power Systems and Telecomunication Network</p>
          </div>
        </div>
        {/* Crane */}
        <div className="flex mx-auto flex-col  overflow-hidden">
          <div id="button" className="flex items-center justify-end gap-[30px] md:mb-[99px] md:mr-[165px]">
            <div id="button-left" className="flex justify-center items-center border-2 border-[#D9D9D9] w-[48px] h-[48px] rounded-full">
              <FaArrowLeftLong size={15} className="text-[#D9D9D9]" />

            </div>
            <div id="button-right" className="flex justify-center items-center bg-[#FE0000] border-2 border-[#FE0000] w-[48px] h-[48px] rounded-full">
              <FaArrowRightLong size={15} className="text-[#D9D9D9]" />
            </div>
          </div>
          <div id="line-wrapper" className="w-[1600px] flex flex-col relative mx-auto">
            <div id="line" className="flex bg-[#D6DBEA] border-2 border-[#D6DBEA]" />
            <div
              id="hooks"
              className={`relative -top-[6px] left-[130px] transition-transform duration-500 ease-in-out`}
              style={{ transform: getHookPosition(selectedIndex ?? 0) }} // Apply the position style
            >
              <Image src={Hook} alt="hook" />
            </div>
            <div id="images" className="flex max-w-8xl mx-auto items-center flex-row gap-[91px] md:mb-[179px]">
              {[Dummy1, Dummy1, Dummy1, Dummy1].map((src, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => handleSelect(index)} // On click, set the selected index
                >
                  <Image
                    src={src}
                    alt={`dummy${index}`}
                    className={`rounded-[55px] transition-all duration-300 ease-in-out ${selectedIndex === index ? 'o -translate-y-4' : ' translate-y-0'
                      }`}
                  />
                  {selectedIndex === index && (
                    <div
                      className={`absolute inset-0 bg-[#D9D9D9] rounded-[55px] transition-all duration-300 ease-in-out transform ${selectedIndex === index ? '-translate-y-4 opacity-70 duration-300 ease-in-out' : 'translate-y-full opacity-0 duration-300 ease-in-out'
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 