import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Build beautiful UIs with Team_5</h1>
          <p className="text-lg text-gray-600 mb-6">Quickly scaffold your frontend with Tailwind and Vite — ready to customize.</p>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a href="#get-started" className="px-6 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-900">Get Started</a>
            <a href="#learn" className="px-6 py-3 bg-white border border-gray-200 text-gray-800 rounded-md hover:bg-gray-50">Learn More</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-64 bg-black rounded-lg flex items-center justify-center text-white">
            <span className="text-xl font-medium">Hero image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
