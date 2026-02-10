import ServiceMain from '../../assets/Service/ServiceMain.jpg'
import Img1 from '../../assets/Service/Img1.png'
import Img2 from '../../assets/Service/Img2.png'
import Img3 from '../../assets/Service/Img3.png'
import Img4 from '../../assets/Service/Img4.png'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 }
  })
};

function Service() {
   const variants = [
    { hidden: { opacity: 0, x: -50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1 } },
    { hidden: { opacity: 0, x: 50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1 } },
    { hidden: { opacity: 0, y: 50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } },
    { hidden: { opacity: 0, y: -50, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } },
  ];
  return (
   <>
   <div className="relative w-full h-[65vh] sm:h-[70vh] lg:h-[75vh] max-h-[800px] overflow-hidden">
        
        {/* BG IMAGE */}
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }} 
          src={ServiceMain}
          alt="Service"
          className="w-full h-full object-cover brightness-[0.6]"
        />

        
        <div className="absolute inset-0 bg-black/50"></div>

        
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
        >
          <h1 className="text-[#03B7FF] font-bold 
            text-[34px] sm:text-[40px] md:text-[48px] xl:text-[60px] ">
            Services
          </h1>

          <h2 className="text-white font-medium mt-3
            text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[36px] 
            max-w-[1000px] ">
            Innovative and scalable digital solutions to build your future
          </h2>
        </motion.div>
      </div>
   

  <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} 
        className="flex flex-col items-center justify-center text-center mt-10 mb-10 px-4"
      >
        <h1 className="
          text-[#03ACEF] font-normal mt-15
          text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px]
        ">
          Core features that set us apart
        </h1>

        <h2 className="
          font-normal mt-3 
          text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
          max-w-[600px] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[950px]
        ">
          We deliver innovative, high-quality digital solutions that combine modern design, scalable software,
          and intelligent automation. Our user-focused approach ensures every product is visually compelling,
          highly functional, and built for long-term success.
        </h2>
      </motion.div>



<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10 px-6 md:px-20 py-10 mt-[113px]">

  {/* 1 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col items-center gap-6
    
               [@media(min-width:1051px)]:flex-row
               [@media(min-width:1051px)]:justify-end
               [@media(min-width:1051px)]:items-start"
  >
    <div className="max-w-[380px] text-center [@media(min-width:1051px)]:text-right p-4 order-2 [@media(min-width:1051px)]:order-1">
      <h4 className="text-[18px] text-[#03B7FF]">Modern & Scalable Software</h4>
      <p className='pt-4'>
        We develop secure, high-performance mobile and web applications tailored exactly to your business needs.
      </p>
    </div>

    <img
      src={Img1}
      alt=""
      className="w-[215px] h-[272px] object-cover rounded-md order-1 [@media(min-width:1051px)]:order-2"
    />
  </motion.div>

  {/* 2 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col items-center gap-6
               [@media(min-width:1051px)]:flex-row
               [@media(min-width:1051px)]:items-start"
  >
    <img
      src={Img2}
      alt=""
      className="w-[215px] h-[201px] mt-17 rounded-md"
    />

    <div className="max-w-[380px] text-center [@media(min-width:1051px)]:text-left p-4 mt-20">
      <h4 className="text-[18px] text-[#03B7FF]">Creative & Impactful Design</h4>
      <p className='pt-4'>
        We bring ideas to life with meaningful visuals—from branding to marketing designs—made to elevate your identity.
      </p>
    </div>
  </motion.div>

  {/* 3 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col items-center gap-6
               [@media(min-width:1051px)]:flex-row
               [@media(min-width:1051px)]:justify-end
               [@media(min-width:1051px)]:items-start"
  >
    <div className="max-w-[380px] text-center [@media(min-width:1051px)]:text-right p-4 order-2 [@media(min-width:1051px)]:order-1">
      <h4 className="text-[18px] text-[#03B7FF]">User-Focused UI/UX</h4>
      <p className='pt-4'>
        We design clean, intuitive, and engaging user experiences that keep people connected to your product.
      </p>
    </div>

    <img
      src={Img3}
      alt=""
      className="w-[215px] h-[201px] object-cover rounded-md order-1 [@media(min-width:1051px)]:order-2"
    />
  </motion.div>

  {/* 4 */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col items-center gap-6
               [@media(min-width:1051px)]:flex-row
               [@media(min-width:1051px)]:items-start"
  >
    <img
      src={Img4}
      alt=""
      className="w-[215px] h-[272px] object-cover rounded-md"
    />

    <div className="max-w-[380px] text-center [@media(min-width:1051px)]:text-left p-4">
      <h4 className="text-[18px] text-[#03B7FF]">Future-Ready Machine Learning</h4>
      <p className='pt-4'>
        We build intelligent ML solutions for automation, prediction, analytics, and business optimization.
      </p>
    </div>
  </motion.div>
</div>

  <div className="px-4"> {/* padding for small screens */}
      <motion.div
        className="flex items-center justify-center mt-24"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }} // triggers when 50% in view
      >
        <Link to="/contact">
          <button className="text-[25px] font-bold w-[391px] h-[90px] rounded-md hover:bg-gray-900 text-white bg-[#0B0B0B]">
            Get Started
          </button>
        </Link>
      </motion.div>
