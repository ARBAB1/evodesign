import React from 'react';
import style from './header.module.css'
import Logo from '../../assets/evoloog.png'
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
    return (
        // <div className={`container-fluid ${style.container}`}>
            <div className={`container ${style.container}`}>
                    <div className={`row ${style.row}`}>
                        <div className={`col-lg-12 col-md-12 ${style.logo}`}>
                            <Image src={Logo} alt="Description of the image" width={50} height={50} className={`${style.logoImg}`} />
                            <Link href="/Form">
                               <button className={style.quotebtn}>GET A QUOTE</button>
                           </Link>
                        </div>
                        <div className={`col-md-12 ${style.Responsive}`}>
                        <button  className={style.quotebtn2}><Link href="/Form" className={style.Link}>GET A QUOTE</Link></button>
                        </div>
                    </div>
            </div>
        // </div>
    );
}

export default Index;
