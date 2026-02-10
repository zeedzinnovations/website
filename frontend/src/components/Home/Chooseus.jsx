import Tick from "../../assets/Home/Chooseus/Tick.png";
import Star from "../../assets/Home/Chooseus/Star.png";
import Innovate from "../../assets/Home/Chooseus/Innovate.png";
import RedLine from "../../assets/Home/Chooseus/RedLine.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Chooseus() {
  return (
    <>
      <div
        className="
          mt-40 bg-[#CACAF73D]
          lg:h-210
          pt-20 pb-32
          px-5 lg:px-16
          relative [@media(min-width:1020px)]:[@media(max-width:1300px)]:mb-230
        "
      >
        {/* Title */}
        <div className="flex justify-center">
          <h2 className="text-[22px] sm:text-[28px] md:text-[40px] h-20 -mt-30 bg-black px-6 py-4 rounded-[30px] text-white shadow-xl flex items-center gap-2">
            <span>Innovate your Brand with Us</span>
            <span className="text-[#4AB3DD]">Today!</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row xl:ml-35 lg:ml-25 gap-10 items-center mt-20">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            src={Innovate}
            alt=""
            className="w-[90%] sm:w-[70%] md:w-[400px] lg:w-[420px] rounded-[20px] shadow-[15px_13px_0_#7ED6FE]"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col gap-4 lg:w-[60%] text-center lg:text-left "
          >
            <h2 className="text-[#03B7FF] text-[24px] sm:text-[28px] font-medium">
              Why Choose Us ?
            </h2>
            <h3 className="text-[28px] sm:text-[35px] md:text-[40px] font-medium leading-tight">
              Unmatched Creativity, Expertise, and <br /> Results for Every Client
            </h3>
            <p className="text-[16px] sm:text-[18px] font-medium">
              This phrase represents a commitment to delivering exceptional value
              through innovative ideas, professional skill, and consistent
              performance.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-20">
          {/* RED LINE */}
          <img
            src={RedLine}
            className="
              absolute z-0 pointer-events-none
              hidden xl:block xl:top-50 xl:w-full xl:h-[185px] xl:rotate-0
            "
          />

      
          <div className="relative z-20 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-12 xl:flex-nowrap ">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
             className="relative z-20 w-[316px] h-[431px] bg-[#002762] text-white rounded-[30px] flex flex-col items-center mt-6 sm:mt-10 md:mt-10 lg:mt-0"

            >
              <div className="w-14 h-14 mt-[37.8px] rounded-full bg-[#CEE9E9] border-2 border-white flex items-center justify-center">
                <img src={Tick} alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-[400px] mt-6 text-center">
                Creative Excellence
              </h3>
              <p className="text-[18px] font-[400px] mt-6 text-center px-6">
                Our team crafts stunning visuals that capture attention and tell
                compelling brand stories effectively
              </p>
              <div className="bg-white w-[258px] h-[38px] mt-[102.06px] rounded-[10px]"></div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative z-20 w-[316px] h-[431px] bg-[#1B2637] text-white rounded-[30px] flex flex-col items-center pt-10 mt-6 sm:mt-10 md:mt-10 lg:-mt-10"

            >
              <div className="w-16 h-16 rounded-full bg-[#CEE9E9] border-2 border-white flex items-center justify-center">
                <img src={Tick} alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-[400px] mt-6 text-center">
                Cutting-edge Technology
              </h3>
              <p className="text-[18px] font-[400px] mt-6 text-center px-6">
                We leverage the latest technologies in AI and development to
                enhance your business operations and user experiences.
              </p>
              <div className="bg-white w-[258px] h-[38px] mt-[64.26px] rounded-[10px]"></div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
             className="relative z-20 w-[316px] h-[431px] bg-[#0A3131] text-white rounded-[30px] flex flex-col items-center mt-6 sm:mt-10 md:mt-10 lg:mt-0"

            >
              <div className="w-14 h-14 mt-[37.8px] rounded-full bg-[#CEE9E9] border-2 border-white flex items-center justify-center">
                <img src={Tick} alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-[20px] font-[400px] mt-6 text-center">
                Global Reach
              </h3>
              <p className="text-[18px] font-[400px] mt-6 text-center px-6">
                Our services are accessible worldwide, ensuring diverse
                expectations are met with creativity and precision.
              </p>
              <div className="bg-white w-[258px] h-[38px] mt-[75.6px] rounded-[10px]"></div>
            </motion.div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-16 pr-0 md:pr-40">
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[#0F081B] text-white rounded-[10px] w-[180px] h-[49px] text-[18px] font-medium"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Clients */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-32 xl:mt-150 sm:mt-50 mt-40 mb-24  [@media(min-width:1020px)]:[@media(max-width:1300px)]:mt-130">
        
        <h2 className="text-[#03B7FF] text-xl sm:text-2xl md:text-3xl font-medium">
          What Clients Say
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4 sm:mt-6 mb-12">
          Client Testimonials that Speak Volumes
        </h3>

       
        <div className="flex flex-col gap-6 mt-20 md:flex-row md:flex-wrap md:justify-center md:gap-10 lg:gap-16 xl:gap-20">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="border w-[350px] mx-auto h-auto md:h-72 rounded-2xl flex flex-col bg-[#E9F2FF] p-6"
          >
            <p className="text-sm sm:text-base md:text-[18px] font-normal mb-4 md:mb-6">
              Their software development team delivered exactly what we
              needed—fast, reliable, and with exceptional quality. Highly
              recommended!
            </p>
            <div className="mt-auto flex flex-col items-start gap-1">
              <span className="text-sm sm:text-base md:text-[18px] font-normal">
                Abhiram
              </span>
              <img src={Star} alt="Rating" className="w-20 h-4" />
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="border w-[350px] mx-auto h-auto md:h-72 rounded-2xl flex flex-col bg-[#F4E9FF] p-6"
          >
            <p className="text-sm sm:text-base md:text-[18px] font-normal mb-4 md:mb-6">
              Amazing UI/UX work! They transformed our ideas into a smooth,
              modern, and user-friendly experience.
            </p>
            <div className="mt-auto flex flex-col items-start gap-1">
              <span className="text-sm sm:text-base md:text-[18px] font-normal">
                Binil Joseph
              </span>
              <img src={Star} alt="Rating" className="w-20 h-4" />
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
            className="border w-[350px] mx-auto h-auto md:h-72 rounded-2xl flex flex-col bg-[#FFFCE9] p-6"
          >
            <p className="text-sm sm:text-base md:text-[18px] font-normal mb-4 md:mb-6">
              Creative designs, professional communication, and outstanding
              results. Our brand looks better than ever.
            </p>
            <div className="mt-auto flex flex-col items-start gap-1">
              <span className="text-sm sm:text-base md:text-[18px] font-normal">
                Isthifan
              </span>
              <img src={Star} alt="Rating" className="w-20 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Chooseus;
