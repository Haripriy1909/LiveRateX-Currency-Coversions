import React from 'react'

import BgImage from '../Component/Home/BgImage'
import HomeBottomtext from '../Component/Home/HomeBottomtext'
import Homeherotext from '../Component/Home/Homeherotext'
import HomeBtn from '../Component/Home/HomeBtn'

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    
      <div className="absolute inset-0 -z-10">
        <BgImage />
      </div>

   
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <Homeherotext />
        <HomeBtn />
        <HomeBottomtext />
      </div>
    </div>
  )
}

export default Home
