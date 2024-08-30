import { useState } from "react";
import React from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-gray-800 ">
                <a href="#" className="text-primary ">
                  FITLIFE
                </a>
              </h1>
            </div>
            <div className="hidden md:flex space-x-6 ml-80 font-popins text-sm gap-6">
              <a href="#" className="hover:text-primary">
                Home
              </a>
              <a href="#" className="hover:text-primary">
                Workout
              </a>
              <a href="#" className="hover:text-primary">
                Health
              </a>
              <a href="#" className="hover:text-primary">
                Ayurveda
              </a>
              <a href="#" className="hover:text-primary">
                Publications
              </a>
            </div>
            <div className="flex items-center relative">
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <div className="md:hidden">
                
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-800 hover:text-primary focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                </div>
              
              </div>
             
            </div>
            
          </div>
          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                  <div className="py-2 mt-2 bg-white rounded shadow-md ">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Workout
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Health
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Ayurveda
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Publications
                    </a>
                  </div>
                </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
