import Process1 from "../../assets/Home/ServiceHome/Process1.png";
import Process2 from "../../assets/Home/ServiceHome/Process2.png";
import Process3 from "../../assets/Home/ServiceHome/Process3.png";
import Design from "../../assets/Home/ServiceHome/Design.png";
import Software from "../../assets/Home/ServiceHome/Software.png";
import UIUX from "../../assets/Home/ServiceHome/UIUX.png";
import ML from "../../assets/Home/ServiceHome/ML.png";
import Triangle from "../../assets/Home/ServiceHome/Triangle.png";

import { GiDiamonds } from "react-icons/gi";
import { BiSolidCircleHalf } from "react-icons/bi";
import { TiStarburst } from "react-icons/ti";
import { motion } from "framer-motion";

function ServiceHome() {
  return (
    <>
      {/* SERVICE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-[#83E2FF]/20 py-20 px-4 sm:px-8 mt-14 min-h-[750px] mb-20 sm:mb-[3cm] lg:mb-[4cm] overflow-x-hidden"
      >
        {/* CIRCLE */}
      <motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="
    hidden sm:block md:hidden lg:block xl:block
    absolute bg-[#84E889] rounded-full -z-10
    left-10 bottom-10 w-[90px] h-[90px]
    sm:left-15 sm:bottom-10 sm:w-[150px] sm:h-[150px]
    lg:left-40 lg:bottom-16 lg:w-[200px] lg:h-[200px]
    xl:left-100 xl:bottom-20 xl:w-[200px] xl:h-[200px]
  "
/>

        {/* TRIANGLE */}
       <motion.img
  src={Triangle}
  animate={{ rotate: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 6 }}
  className="
    hidden sm:block md:hidden lg:block xl:block
    absolute -z-10
    right-5 top-[300px] w-[110px] h-[110px]
    sm:right-7 sm:top-85 sm:w-[150px] sm:h-[150px]
   
    lg:right-16 lg:top-32 lg:w-[200px] lg:h-[200px]
    xl:right-35 xl:top-50 xl:w-[200px] xl:h-[200px]
  "
/>


        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:ml-0 lg:ml-[7cm] mt-10 md:mt-0"
        >
          <h2 className="text-[#03B7FF] text-[22px] xs:text-[24px] sm:text-[28px] font-medium">
            Our Services
          </h2>

          <h3 className="text-[26px] xs:text-[30px] sm:text-[40px] font-semibold mt-2 mb-12 leading-snug">
            Comprehensive Creative and Technology Services <br /> Tailored for Your Needs
          </h3>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 md:ml-0 lg:ml-[7cm]">
          {[
            { title: "Design Services", color: "#FFA6E2", img: Design },
            { title: "Software Development", color: "#8369F2", img: Software },
            { title: "Machine Learning", color: "#15D3F3", img: ML },
            { title: "UI/UX", color: "#7CBAF7", img: UIUX },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative w-[250px] xs:w-[260px] sm:w-[268px] h-[340px] xs:h-[350px] sm:h-[361px]"
            >
              <div
                className="h-[90px] sm:h-[100px] rounded-t-[40px] flex items-center justify-center text-[16px] sm:text-[18px] font-semibold"
                style={{ backgroundColor: card.color }}
              >
                {card.title}
              </div>

              <div className="-mt-10 w-full h-[250px] sm:h-[265px] bg-white rounded-[40px] pt-[50px] sm:pt-[60px] pb-8 px-6 shadow-[10px_10px_0_#3a3a3a]">
                <img src={card.img} className="rounded-[30px] w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PROCESS SECTION */}
      <div className="px-4 sm:px-8 md:px-16 lg:ml-[8cm] overflow-x-hidden">
        <h2 className="text-[#03B7FF] text-[22px] xs:text-[24px] sm:text-[28px] font-medium mt-10">
          Our Process
        </h2>

        <h3 className="text-[26px] xs:text-[30px] sm:text-[40px] font-semibold mt-4 mb-12 leading-snug">
          A Seamless Journey from Concept to Completion
        </h3>

        {/* PROCESS CARDS */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10">
          {[
            {
              icon: <TiStarburst className="ml-5 mt-5 text-[28px] sm:text-[30px] text-orange-400" />,
              title: "Understanding Your Needs",
              img: Process1,
            },
            {
              icon: <BiSolidCircleHalf className="rotate-270 ml-5 mt-5 text-[28px] sm:text-[30px] text-green-500" />,
              title: "Tailored Solutions",
              img: Process2,
            },
            {
              icon: <GiDiamonds className="ml-5 mt-5 text-[28px] sm:text-[30px] text-purple-600" />,
              title: "Continuous Collaboration",
              img: Process3,
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="border-4 w-full sm:w-[380px] md:w-[405px] h-[420px] sm:h-[451px] rounded-2xl flex flex-col overflow-hidden"
            >
              {step.icon}
              <h2 className="text-[22px] sm:text-[25px] font-medium mt-3 px-4">
                {step.title}
              </h2>
              <p className="text-[16px] sm:text-[18px] font-medium mt-2 px-4">
                We believe in transparent communication and collaboration throughout each project phase.
              </p>
              <img src={step.img} className="mt-auto w-full h-[200px] sm:h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceHome;
