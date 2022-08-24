import React from "react";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";

function Footer() {
  return (
    <>
      <div className="mt-12 bg-[#1A181E]">
        <div className="flex flex-col mx-40">
          <div className="flex justify-between text-[#FFFFFF] text-sm mt-10">
            <div>
              <img src={logo} alt="" />
            </div>
            <div>
              <p className="mb-3">Contact</p>
              <p>FAQ's</p>
            </div>
            <div>
              <p className="mb-3">Tutorials</p>
              <p>Blog</p>
            </div>
            <div>
              <p className="mb-3">Privacy</p>
              <p>Banned Items</p>
            </div>
            <div>
              <p className="mb-3">About</p>
              <p>Jobs</p>
            </div>
            <div>
              <p className="mb-3">Facebook</p>
              <p className="mb-3">Twitter</p>
              <p>Linkedin</p>
            </div>
          </div>
          <div className="mt-10 border-2 w-full border-white"></div>
          <div className="flex justify-between text-[#FFFFFF] text-sm my-8">
            <div>
              <p>Dukaan 2020, All rights reserved.</p>
            </div>
            <div className="flex items-center">
              <div>
                <p>Made in</p>
              </div>
              <div>
                <img src={flag} className="w-5 pl-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
