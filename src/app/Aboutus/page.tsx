import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-25  mt-9 flex justify-center items-center">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6acSGoff5-G_LbgBkUQI1JGbpDJa4dVT8Q&s" 
    alt="Description of image" 
    className="w-full max-w-4xl h-auto object-contain mt-0" 
  />
</div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-green-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <h1 className='text-black font-semibold text-4xl'>Why choose us?</h1>
            <p className="leading-relaxed text-lg">When it comes to choosing a plant or garden supplier, you want to be sure you're working with a trusted, reliable partner who offers quality, expertise, and a commitment to sustainability. At our plant nursery and gardening service, we believe in providing more than just plants—we offer solutions, inspiration, and support for all your gardening needs.
            Here are a few reasons why choosing us will make your gardening journey easier and more enjoyable:

Premium Quality Plants: We carefully select and grow only the healthiest, highest-quality plants to ensure they thrive in your garden or home.

Expert Guidance: Whether you're a seasoned gardener or just starting out, our knowledgeable staff is here to offer personalized advice to help you succeed.

Sustainable Practices: We're committed to eco-friendly and sustainable practices, from water-efficient irrigation systems to organic growing methods.

Wide Selection: From flowering plants and shrubs to indoor greenery and trees, we have a diverse range of plants to suit every space and style.

Customer-Centric Service: Our goal is to ensure your satisfaction, offering flexible delivery options and expert planting services to make your experience seamless.
            </p>
 <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Iqra Ikram</h2>
            <p className="text-gray-500"></p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
