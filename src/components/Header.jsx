"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
     const [isActive, setIsActive] = useState(0);
     return (
          <div className="bg-[#10355F] rounded-b-3xl py-3 text-white backdrop-blur-3xl">
               <div className="flex justify-between max-w-[1500] px-15 mx-auto py-2">
                    <Image
                         src="logo.svg"
                         alt="site logo"
                         height={200}
                         width={200}
                    />
                    <nav className="flex items-center gap-3 border border-white/10 rounded-lg px-2 bg-white/5">
                         <Link
                              className={
                                   isActive === 0
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              href={"/"}
                              onClick={() => setIsActive(0)}
                         >
                              HOME
                         </Link>
                         <Link
                              className={
                                   isActive === 1
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              onClick={() => setIsActive(1)}
                              href={"/pages"}
                         >
                              PAGES
                         </Link>
                         <Link
                              className={
                                   isActive === 2
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              onClick={() => setIsActive(2)}
                              href={"/services"}
                         >
                              SERVICES
                         </Link>
                         <Link
                              className={
                                   isActive === 3
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              onClick={() => setIsActive(3)}
                              href={"/case-studies"}
                         >
                              CASE STUDIES
                         </Link>
                         <Link
                              className={
                                   isActive === 4
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              onClick={() => setIsActive(4)}
                              href={"/blogs"}
                         >
                              BLOGS
                         </Link>
                         <Link
                              className={
                                   isActive === 5
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm"
                              }
                              onClick={() => setIsActive(5)}
                              href={"/contact"}
                         >
                              CONTACT
                         </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                         <FaPhone className="text-2xl" />
                         <div className="flex flex-col">
                              <span>Emergency Call:</span>
                              <span>(888) 4567890</span>
                         </div>
                    </div>
                    <div className="flex gap-3 cursor-pointer bg-cyan-500 p-1  rounded-lg items-center">
                         <h2 className="pl-4 text-[16px]">Appointment</h2>
                         <span className="bg-white p-2 rounded-sm">
                              <FiArrowRight className="text-2xl text-black" />
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default Header;
