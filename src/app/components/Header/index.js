import React from 'react';
import style from './header.module.css'
import Logo from '../../assets/evoloog.png'
import Image from 'next/image';

const Index = () => {
    return (
        <div className={`container ${style.container}`}>
            <div className={`row ${style.row}`}>
                <div className={`col-lg-12 ${style.logo}`}>
                <Image 
                    src={Logo} 
                    alt="Description of the image" 
                    width={50} 
                    height={50} 
                    className={`${style.logoImg}`}
                  />
                    <button  className={style.quotebtn}>GET A QUOTE</button>
                </div>
              
            </div>
        </div>
    );
}

export default Index;
