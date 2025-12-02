import React from "react";
import { motion } from "framer-motion";
import Tech from '../../assets/About/Tech.png';
import Journey from '../../assets/About/Journey.png';
import Joy from '../../assets/About/Joy.png';
import AboutMain from '../../assets/About/AboutMain.jpg';
import { Link} from "react-router-dom";




function About() {
  return (

    <>     
    

     <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[560px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}     
          transition={{ duration: 1.2 }}
          src={AboutMain}
          alt="Hero"
          className="w-full h-full object-cover brightness-[0.6]"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}   
            transition={{ duration: 0.7 }}
            className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] text-[#03B7FF] font-extrabold"
          >
            Discover
          </motion.h1>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}  
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] text-white font-medium max-w-3xl"
          >
            Innovating Creativity and Technology for Global Brands
          </motion.h2>
        </div>
      </div>

      {/* who we are */}
    <div className="flex flex-col lg:flex-row items-center bg-[#E0E0E050] gap-8 p-5 lg:p-10 rounded-xl
                2xl:flex-row"> 
  <motion.img
    initial={{ opacity: 0, x: -80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    src={Tech}
    alt="Tech"
    className="w-full sm:w-[260px] md:w-[330px] lg:w-[500px] h-auto"
  />

  <div className="flex flex-col gap-4 w-full text-[15px] sm:text-[17px] md:text-[18px] font-medium leading-relaxed
                  lg:w-full 2xl:w-1/2">
    <p>
      At Zeedz Innovations, we’ve empowered brands through cutting-edge design and technology solutions, delivering measurable results that drive growth and enhance visibility in competitive markets.
    </p>

    <p>
      Zeedz Innovations combines creativity with advanced technology to craft exceptional solutions tailored for our clients. From engaging animations to AI-powered software, we’ve helped numerous brands elevate their presence and achieve significant business growth across various sectors, ensuring they remain at the forefront of their industries.
    </p>
  </div>
</div>


        <div className="flex justify-end mt-6 lg:mt-10">
          <Link to="/contact">
            <button className="bg-[#0F081B] text-white rounded-[10px] w-[180px] h-[45px] text-[18px] font-medium">
              Contact
            </button>
          </Link>
        </div>
      

      {/* Experience */}
<div className="bg-[#003B82] py-10 overflow-hidden mt-20">
  <div
    className="flex gap-10 items-center animate-scrollX"
    style={{
      width: "200%",              
      animation: "scrollX 15s linear infinite"
    }}
  >
    
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-10 items-center w-full justify-around text-white">

        <div className="flex flex-col items-center min-w-[150px]">
          <h2 className="text-[36px] md:text-[40px] font-bold">2+</h2>
          <p className="text-[16px] md:text-[18px] font-medium mt-2">Years of Experience</p>
        </div>

        <div className="flex flex-col items-center min-w-[150px]">
          <h2 className="text-[36px] md:text-[40px] font-bold">10+</h2>
          <p className="text-[16px] md:text-[18px] font-medium mt-2">Team Members</p>
        </div>

        <div className="flex flex-col items-center min-w-[150px]">
          <h2 className="text-[36px] md:text-[40px] font-bold">25+</h2>
          <p className="text-[16px] md:text-[18px] font-medium mt-2">Projects Delivered</p>
        </div>

        <div className="flex flex-col items-center min-w-[150px]">
          <h2 className="text-[36px] md:text-[40px] font-bold">15+</h2>
          <p className="text-[16px] md:text-[18px] font-medium mt-2">Happy Clients</p>
        </div>

      </div>
    ))}
  </div>
</div>


      {/* our journey*/}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full lg:w-[80%] mx-auto my-20 px-4">
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <h2 className="text-[#03B7FF] text-[24px] sm:text-[28px] md:text-[32px] font-medium">Our Journey</h2>

          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-medium leading-tight"
          >
            A History of Innovation and Growth
          </motion.h3>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-relaxed">
            Founded in 2025, Zeedz Innovations began as a small team driven by passion for creativity and technology.
            Today, we have expanded globally, continuously evolving to stay ahead of market trends.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={Journey}
          alt="Journey"
          className="w-full sm:w-[260px] md:w-[330px] lg:w-[450px] h-auto"
        />
      </div>

      {/* contact */}
      <div className="text-center my-20 px-4">
        <h1 className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[50px] font-semibold">
          Ready to Elevate Your Brand?
        </h1>

        <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium pt-5 max-w-3xl mx-auto leading-relaxed">
          Contact us today and explore how Zeedz Innovations can turn your ideas into impactful digital solutions.
        </p>

        <div className="pt-10 flex justify-center">
         <Link to="/contact"><button className="text-[16px] sm:text-[18px] rounded-full w-[200px] h-[60px] bg-[#68CFF4] font-medium">
            Get Started
          </button></Link> 
        </div>

        <motion.img
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          src={Joy}
          alt="Joy"
          className="w-full sm:w-[260px] md:w-[420px] lg:w-[620px] h-auto mt-10 mx-auto"
        />
      </div>
    </>
  );
}

export default About;

