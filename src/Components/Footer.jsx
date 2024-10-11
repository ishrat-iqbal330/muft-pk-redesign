import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-purple-300 max-w-7xl mx-auto  ">
        <div className="py-10 mx-auto sm:px-2 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-3xl font-semibold max-w-[70vw]">Upgrade your skills by subscribing to our courses</h3>
          <div>
          <h4>Muft.pk</h4>
          <button>Contact Us</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#1a0d29] via-[#0d1033] to-[#1a0d29] w-full">
        <div className="left text-white">
          <h3>Muft.pk</h3>
          <p>Copyright © 2024 Muft.pk. All Rights Reserved</p>
        </div>
        <div className="right">
          <div>
            <input type="text" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
