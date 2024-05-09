import React from 'react'
import Video from 'next-video';
import styles from '../Banner/banner.module.css'
import Header from '../Header/index'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";



function index() {
  return (
    <>
     <div className={`container-fluid  ${styles.container}`}>
      <Header />
      <div className={`row ${styles.row}`}>
          <div className={`col-lg-7 ${styles.Col}`}>
                <h1 className={styles.BannerHeading}>Crafting Digital <span className={styles.BannerHeading2}>Expriences</span> </h1>
                <p className={styles.BannerText}>From MVP to scale. <br /> elevate your business with expert UX/UI Design for <br />  startups and enterprises. </p>
                 <div className={styles.icons} data-aos="fade-up">  
                    <span ><CiBasketball className={styles.Icon1} /></span>
                    <span><FaInstagram className={styles.Icon1} /></span>
                    <span><FaLinkedinIn className={styles.Icon1} /></span>
                 </div>
          </div>
      </div>
      <video
                src="https://evo-design.demo.logomish.com/videos/1(6).mp4"
                autoPlay
                muted
                loop
                className={styles.video}
            />
    
     </div>
       <div className={`row ${styles.Rowtext}`}>
          <div className={`col-12 ${styles.colText}`}>
            <span>We create unexpected connections between creative people with a passion, and creative businesses on a mission, so they can make the best work of their lives.</span>
          </div>
       </div>
       </>
  )
}

export default index