"use client";
import React, { useState, useEffect, useRef } from "react";
import style from './progressbar.module.css';
import { throttle } from 'lodash';

const ProgressBarComponent = () => {
    const [progress, setProgress] = useState(0);
    const componentRef = useRef(null);

    useEffect(() => {
        const handleScroll = throttle(() => {
            if (componentRef.current) {
                const component = componentRef.current;
                const componentHeight = component.offsetHeight;
                const componentTop = component.getBoundingClientRect().top + window.scrollY;
                const scrollTop = window.scrollY;
                const componentBottom = componentTop + componentHeight;

                if (scrollTop + window.innerHeight >= componentTop && scrollTop <= componentBottom) {
                    const scrolled = Math.min((scrollTop - componentTop + window.innerHeight) / componentHeight * 70, 100);
                    setProgress(scrolled > 0 ? scrolled : 0);
                } else if (scrollTop + window.innerHeight < componentTop) {
                    setProgress(0); // Reset progress if component is not yet in view
                }
            }
        }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={componentRef} className={style.barContainer} style={{ position: 'relative', height: '100vh' , left:'50%' }}>
            <div className={style.progressContainer}>
                <div
                    className={style.progressBar}
                    style={{ height: `${progress}%` }}
                    aria-label={`Scroll progress: ${progress}%`}
                ></div>
            </div>
            {/* <div ref={componentRef} style={{ position: 'relative', height: '10vh', width:'10vw', borderRadius:50, left:'50%' }}>
            <div className={style.progressContainer2}>
                <div
                    className={style.progressBar2}
                    style={{ height: `${progress}%` }}
                    aria-label={`Scroll progress: ${progress}%`}
                ></div>
            </div>
        </div> */}
        </div>
    );
}

export default ProgressBarComponent;
