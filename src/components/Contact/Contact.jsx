import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import ContactMain from "../../assets/Contact/ContactMain.jpg";
import ContactLap from "../../assets/Contact/ContactLap.png";

import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);

    // Send email using EmailJS
    emailjs
      .send(
        "service_8bcfb15",   
        "template_991fiwe",    
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "tLjSzbJkj3uf7ZdP7"      
      )
      .then(
        (result) => {
          alert("Message Sent Successfully! ");
          setForm({ name: "", email: "", phone: "", message: "" });
          setLoading(false);
        },
        (error) => {
          alert("Failed to send message ");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <>
     
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[430px] 2xl:h-[480px]"
      >
        <img
          src={ContactMain}
          alt="Contact Main"
          className="w-full h-full object-cover brightness-[0.6] blur-[1px]"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] text-[#03B7FF] font-bold">
            Contact Us
          </h1>
          <h2 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[30px] xl:text-[32px] text-white font-medium mt-3">
            Always Here to Help You
          </h2>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-20 2xl:px-32 mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-[600px] xl:max-w-[620px] 2xl:max-w-[680px]"
          >
            <h4 className="text-[26px] sm:text-[32px] font-normal text-[#68CFF4]">
              Get in Touch
            </h4>
            <h2 className="text-[32px] sm:text-[42px] font-normal mt-2">
              Get In Touch With Us
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-relaxed mt-5">
              Have a question, need support, or want to bring your next project
              to life? Our team is here to help.
            </p>

            <div className="space-y-10 mt-10">
              {/* PHONE */}
              <div className="flex items-start gap-6 sm:gap-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-[#E5F0FE] flex items-center justify-center">
                  <FaPhoneAlt className="text-black text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[28px] font-semibold">
                    Phone Number
                  </h3>
                  <p className="text-[16px] sm:text-[18px] font-medium">
                    9442041197
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-6 sm:gap-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-[#E5F0FE] flex items-center justify-center">
                  <IoMailSharp className="text-black text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className="text-[22px] sm:text-[28px] font-semibold">
                    Email Address
                  </h3>
                  <p className="text-[16px] sm:text-[18px] font-medium">
                    zeedzinnovationsofficial@gmail.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-6 sm:gap-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-[#E5F0FE] flex items-center justify-center">
                  <FaLocationDot className="text-black text-2xl sm:text-3xl" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[22px] sm:text-[28px] font-semibold">
                    Our Locations
                  </h3>
                  <p className="text-[18px] font-medium text-[#68CFF4]">
                    Register Office:
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-medium max-w-[520px]">
                    2nd Floor, SKCL Tech Square, Chennai - 600032
                  </p>
                  <p className="text-[18px] font-medium text-[#68CFF4]">
                    Administer Office:
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-medium max-w-[430px]">
                    Panachamoodu, Thiruvananthapuram - 695505
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={sendMail}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#013A70] text-white rounded-lg p-8 shadow-xl w-full max-w-[520px] md:max-w-[560px] lg:max-w-[500px] xl:max-w-[540px] 2xl:max-w-[600px] mx-auto"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-white rounded-sm h-[60px] w-full mt-4 text-lg px-5 text-black"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-white rounded-sm h-[60px] w-full mt-6 text-lg px-5 text-black"
              required
            />
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="bg-white rounded-sm h-[60px] w-full mt-6 text-lg px-5 text-black"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="bg-white rounded-sm h-[200px] w-full mt-6 text-lg px-5 py-4 text-black"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFC800] rounded-sm h-[60px] w-full mt-6 text-xl font-medium text-black"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            <p className="text-[22px] sm:text-[25px] mt-10">Follow Us:</p>

            <div className="flex items-center gap-5 pt-6">
              <a href="https://www.instagram.com/zeedzinnovations/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#E5F0FE] hover:bg-[#d7e3f3] flex items-center justify-center">
                <CiInstagram className="text-black text-2xl sm:text-3xl" />
              </a>
              <a href="twitter" className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#E5F0FE] hover:bg-[#d7e3f3] flex items-center justify-center">
                <FaXTwitter className="text-black text-2xl sm:text-3xl" />
              </a>
              <a href="facebook" className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#E5F0FE] hover:bg-[#d7e3f3] flex items-center justify-center">
                <FaFacebookF className="text-black text-2xl sm:text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/zeedz-innovations-b00b85391/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#E5F0FE] hover:bg-[#d7e3f3] flex items-center justify-center">
                <FaLinkedinIn className="text-black text-2xl sm:text-3xl" />
              </a>
            </div>
          </motion.form>
        </div>
      </div>

      {/* last section*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-[5cm] text-center px-4"
      >
        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-medium">
          Ready to Elevate Your Brand?
        </h1>
        <p className="text-[16px] sm:text-[18px] font-medium pt-5 max-w-3xl mx-auto">
          Contact us today to explore how Zeedz Innovations can transform your
          ideas into impactful solutions.
        </p>
        <img src={ContactLap} alt="" className="w-full sm:w-[650px] md:w-[850px] h-auto mt-10 mx-auto" />
      </motion.div>
    </>
  );
}

export default Contact;
