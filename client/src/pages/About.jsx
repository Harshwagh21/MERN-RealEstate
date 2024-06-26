import React from 'react'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl my-8 ">
        <div className="sm:w-1/2 p-2 mx-28">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" alt="Image" />
          </div>
        </div>
        <div className="sm:w-1/2 p-3">
          <div className="text-justify">
            <h2 className="my-4 font-bold text-3xl py-6 sm:text-4xl ">About  <span className="text-indigo-500">Wagh</span><span className='text-slate-800'>Estates</span>
            </h2>
            <p className="text-slate-700 mb-4">
            Wagh Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
            </p>
            <p className="text-slate-700 mb-4">
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
            </p>
            <p className="text-slate-700 mb-4">
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
