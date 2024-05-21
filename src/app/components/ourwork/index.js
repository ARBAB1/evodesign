"use client";
import React, { useState, useEffect , useRef } from "react";
import style from "./ourwork.module.css";
import Image from "next/image";
import WorkImage from "../../assets/Images/work1.jpg";
import WorkImage2 from "../../assets/Images/work2.jpg";
import WorkImage3 from "../../assets/Images/work3jpg.jpg";
import WorkImage4 from "../../assets/Images/work4.jpg";


const index = () => {





  const [isMinum, setMinum] = useState(false);
  const [isPodium, setPodium] = useState(false);
  const [isGrackle, setGrackle] = useState(false);
  const [isPlankk, setPlankk] = useState(false);

  const handleMinum = () => {
    setMinum(!isMinum);
    setPodium(false);
    setGrackle(false);
    setPlankk(false);
  };

  useEffect(() => {}, []);
  const handlePodium = () => {
    setPodium(!isPodium);
    setMinum(false);
    setGrackle(false);
    setPlankk(false);
  };
  const handleGrackle = () => {
    setGrackle(!isGrackle);
    setMinum(false);
    setPodium(false);
    setPlankk(false);
  };
  const handlePlankk = () => {
    setPlankk(!isPlankk);
    setMinum(false);
    setPodium(false);
    setGrackle(false);
  };
  return (
    <div className={`container ${style.container}`}>
      <div className={`row ${style.row}`}>
        <h1 className={style.textHeading}>OUR WORK</h1>
        <p className={style.textWork}>
          Elevating businesses through our UI/UX design services, we specialize
          in crafting extraordinary digital products. With a fusion of design
          thinking and daring creativity, our team strives to deliver
          heart-racing experiences for our clients
        </p>
      </div>
      <div
        className={`row ${style.WorkRow}`}
        onMouseEnter={handleMinum}
        onMouseLeave={() => setMinum(false)}
        
      >
        <div className={`col-lg-1  ${style.h1Work}`}>
          <h2>01</h2>
        </div>
        <div className={`col-lg-5`}  >
          {isMinum ? (
            <Image
              src={WorkImage}
              alt="Movable"
              width={300}
              height={200}
             
              className={isMinum ? style.Image : style.NonMinum}
             
            />
          ) : (
            ""
          )}
        </div>
        <div className={`col-lg-6  ${style.content}`}>
          <h1 className={isMinum ? style.Minum : style.MinumAnimated}>Minum</h1>
          {isMinum ? (
            <>
              <p className={isMinum ? style.AnimatedText : style.Text}>
                Minum is a company that simplifies energy consumption, where it
                replaces your current energy distributor with a subscription
                plan with a fixed price. With the single account, you don't have
                to worry about your distributor's invoice. Membership is 100%
                online, simple, personalized and digital.
              </p>
              <div>
                <span
                  className={isMinum ? style.AnimatedButton : style.WorkButton}
                >
                  Website
                </span>
                <span
                  className={isMinum ? style.AnimatedButton : style.WorkButton}
                >
                  Saas
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`row ${style.WorkRow}`}
        onMouseEnter={handlePodium}
        onMouseLeave={() => setPodium(false)}
      >
        <div className={`col-lg-1  ${style.h1Work}`}>
          <h2>02</h2>
        </div>
        <div className={`col-lg-5 `}>
          {isPodium ? (
            <Image
              src={WorkImage3}
              alt="Description of the image"
              width={300}
              height={200}
              className={isPodium ? style.Image : style.NonMinum}
            />
          ) : (
            ""
          )}
        </div>
        <div className={`col-lg-6  ${style.content}`}>
          <h1 className={isPodium ? style.Minum : style.MinumAnimated}>
            Podium
          </h1>
          {isPodium ? (
            <>
              <p className={isPodium ? style.AnimatedText : style.Text}>
                Minum is a company that simplifies energy consumption, where it
                replaces your current energy distributor with a subscription
                plan with a fixed price. With the single account, you don't have
                to worry about your distributor's invoice. Membership is 100%
                online, simple, personalized and digital.
              </p>
              <div>
                <span
                  className={isPodium ? style.AnimatedButton : style.WorkButton}
                >
                  Website
                </span>
                <span
                  className={isPodium ? style.AnimatedButton : style.WorkButton}
                >
                  Saas
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`row ${style.WorkRow}`}
        onMouseEnter={handleGrackle}
        onMouseLeave={() => setGrackle(false)}
      >
        <div className={`col-lg-1  ${style.h1Work}`}>
          <h2>03</h2>
        </div>
        <div className={`col-lg-5 `}>
          {isGrackle ? (
            <Image
              src={WorkImage2}
              alt="Description of the image"
              width={300}
              height={200}
              className={isGrackle ? style.Image : style.NonMinum}
            />
          ) : (
            ""
          )}
        </div>
        <div className={`col-lg-6  ${style.content}`}>
          <h1 className={isGrackle ? style.Minum : style.MinumAnimated}>
            Grackle
          </h1>
          {isGrackle ? (
            <>
              <p className={isGrackle ? style.AnimatedText : style.Text}>
                Minum is a company that simplifies energy consumption, where it
                replaces your current energy distributor with a subscription
                plan with a fixed price. With the single account, you don't have
                to worry about your distributor's invoice. Membership is 100%
                online, simple, personalized and digital.
              </p>
              <div>
                <span
                  className={
                    isGrackle ? style.AnimatedButton : style.WorkButton
                  }
                >
                  Website
                </span>
                <span
                  className={
                    isGrackle ? style.AnimatedButton : style.WorkButton
                  }
                >
                  Saas
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`row ${style.WorkRow}`}
        onMouseEnter={handlePlankk}
        onMouseLeave={() => setPlankk(false)}
      >
        <div className={`col-lg-1  ${style.h1Work}`}>
          <h2>04</h2>
        </div>
        <div className={`col-lg-5 `}>
          {isPlankk ? (
            <Image
              src={WorkImage4}
              alt="Description of the image"
              width={300}
              height={200}
              className={isPlankk ? style.Image : style.NonMinum}
            />
          ) : (
            ""
          )}
        </div>
        <div className={`col-lg-6  ${style.content}`}>
          <h1 className={isPlankk ? style.Minum : style.MinumAnimated}>
            Plankk
          </h1>
          {isPlankk ? (
            <>
              <p className={isPlankk ? style.AnimatedText : style.Text}>
                Minum is a company that simplifies energy consumption, where it
                replaces your current energy distributor with a subscription
                plan with a fixed price. With the single account, you don't have
                to worry about your distributor's invoice. Membership is 100%
                online, simple, personalized and digital.
              </p>
              <div>
                <span
                  className={isPlankk ? style.AnimatedButton : style.WorkButton}
                >
                  Website
                </span>
                <span
                  className={isPlankk ? style.AnimatedButton : style.WorkButton}
                >
                  Saas
                </span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>



      
      {/* //////responsive/////// */}
      <div className={`row ${style.WorkRow2}`}>
        <div className={`col-lg-12  ${style.content}`}>
          <h1 className={style.Minum}>
          01 Minum
          </h1>

          <>
            <p className={style.AnimatedText}>
              Minum is a company that simplifies energy consumption, where it
              replaces your current energy distributor with a subscription plan
              with a fixed price. With the single account, you don't have to
              worry about your distributor's invoice. Membership is 100% online,
              simple, personalized and digital.
            </p>
            <div>
              <span className={style.AnimatedButton}>Website</span>
              <span className={style.AnimatedButton}>Saas</span>
            </div>
          </>
        </div>
        <div className={`col-lg-12 col-md-12 col-sm-12  mt-3`}>
          <Image
            src={WorkImage}
            alt="Description of the image"
            className={style.Image2}
          />
        </div>
      </div>
      <div className={`row ${style.WorkRow2}`}>
        <div className={`col-lg-12  ${style.content}`}>
          <h1 className={style.Minum}>
            01 Minum
          </h1>

          <>
            <p className={style.AnimatedText}>
              Minum is a company that simplifies energy consumption, where it
              replaces your current energy distributor with a subscription plan
              with a fixed price. With the single account, you don't have to
              worry about your distributor's invoice. Membership is 100% online,
              simple, personalized and digital.
            </p>
            <div>
              <span className={style.AnimatedButton}>Website</span>
              <span className={style.AnimatedButton}>Saas</span>
            </div>
          </>
        </div>
        <div className={`col-lg-12 col-md-12 col-sm-12  mt-3`}>
          <Image
            src={WorkImage}
            alt="Description of the image"
            className={style.Image2}
          />
        </div>
      </div>
      <div className={`row ${style.WorkRow2}`}>
        <div className={`col-lg-12  ${style.content}`}>
          <h1 className={style.Minum}>
            01 Minum
          </h1>

          <>
            <p className={style.AnimatedText}>
              Minum is a company that simplifies energy consumption, where it
              replaces your current energy distributor with a subscription plan
              with a fixed price. With the single account, you don't have to
              worry about your distributor's invoice. Membership is 100% online,
              simple, personalized and digital.
            </p>
            <div>
              <span className={style.AnimatedButton}>Website</span>
              <span className={style.AnimatedButton}>Saas</span>
            </div>
          </>
        </div>
        <div className={`col-lg-12 col-md-12 col-sm-12  mt-3`}>
          <Image
            src={WorkImage}
            alt="Description of the image"
            className={style.Image2}
          />
        </div>
      </div>
      <div className={`row ${style.WorkRow2}`}>
        <div className={`col-lg-12  ${style.content}`}>
          <h1 className={style.Minum}>
            01 Minum
          </h1>

          <>
            <p className={style.AnimatedText}>
              Minum is a company that simplifies energy consumption, where it
              replaces your current energy distributor with a subscription plan
              with a fixed price. With the single account, you don't have to
              worry about your distributor's invoice. Membership is 100% online,
              simple, personalized and digital.
            </p>
            <div>
              <span className={style.AnimatedButton}>Website</span>
              <span className={style.AnimatedButton}>Saas</span>
            </div>
          </>
        </div>
        <div className={`col-lg-12 col-md-12 col-sm-12  mt-3`}>
          <Image
            src={WorkImage}
            alt="Description of the image"
            className={style.Image2}
          />
        </div>
      </div>
   
    </div>
  );
};

export default index;
