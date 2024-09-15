import React from 'react'

function About() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-serif font-medium title-font mb-4 text-gray-900">About</h1>
                    <p class="lg:w-2/3 mx-auto font-serif leading-relaxed text-base">E-commerce websites feature detailed product pages that display images, descriptions, prices, and specifications. </p>
                </div>
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src="https://readwrite.com/wp-content/uploads/2022/03/Evolution-of-Ecommerce-%E2%80%93-A-Glimpse-of-Its-Past-Present-and-Future.jpg"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        
      </h1>
      <p className="mb-8 leading-relaxed font-serif">
      An e-commerce website is a digital platform that facilitates the buying and selling of products or services over the internet. These platforms provide a seamless online shopping experience, enabling customers to browse a range of products, make purchases, and interact with customer service—all from the comfort of their homes or mobile devices.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex font-serif text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 font-serif inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About