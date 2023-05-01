import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="h-[182px] flex items-center justify-center w-full">
      <div className="w-fit flex flex-col gap-7">
        <div className="flex gap-[35px]">
            <BsFacebook style={{fontSize: '30px'}}/>
            <AiFillInstagram style={{fontSize: '30px'}}/>
            <AiOutlineTwitter style={{fontSize: '30px'}}/> 
            <AiFillGithub style={{fontSize: '30px'}}/>
        </div>
        <div className="w-full flex items-center justify-center">
            <p className=" text-xs">Copyright ©2020 All rights reserved </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
