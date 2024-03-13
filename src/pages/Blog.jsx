import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Articles from '../components/articles/Articles.jsx'

const Blog = () => {
  return (
    <div className="w-full min-h-screen">
        <Header />
        <div className="p-16">
            <Articles />
        </div>
      
        <Footer />
    </div>
  )
}

export default Blog