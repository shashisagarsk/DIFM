import React from "react";

export const Footer = () => {
  return (
    <div>
  <footer className="bg-gray-900 py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-white">
        
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
        </div>
        
      </div>
      <hr className="w-full color-white" />
      <div className="text-center py-6">
        <p className="text-white text-sm">
          © 2023 Your Company Name. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</div>

  );
};
export default Footer;
