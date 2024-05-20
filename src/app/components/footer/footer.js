import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import Logo from '../../assets/evoloog.png' 

const footer = () => {
  return (
    <div className={`container-fluid p-0 ${style.container}`}>
      <div className={`row m-0 ${style.row}`}>
        <div className={`col-lg-6 ${style.Footer}`}>
        <Image 
                    src={Logo} 
                    alt="Description of the image" 
                    width={100} 
                    height={100} 
                    className={`${style.logoImg}`}
                  />
            <span>
              <CiBasketball className={style.Icon1} />
            </span>
            <span>
              <FaInstagram className={style.Icon1} />
            </span>
            <span>
              <FaLinkedinIn className={style.Icon1} />
            </span>
        </div>
        <div className={`col-lg-6 ${style.Footer}`}>
             <p className={style.footertext}>©2024 Evo · All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
