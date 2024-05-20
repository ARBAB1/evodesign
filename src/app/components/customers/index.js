import React from 'react'
import style from './customers.module.css'
import Image from 'next/image'
import Image1 from '../../assets/Images/member1.png'
import Image2 from '../../assets/Images/member2.png'

const index = () => {
  return (
    <div className={style.Container}>
        
        <div className={`row ${style.row}`}>
            <div className={`col-lg-12 p-5 ${style.title}`}>
                 <div className={style.content}>
                <div className={`row  ${style.profleCustomer}`}>
                    <div className={`col-lg-6  ${style.Images}`}>
                        <div>
                            <Image src={Image1} alt="Description of the image" className={style.Image1} />       
                            <Image src={Image2} alt="Description of the image" className={style.Image2} />
                            <Image src={Image1} alt="Description of the image" className={style.Image3} />
                            <Image src={Image2} alt="Description of the image" className={style.Image4} />
                        </div>
                    </div>
                        <div className='col-lg-6'>
                            <p className={style.para}>more than 54 satisfied customers</p>
                        </div>
                    <div className={style.text}>
                         <h1>Beginning as enthusiasts with a shared passion for crafting something truly exceptional for others, we merged our professional expertise and empathy to cultivate a distinctive collaborative environment.</h1>
                         <button>GET A QOUTE</button>
                    </div>
                    
                </div>
            </div>
            </div>
           
    
        </div>
        
    </div>
  )
}

export default index