import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
<Navbar/>
<div className="relative w-full h-25 flex justify-center items-center">
  <img 
    src="https://static7.depositphotos.com/1000152/715/i/450/depositphotos_7151451-stock-photo-plant-in-hands.jpg" 
    alt="Description of image" 
    className="w-full max-w-2xl h-auto object-contain mt-0 mb-6" 
  />
</div>
  
  <h3 className='font-semibold text-center mt-10'>At Plant House, we respect your privacy and are committed to protecting your personal information. <br />
 This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with us in person or online. </h3>
    </div>
  )
}

export default page
