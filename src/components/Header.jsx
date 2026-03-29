"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
{
     /* <CiMenuFries /> */
     //
}

const Header = () => {
     const [isActive, setIsActive] = useState(0);
     const [show, setShow] = useState(false);
     return (
          <div className="bg-[#10355F] rounded-b-3xl py-3 text-white backdrop-blur-3xl">
               <div className="flex justify-between gap-3 max-w-[1500] lg:px-15 px-3 mx-auto py-2">
                    <Image
                         src="logo.svg"
                         alt="site logo"
                         className="w-30 xl:w-50"
                         height={200}
                         width={200}
                    />
                    <nav className="hidden lg:flex items-center lg:gap-2 xl:gap-3 border border-white/10 rounded-lg px-2 bg-white/5">
                         <Link
                              className={
                                   isActive === 0
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(0)}
                              href={"/"}
                         >
                              HOME
                         </Link>
                         <Link
                              className={
                                   isActive === 1
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(1)}
                              href={"/pages"}
                         >
                              PAGES
                         </Link>
                         <Link
                              className={
                                   isActive === 2
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(2)}
                              href={"/services"}
                         >
                              SERVICES
                         </Link>
                         <Link
                              className={
                                   isActive === 3
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(3)}
                              href={"/case-studies"}
                         >
                              CASE STUDIES
                         </Link>
                         <Link
                              className={
                                   isActive === 4
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(4)}
                              href={"/blogs"}
                         >
                              BLOGS
                         </Link>
                         <Link
                              className={
                                   isActive === 5
                                        ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                        : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                              }
                              onClick={() => setIsActive(5)}
                              href={"/contact"}
                         >
                              CONTACT
                         </Link>
                    </nav>

                    <div className="hidden xl:flex items-center gap-4">
                         <FaPhone className="text-2xl" />
                         <div className="flex flex-col">
                              <span>Emergency Call:</span>
                              <span>(888) 4567890</span>
                         </div>
                    </div>
                    <button className="hidden md:flex gap-3 cursor-pointer bg-cyan-500 p-1  rounded-lg items-center">
                         <h2 className="pl-4 text-[16px]">Appointment</h2>
                         <span className="bg-white p-2 rounded-sm">
                              <FiArrowRight className="text-2xl text-black" />
                         </span>
                    </button>
                    <div className="flex lg:hidden">
                         {show ? (
                              <div className="relative">
                                   <button onClick={() => setShow(false)}>
                                        <IoMdClose className="text-2xl" />
                                   </button>
                                   <div className="absolute top-10 right-0">
                                        <div className="flex flex-col space-y-2 bg-cyan-500 p-3 px-4 min-w-40 rounded-2xl">
                                             <Link
                                                  className={
                                                       isActive === 0
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(0)}
                                                  href={"/"}
                                             >
                                                  HOME
                                             </Link>
                                             <Link
                                                  className={
                                                       isActive === 1
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(1)}
                                                  href={"/pages"}
                                             >
                                                  PAGES
                                             </Link>
                                             <Link
                                                  className={
                                                       isActive === 2
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(2)}
                                                  href={"/services"}
                                             >
                                                  SERVICES
                                             </Link>
                                             <Link
                                                  className={
                                                       isActive === 3
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(3)}
                                                  href={"/case-studies"}
                                             >
                                                  CASE STUDIES
                                             </Link>
                                             <Link
                                                  className={
                                                       isActive === 4
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(4)}
                                                  href={"/blogs"}
                                             >
                                                  BLOGS
                                             </Link>
                                             <Link
                                                  className={
                                                       isActive === 5
                                                            ? "bg-white text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                            : "hover:bg-white hover:text-blue-900 duration-300 px-3 py-2 rounded-sm text-sm xl:text-[16px]"
                                                  }
                                                  onClick={() => setIsActive(5)}
                                                  href={"/contact"}
                                             >
                                                  CONTACT{" "}
                                             </Link>
                                             <button className="flex gap-3 cursor-pointer bg-cyan-800 p-1  rounded-lg items-center">
                                                  <h2 className="pl-4 text-[16px]">
                                                       Appointment
                                                  </h2>
                                                  <span className="bg-white p-2 rounded-sm">
                                                       <FiArrowRight className="text-2xl text-black" />
                                                  </span>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ) : (
                              <button onClick={() => setShow(true)}>
                                   <CiMenuFries className="text-xl" />
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default Header;
