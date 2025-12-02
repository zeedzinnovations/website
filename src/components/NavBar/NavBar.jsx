import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo/Logo.png";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const isActive = (p) => {
    if (p === "/home") return path === "/" || path === "/home";
    return path === p;
  };

  const showButton = path === "/" || path === "/home";

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBackground = scroll
    ? "bg-[rgba(0,0,0,0.55)] backdrop-blur-lg"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-999 
      flex items-center justify-between 
      px-5 sm:px-8 md:px-10 py-4
      transition-all duration-300
      ${navBackground}
      text-white`}
    >
      {/* Logo */}
      <div className="flex items-center ml-30">
        <img src={Logo} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 " />
      </div>

      
      <ul
        className="
        hidden lg:flex items-center gap-10
        bg-white/10 backdrop-blur-md 
        rounded-full px-8 py-4 
        font-semibold text-[18px] xl:text-[20px]
      "
      >
        <li>
          <Link
            to="/home"
            className={`px-5 py-2 rounded-full transition 
              ${
                isActive("/home")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={`px-5 py-2 rounded-full transition 
              ${
                isActive("/about")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            className={`px-5 py-2 rounded-full transition 
              ${
                isActive("/services")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={`px-5 py-2 rounded-full transition 
              ${
                isActive("/contact")
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }
            `}
          >
            Contact
          </Link>
        </li>
      </ul>

   
  <Link to="/contact">
<div className="hidden lg:flex">
  {showButton && (
  
      <button
        className="bg-[#474AFE54] text-white h-10 w-[150px]
        rounded-3xl font-semibold border border-white"
      >
        Get Started
      </button>
    
  )}
</div></Link>


      {/*  Menu Button */}
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={34} /> : <Menu size={34} />}
      </button>

      {/*  Menu List */}
      {open && (
        <div
          className="
          absolute top-[70px] left-0 w-full
          bg-[rgba(0,0,0,0.9)] backdrop-blur-lg
          flex flex-col items-center gap-6 py-6
          font-semibold text-[22px] text-white
          lg:hidden
        "
        >
          <Link
            to="/home"
            onClick={() => setOpen(false)}
            className={isActive("/home") ? "bg-white text-black px-6 py-2 rounded-full" : ""}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={isActive("/about") ? "bg-white text-black px-6 py-2 rounded-full" : ""}
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className={isActive("/services") ? "bg-white text-black px-6 py-2 rounded-full" : ""}
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className={isActive("/contact") ? "bg-white text-black px-6 py-2 rounded-full" : ""}
          >
            Contact
          </Link>

          {showButton && (
           
            <button
              className="bg-[#474AFE54] text-white h-10 w-[150px]
              rounded-3xl font-semibold border border-white"
            >
              Get Started
            
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