</div> <div className='w-full h-7 mt-24 bg-[#D9D9D9]'>
      
    </div>



<div className="flex flex-col items-center justify-center text-center px-6 mt-20 md:mt-32">
<motion.h2
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false, amount: 0.3 }}
transition={{ duration: 0.6 }}
className="text-3xl sm:text-4xl md:text-5xl text-[#03ACEF] font-normal"
>
Key features overview
</motion.h2>


<motion.p
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false, amount: 0.3 }}
transition={{ duration: 0.7, delay: 0.2 }}
className="text-lg sm:text-xl md:text-2xl font-normal mt-4 max-w-2xl md:max-w-3xl"
>
A complete suite of scalable, automated, and user-centric digital solutions engineered for
seamless performance and long-term reliability.
</motion.p>
</div>
<div className="mt-[227px] mb-[151px] px-4 ">

  
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.4 }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } }
    }}
    className="border-2 rounded-xl w-full max-w-[1400px] h-auto xl:h-[650px] mx-auto p-4"
  >

    <div
      className="
        grid

       
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-1

        /* 900–1279px */
        lg:grid-cols-2

       
        xl:grid-cols-2

        gap-y-16 sm:gap-y-20 lg:gap-y-24
        gap-x-6 sm:gap-x-10
      "
    >

      {[
        {
          number: "1",
          title: "End-to-end development",
          color: "#FFE090",
          xlClass: "xl:ml-[113px] xl:-mt-[75px] ",
          text: "From initial planning to final deployment, our team handles everything with seamless coordination and consistent quality."
        },
        {
          number: "2",
          title: "Advanced security and reliability",
          color: "#CEF298",
          xlClass: "xl:mr-[189px] xl:-mt-[113px]",
          text: "Every product we build follows industry-standard security practices, ensuring your data and users stay protected"
        },
        {
          number: "3",
          title: "Performance-driven designs",
          color: "#90ECFF",
          xlClass: "xl:ml-[113px] xl:mt-[37px]",
          text: "We create stunning, fast, and user-centric designs that improve engagement, boost conversions, and strengthen your brand identity."
        },
        {
          number: "4",
          title: "User-friendly digital experiences",
          color: "#F490FF",
          xlClass: "xl:mr-[189px] xl:-mt-[37px]",
          text: "Every interface we design is optimized for clarity, simplicity, and usability—ensuring an effortless experience for your customers."
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
          }}
          className={`
            relative bg-white h-[250px] shadow-xl rounded-2xl

           
            w-[95%]
            sm:w-[90%]
            
            md:w-[60%]
            lg:w-[420px]
            xl:w-[450px]

            mx-auto

            ${item.xlClass}
          `}
        >

         
          <span
            className="
              absolute text-4xl font-extrabold top-3

              -left-6     
              sm:-left-8  
              
              
              md:-left-9  
              lg:-left-10 
              xl:-left-10 
            "
          >
            {item.number}
          </span>

          {/* Heading*/}
          <h2
            className="h-[60px] rounded-t-2xl p-4 text-[20px] font-bold"
            style={{ backgroundColor: item.color }}
          >
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-[18px] font-normal pt-10 px-6">
            {item.text}
          </p>

        </motion.div>
      ))}

    </div>
  </motion.div>
</div>



   </>
  )
}

export default Service
