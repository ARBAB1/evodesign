"use client";
import React, { useState, useEffect } from "react";
import style from "./progress.module.css";
import "./scroll.css";
import { throttle } from 'lodash';
import ProgressBar from '../progressbar/index'


const index = () => {

  const [isMinium, setMinium] = useState(false);
  const [isPodium, setPodium] = useState(false);
  const [isGrackle, setGrackle] = useState(false);
  const [isPlankk, setPlankk] = useState(false);
  const [isItrate, setItrate] = useState(false);

  const handleMinium = () => {
      setMinium(!isMinium);
      setPodium(false);
      setGrackle(false);
      setPlankk(false);
      setItrate(false);
    
  }
 const HandlePodium = () => {
  setPodium(!isPodium);
  setMinium(false);
  setGrackle(false);
  setPlankk(false);
  setItrate(false);
 }
 const HandleGrackle = () => {
  setGrackle(!isGrackle);
  setMinium(false);
  setPodium(false);
  setPlankk(false);
  setItrate(false);
 }
 const HandlePlankk = () => {
  setPlankk(!isPlankk);
  setMinium(false);
  setPodium(false);
  setGrackle(false);
  setItrate(false);
 }

 const HandleItrate = () => {
  setItrate(!isItrate);
  setMinium(false);
  setPodium(false);
  setGrackle(false);
  setPlankk(false);
 }
  return (
    <>
      <div className={`container ${style.container}`}>
        <div className={`row ${style.row}`}>
          <div className={`col-lg-12 ${style.title}`}>
            <h1 className={style.Heading}>PROGRESS</h1>
            <p className={style.para}>
              Get a deeper understanding of how we bring ideas to life where
              meticulous steps and innovative approaches define our design
              ethos. Explore the intricate journey through which we bring ideas
              to life, ensuring a seamless transformation from concept to a
              captivating reality.
            </p>
          </div>
             <div className={`row ${style.ProgressRow}`}>
            <div className={`col-5`}>
              <div className={style.timeline}>
                <div className={`${style.timelineItem} `} onMouseEnter={handleMinium}>
                  <h2 style={{fontSize:38}} className={isMinium ? style.color : ""}>Immerse</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandlePodium}>
                  <h2 style={{fontSize:38}} className={isPodium ? style.color :""}>Plan</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandleGrackle}>
                  <h2 style={{fontSize:38}} className={isGrackle ? style.color :""}>Create</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandlePlankk}>
                  <h2 style={{fontSize:38}} className={isPlankk ? style.color :""}>Launch</h2>
                 
                </div>
                <div className={style.timelineItem} onMouseEnter={HandleItrate}>
                  <h2 style={{fontSize:38}} className={isPlankk ? style.color :""}>Iterate</h2>
                </div>
              </div>
            </div>
            <div className={`col-2 ${style.Bar}`}>
              <ProgressBar />
            </div>
            <div className={`col-5`}>
              <div className={style.timeline2}>
                <div className={style.timelineItem2}>
                  <p>
                    Understand your needs, users’ pain points, and business
                    industry.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Scope breakdown activities, project brief, team allocation,
                    and project kickoff.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    This is where the magic happens and our team will gather
                    inspiration to create an incredible product for you!
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Final deliverable with documentation and project closure
                    activities.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Envision the next phase of the project, tracking analytics,
                    user feedback, and iterative improvements.
                  </p>
                </div>
              </div>
            </div>

           
            </div>


            {/* responsive section */}
            <div className={`row ${style.ProgressRowResponsive}`}>
            <div className={`col-2 ${style.Bar}`}>
              <ProgressBar />
            </div>
            <div className={`col-4`}>
              <div className={style.timeline}>
                <div className={`${style.timelineItem} `} onMouseEnter={handleMinium}>
                  <h2 style={{fontSize:38}} className={isMinium ? style.color : ""}>Immerse</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandlePodium}>
                  <h2 style={{fontSize:38}} className={isPodium ? style.color :""}>Plan</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandleGrackle}>
                  <h2 style={{fontSize:38}} className={isGrackle ? style.color :""}>Create</h2>
                </div>
                <div className={style.timelineItem} onMouseEnter={HandlePlankk}>
                  <h2 style={{fontSize:38}} className={isPlankk ? style.color :""}>Launch</h2>
                 
                </div>
                <div className={style.timelineItem} onMouseEnter={HandleItrate}>
                  <h2 style={{fontSize:38}} className={isPlankk ? style.color :""}>Iterate</h2>
                </div>
              </div>
            </div>

            <div className={`col-6`}>
              <div className={style.timeline2}>
                <div className={style.timelineItem2}>
                  <p>
                    Understand your needs, users’ pain points, and business
                    industry.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Scope breakdown activities, project brief, team allocation,
                    and project kickoff.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    This is where the magic happens and our team will gather
                    inspiration to create an incredible product for you!
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Final deliverable with documentation and project closure
                    activities.
                  </p>
                </div>
                <div className={style.timelineItem2}>
                  <p>
                    Envision the next phase of the project, tracking analytics,
                    user feedback, and iterative improvements.
                  </p>
                </div>
              </div>
            </div>

           
            </div>
        </div>
      </div>
    </>
  );
};

export default index;
