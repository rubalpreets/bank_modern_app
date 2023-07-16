import React from "react";
import { logo } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import Logo from "./Logo";

const Links = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <span
        className={`${styles.paragraph} xs:text-[18px] text-[14px] text-white font-semibold`}
      >
        {title}
      </span>
      {links.map((link) => {
        return (
          <a
            href={link.link}
            className={`font-poppins font-normal text-dimWhite sm:text-[16px] text-[11px]  cursor-pointer`}
            key={link.name}
          >
            {link.name}
          </a>
        );
      })}
      {/* {console.log(props.title)} */}
    </div>
  );
};

const SocialMediaLinks = ({ id, icon, link }) => {
  return (
    <div className="w-full justify-between" key={id}>
      <a href={link} className="h-[20px] w-[20px]">
        <img src={icon} className="h-[20px] min-w-[20px] object-contain" />
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-col`}>
      <div className="flex md:flex-row flex-col justify-between w-full">
        <div className="flex flex-col xs:flex-row md:flex-col xs:justify-between justify-center xs:items-start items-center">
          {/* <img src={logo} className="w-[270px] h-[70px]" alt="logo" /> */}
          <Logo tsize="text-[20px]" lsize="70px" />
          <p
            className={`${styles.paragraph} max-w-[312px] md:mt-5 mt-0 ml-5 xs:mt-0 mt-[20px]`}
          >
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row w-full justify-between md:ml-[15%] md:mt-0 mt-10">
          <Links {...footerLinks[0]} key={footerLinks[0].title} />
          <Links {...footerLinks[1]} key={footerLinks[1].title} />
          <Links {...footerLinks[2]} key={footerLinks[2].title} />
        </div>
      </div>
      <div className={`flex flex-row w-full bg-[#3F3E45] h-[1px] mt-10`}></div>
      <div className="flex sm:flex-row  flex-col-reverse justify-between items-center mt-10 w-full mb-10">
        <p className={`${styles.paragraph} sm:text-[16px] text-[14px]`}>
          copywrite &#169; 2023 BerserkBank. All Rights Reserved.
        </p>
        <div className={`flex flex-row  w-[176px] min-h-[20px] sm:mb-0 mb-10`}>
          {socialMedia.map((socialMedia) => {
            return <SocialMediaLinks {...socialMedia} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
