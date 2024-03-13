
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ErrorPage = () => {
  return (
    <div className="h-screen">
          <Header />
        <div className="w-screen p-72 h-64 flex flex-col place-content-center text-center">
            <h1 className="text-8xl font-bold p-8">Oops! 🐅</h1>
            <p className="text-2xl">You're lost.</p>
        </div>
        <Footer />
    </div>
  )
}

export default ErrorPage