import React from 'react'
import style from './video.module.css'

const index = () => {
  return (
    <div>
        <video
                src="https://evo-design.demo.logomish.com/videos/1(3).mp4"
                autoPlay
                muted
                loop
                className={style.video}
            />
    </div>
  )
}

export default index