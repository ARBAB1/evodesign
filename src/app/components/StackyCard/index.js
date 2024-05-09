import React from 'react'
import style from './stacky.module.css'


const data = [
  {
    title : "MOBILE APP",
    para: 'WHAT WE DO',
    ButtonText : "GET A QUOTE",
    Video : "https://evo-design.demo.logomish.com/videos/1(1).mp4",
    box1:"UX research",
    box2:"MVP for startups",
    box3:"usability texting",
    box4:"user interface design",
    box5:"interactive prototypes",
    box6:'user flows'

  },
  {
    title : "WEB APP",
    para: 'WHAT WE DO',
    ButtonText : "GET A QUOTE",
    Video : "https://evo-design.demo.logomish.com/videos/1(2).mp4",
    box1:"UX research",
    box2:"MVP for startups",
    box3:"usability texting",
    box4:"user interface design",
    box5:"interactive prototypes",
    box6:'user flows'

  },
  {
    title : "WEBFLOW & WORDPRESS",
    para: 'WHAT WE DO',
    ButtonText : "GET A QUOTE",
    Video : "https://evo-design.demo.logomish.com/videos/1(3).mp4",
    box1:"UX research",
    box2:"MVP for startups",
    box3:"usability texting",
    box4:"user interface design",
    box5:"interactive prototypes",
    box6:'user flows'

  },
  {
    title : "BRANDING",
    para: 'WHAT WE DO',
    ButtonText : "GET A QUOTE",
    Video : "https://evo-design.demo.logomish.com/videos/1(4).mp4",
    box1:"UX research",
    box2:"MVP for startups",
    box3:"usability texting",
    box4:"user interface design",
    box5:"interactive prototypes",
    box6:'user flows'

  }

]

const Cards = (item) => {
  return(
    <div className={`${style.cardContainer}`}>
      <div  style={{backgroundColor:item.color}} className={`${style.card}`}>
        <div className={`${style.TextContainer}`}>
            <div className={`${style.paraText}`}>{item.para}</div>
            <div className={`${style.heading}`}>{item.title}</div>
             <div className={` ${style.boxes}`}>
                <div className={` ${style.box}`}>{item.box1}</div>
                <div className={` ${style.box}`}>{item.box2}</div>
                <div className={` ${style.box}`}>{item.box3}</div> 
                <div className={`${style.box}`}>{item.box4}</div>
                <div className={` ${style.box}`}>{item.box5}</div>
                <div className={` ${style.box}`}>{item.box6}</div>
             </div>
            <div className={`${style.button}`}>{item.ButtonText}</div>
        </div>
        <video
        src={item.Video}
        autoPlay
        muted
        loop
        className={style.video}
        /> 
        
        
      {/* <div>{item.para}</div>
      <div>{item.title}</div>
      <div>{item.ButtonText}</div>
      <video
        src="https://evo-design.demo.logomish.com/videos/1(1).mp4"
        autoPlay
        muted
        loop
        className={style.video}
        /> */}
        </div>
    </div>
  )
}


const index = () => {
  return (

  <main className={`${style.main}`}>
    {data.map((item , index) =>{
      return <Cards key={index} {...item} />
    })}
  </main>

//  <div className={`${style.StackyContainer}`}>
//       <div className={`${style.StackyCard}`}  data-aos="fade-up">
//         <div className={`${style.content}`}>
//           ada
//         </div>

//           <video
//                     src="https://evo-design.demo.logomish.com/videos/1(1).mp4"
//                     autoPlay
//                     muted
//                     loop
//                     className={style.video}
//                 />
//       </div>
//       <div className={`${style.StackyCard}`}  data-aos="fade-up">
//         <div className={`${style.content}`}>
//           ada
//         </div>

//           <video
//                     src="https://evo-design.demo.logomish.com/videos/1(2).mp4"
//                     autoPlay
//                     muted
//                     loop
//                     className={style.video}
//                 />
//       </div>
//       <div className={`${style.StackyCard}` }  data-aos="fade-up">
//         <div className={`${style.content}`}>
//           ada
//         </div>

//           <video
//                     src="https://evo-design.demo.logomish.com/videos/1(3).mp4"
//                     autoPlay
//                     muted
//                     loop
//                     className={style.video}
//                 />
//       </div>
//       <div className={`${style.StackyCard}`}  data-aos="fade-up">
//         <div className={`${style.content}`}>
//           ada
//         </div>

//           <video
//                     src="https://evo-design.demo.logomish.com/videos/1(4).mp4"
//                     autoPlay
//                     muted
//                     loop
//                     className={style.video}
//                 />
//       </div>
     
// </div> 
  )
}

export default index