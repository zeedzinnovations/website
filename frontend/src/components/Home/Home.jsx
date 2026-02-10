import { motion } from "framer-motion";

import Mainhome from "../../assets/Home/Home/Mainhome.png";
import Project from "../../assets/Home/Home/Project.png";
import Client from "../../assets/Home/Home/Client.png";
import About from "../../assets/Home/Home/About.png";
import ServiceHome from "./ServiceHome";
import Chooseus from "./Chooseus";
import { Link} from "react-router-dom";



const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Home() {
  return (
    <>
      {/* Home Section */}
      <div className="bg-[#020101] pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
      flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

        {/* LEFT */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left"
        >
          <h1 className="text-[clamp(28px,5vw,50px)] font-semibold leading-tight">
            Innovative Solutions
          </h1>
          <h2 className="text-[clamp(20px,4vw,40px)] font-medium">
            Where <span className="text-[#05B8FF]">Creativity</span> Meets <br />
            <span className="text-[#05B8FF]">Technology</span> Excellence
          </h2>
          <p className="text-[clamp(14px,2.5vw,18px)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Transforming ideas into engaging designs and advanced technology solutions for global brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start  mt-4">
           <Link to="/about"> 
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-[#05B8FF] px-6 py-2 rounded-xl font-medium text-[clamp(14px,2vw,18px)]"
            >
              More
            </motion.button>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="border border-[#05B8FF] px-6 py-2  ml-10  rounded-xl font-medium text-[clamp(14px,2vw,18px)]"
            >
              Show
            </motion.button></Link> 
          </div>

          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mt-6">
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <img src={Project} loading="lazy" className="w-12 sm:w-16 md:w-20 rounded-2xl" />
              <div>
                <p className="text-[#05B8FF] text-[clamp(24px,4vw,35px)] font-semibold">100+</p>
                <p className="text-[clamp(12px,2vw,18px)]">Project Completed</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <img src={Client} loading="lazy" className="w-12 sm:w-16 md:w-20 rounded-2xl" />
              <div>
                <p className="text-[#05B8FF] text-[clamp(24px,4vw,35px)] font-semibold">1k+</p>
                <p className="text-[clamp(12px,2vw,18px)]">Satisfied Clients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.img
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={Mainhome}
          loading="lazy"
          className="w-[85%] sm:w-[70%] md:w-[55%] lg:w-[48%] xl:w-[40%] max-w-[500px] rounded-[20px]"
        />
      </div>


      {/* ABOUT SECTION */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32
      mt-16 mb-20 items-center lg:items-start text-center lg:text-left">

        <motion.img
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          src={About}
          loading="lazy"
          className="w-[85%] sm:w-[350px] md:w-[400px] lg:w-[430px] xl:w-[480px] max-w-full rounded-[20px]"
        />

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <h2 className="text-[#03B7FF] text-[clamp(20px,2.5vw,28px)] font-medium">
            About Us
          </h2>
          <h3 className="text-[clamp(26px,4vw,40px)] font-medium leading-snug">
            Discover the Vision and Passion <br className="hidden sm:block" />
            Behind Zeedz Innovations
          </h3>
          <p className="text-[clamp(14px,2.5vw,18px)] leading-relaxed font-medium">
            Zeedz Innovations blends creativity with advanced technology to deliver exceptional solutions for global brands.
          </p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 flex justify-center lg:justify-end"
          >
            <Link to="/about">
              <button className="bg-[#1D1D1D] text-white rounded-full w-40 sm:w-[170px] h-[45px] sm:h-[49px] lg:w-[200px] flex items-center justify-between px-4">
                <span className="text-[clamp(14px,2vw,18px)] font-medium">READ MORE</span>
                <span className="w-[34px] sm:w-[38px] h-[34px] sm:h-[38px] bg-white rounded-full border"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <ServiceHome />
      <Chooseus />
    </>
  );
}

export default Home;

