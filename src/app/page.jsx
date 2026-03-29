import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const Main = () => {
     return (
          <section>
               {/* hero section start  */}
               <section className="relative h-220 w-full">
                    <Image
                         src={"/doctor.jpg"}
                         alt="hero-doctor"
                         className="mx-auto h-full brightness-50 -mt-5 rounded-b-4xl object-cover object-top"
                         width={1600}
                         height={600}
                    />
                    <div className="absolute top-40 left-20">
                         <div className="flex items-center w-fit gap-2 bg-white/8 backdrop-blur-sm rounded-md border border-white/10 p-2">
                              <span className="bg-blue-500 p-1 px-2 text-white rounded-sm">
                                   MEDNIX
                              </span>
                              <h2 className="font-medium text-white">
                                   TRUSTED SPECIALISTS
                              </h2>
                         </div>
                         <div className="mt-10 backdrop-blur-[3px]">
                              <h1 className="text-[90px] text-white leading-28">
                                   Your Trusted <br />
                                   Partner <br />
                                   Health and <br />
                                   Wellness
                              </h1>
                         </div>
                    </div>
               </section>
               {/* hero section end */}

               {/* about section start  */}
               <section className="h-screen p-20">
                    <div className="flex items-center w-fit pr-3 rounded-full shadow-[inset_2px_2px_5px_black]/30">
                         <span className="animate-pulse">
                              <BsDot className="text-4xl" />
                         </span>
                         <h3 className="text-[15px]">About Mednix</h3>
                    </div>
                    <section className="grid grid-cols-12 items-center gap-8">
                         <div className="col-span-7">
                              <div className="mt-10">
                                   <h1 className="text-blue-950 text-5xl">
                                        Caring for You Like
                                   </h1>
                                   <h3 className="text-[50px] text-cyan-500 italic">
                                        Family Health
                                   </h3>
                              </div>
                              <div className="relative">
                                   <Image
                                        src={"/about-doctor.jpg"}
                                        alt="about doctor"
                                        className="rounded-4xl"
                                        height={100}
                                        width={1000}
                                   />
                                   <div className="absolute -top-40 right-0">
                                        <div className="bg-cyan-500 text-white p-5 border-20 rounded-[50px] border-white">
                                             <h1 className="text-3xl mb-5">
                                                  Opening Hours:
                                             </h1>
                                             <div className="flex my-3 gap-10 justify-between">
                                                  <p>Mon - Fri</p>
                                                  <p>9:00 - 18:00</p>
                                             </div>
                                             <hr className="border-t border-white/50" />
                                             <div className="flex my-3 gap-10 justify-between">
                                                  <p>Sat - Sun</p>
                                                  <p>8:00 - 16:00</p>
                                             </div>
                                             <hr className="border-t border-white/50" />
                                             <div className="flex my-3 gap-10 justify-between">
                                                  <p>Emergency</p>
                                                  <p>24/7 Hours</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-span-5">
                              <h1 className="text-[250px] font-bold text-transparent leading-50 bg-clip-text bg-[url('/doctor.jpg')] bg-contain bg-left">
                                   25+
                              </h1>
                              <div className="flex items-center gap-3 my-5">
                                   <div className="flex -space-x-5">
                                        <Image
                                             src={"/doctor.jpg"}
                                             alt="doctors"
                                             className="rounded-full border-5 border-gray-100 h-12 object-cover object-right"
                                             height={50}
                                             width={50}
                                        />
                                        <Image
                                             src={"/doctor.jpg"}
                                             alt="doctors"
                                             className="rounded-full border-5  border-gray-100 h-12 object-cover object-right"
                                             height={50}
                                             width={50}
                                        />
                                        <Image
                                             src={"/doctor.jpg"}
                                             className="rounded-full border-5  border-gray-100 h-12 object-cover object-tight"
                                             alt="doctors"
                                             height={50}
                                             width={50}
                                        />
                                   </div>
                                   <p className="uppercase font-semibold text-blue-950">
                                        Trusted Experts in Medical <br /> Health
                                        and Wellness
                                   </p>
                              </div>
                              <p className="text-gray-500 text-[18px]">
                                   We’re committed to offering compassionate and
                                   comprehensive healthcare tailored to your
                                   needs. At Mednix, your health is our priority
                                   every step of the way.
                              </p>
                              <div className="flex gap-3 cursor-pointer w-fit mt-5 text-white bg-cyan-500 p-1  rounded-lg items-center">
                                   <h2 className="pl-4 text-[16px]">
                                        Appointment
                                   </h2>
                                   <span className="bg-white p-2 rounded-sm">
                                        <FiArrowRight className="text-2xl text-black" />
                                   </span>
                              </div>
                         </div>
                    </section>
               </section>

               <div></div>
               {/* about section end  */}
          </section>
     );
};

export default Main;
