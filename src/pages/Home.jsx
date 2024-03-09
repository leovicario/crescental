import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import Articles from '../components/articles/Articles.jsx'
import Side from '../components/Side.jsx'


import {Divider} from "@nextui-org/react";



const Home = () => {
  return (
    <div className="w-full relative min-h-full flex flex-col">
      <Header/>

      <div className="flex">
          <div className="px-16 pt-8 pb-16 flex flex-col gap-8">
            <h2 className="text-6xl pt-2 font-semibold tracking-tight text-gray-200">Latest insights 🐅</h2>
            <Divider className="mb-2"></Divider>
            <Articles />
        </div>

       <Side />

       </div>
       <Footer/>
    </div>
  )
}
export default Home