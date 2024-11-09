import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
  <Navbar/>
  <div className="relative w-full h-25 flex justify-center items-center">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54n5hZwxf3WYSvdPyPNnISVxYX5vEsz5iDg&s" 
    alt="Description of image" 
    className="w-full max-w-2xl h-auto object-contain mt-0 mb-6" 
  />
</div>
  
   <h3 className='font-semibold flex justify-center items-center'>We’d love to hear from you! Whether you have a question about our plants, <br />
  need gardening advice, or want to learn more about our services, <br />we’re here to help.
  Get in Touch: <br />
 <br /> <br />
📞 Phone:
Call us at [0312345678]
Our team is available Monday to Friday, 9:00 AM - 5:00 PM. <br />

📧 Email:
Send us an email at [nursersuryplant34@email.com]
We aim to respond within 24 hours. <br /> <br />

Visit Our Nursery:
[@abcroadkarachi]
Come see our beautiful plants in person and get expert advice from our friendly staff. We’re open:
Monday to Saturday: 9:00 AM – 6:00 PM
Sunday: Closed
  </h3>
    </div>
  )
}

export default page
