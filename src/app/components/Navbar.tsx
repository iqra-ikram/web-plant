
import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
   <div>
    
    <nav className='bg-green-600 h-12 py-2 px-3 flex justify-evenly items-center text-white' >
    <img className='rounded-full' src="data:image/jpeg;base64,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" width="60px" height="50px" alt="" />

   <h1 className='text-black-400 font-bold text-2xl'>
    
    <a href="">Plant zone</a>
   </h1>
   <div className=''>
    <ul className='flex space-x-20'>
        <li><Link href = "/" className= "hover:text-yellow-400">home</Link></li>
        <li><Link href ="/Aboutus" className='hover:text-yellow-400'>About us</Link></li>
        <li><Link href="/contactus" className='hover:text-yellow-400'>Contact us</Link></li>
        <li><Link href="/privacypolicy" className='hover:text-yellow-400'>Privacy Policy</Link></li>
    </ul>
   </div>







   <ul>
    <li><Link href="/login" className='hover:text-yellow-400'>Login</Link></li>
   </ul>
    </nav>
 
  

</div>
  )
}

export default Navbar