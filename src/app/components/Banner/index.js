import React from "react";
import Video from "next-video";
import styles from "../Banner/banner.module.css";
import Header from "../Header/index";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import BannerImage from "../../../../public/Videos/banner1.mp4";

function index() {
  return (
    <>
      {/* <Header /> */}
      <div className={`container-fluid  ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          <div className={`col-lg-12  ${styles.Col}`}>
            <div className={styles.Heading}>
              <h1 className={styles.BannerHeading}> Crafting Digital </h1>
              <h1 className={styles.BannerHeading2}>Expriences</h1>{" "}
              <p className={`col-lg-6 ${styles.BannerText}`}>
                From MVP to scale.  elevate your business with expert
                 UX/UI Design for  startups and enterprises.{" "}
              </p>
            </div>
            <div className={styles.icons} data-aos="fade-up">
              <span>
                <CiBasketball className={styles.Icon1} />
              </span>
              <span>
                <FaInstagram className={styles.Icon1} />
              </span>
              <span>
                <FaLinkedinIn className={styles.Icon1} />
              </span>
            </div>
          </div>
          <div className={`col-12 ${styles.VideoContainer}`}>
            <video
              src="https://evo-design.demo.logomish.com/videos/1(6).mp4"
              autoPlay
              muted
              loop
              className={styles.Video}
            />
          </div>
        </div>
      </div>
      <div className={`row ${styles.Rowtext}`}>
        <div className={`col-12 ${styles.colText}`}>
          <span>
            We create unexpected <span> connections between creative people</span> with a
              <span> passion, and creative </span> businesses on a <span> mission </span>,so they can make the
            best work of their <span> lives </span>.
          </span>
        </div>
      </div>
    </>
  );
}

export default index;
