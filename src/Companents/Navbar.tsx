import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
   
    return (
        <div className=" bg-gray-100 text-blue-950 shadow-xl rounded-b-2xl sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4 ">
            



                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 ">
                    <a href="#home">home</a>
                    <a href="#ContactInfo">About</a>
                    <a href="#ContactInfo">Contacttc</a>
                </div>

                {/* tugma */}
                <button
                    className="
          lg:hidden 
          md:hidden 
          text-2xl 
           lg:cursor-pointer
           animate-pulse
           rounded-sm"
                    onClick={() => {
                        setOpen(!open)
                    }}
                >
                    ☰
                    Menu
                </button>
                <p>MILLIY DEVELOPER</p>

            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white px-4 pb-4 transition-all duration-300  ${open ? "block" : "hidden"
                    }`}
            >

                <a className="block p-2" href="">Home</a>
                <a className="block p-2" href="">About</a>
                <a className="block p-2" href="">Projects</a>
            </div>
        </div>
    );
}
export default Navbar