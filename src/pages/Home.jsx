import React from 'react'

function Home() {
  return (
    <div>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center shadow rounded"
        alt="hero"
        src="https://www.teletalkapps.com/wp-content/uploads/2023/08/ecommerce-bg.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font font-serif sm:text-4xl text-3xl mb-4 font-medium text-amber-400">
        E-commerce
        <br className="hidden font-serif lg:inline-block" />
       landing page
      </h1>
      <p className="mb-8 font-serif leading-relaxed">
      E-commerce websites feature detailed product pages that display images, descriptions, prices, and specifications. These listings also often include customer reviews and ratings, which help buyers make informed decisions.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex font-serif text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Add To Cart
        </button>
        
      </div>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://rimalalmisk.com/cdn/shop/files/f780f5cbb35a9230515acc4b6665ed89.webp?v=1700560343"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest font-serif  text-xs title-font font-medium text-gray-400 mb-1">
            Perfume
            </h2>
            <h1 className="title-font font-serif text-lg font-medium text-gray-900 mb-3">
            Shams Al Emarat Khususi
            </h1>
            <p className="leading-relaxed font-serif mb-3">
              This fragrance combines the warmth of vanilla, the crispness of apple, and the zest of mandarin orange. The heart of the scent is filled with rich ...
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-purple-500 font-serif inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://i.ytimg.com/vi/FX8DDERj8lQ/maxresdefault.jpg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest font-serif text-xs title-font font-medium text-gray-400 mb-1">
            Laptop
            </h2>
            <h1 className="title-font font-serif text-lg font-medium text-gray-900 mb-3">
            Apple MacBook Pro M3
            </h1>
            <p className="leading-relaxed font-serif mb-3">
            new MacBook Pro M3 in Space Black, the fastest MacBook yet! After over a month of using the M3 MacBook Pro, this laptop is more than just an iterative chipset ...
            </p>
            <div className="flex items-center flex-wrap">
              <a className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://media.pakprice.pk/596/B7sIinHb5HJtwTosfHdO8W3VIxAR3GIM1Y07sXiE.jpeg"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest font-serif text-xs title-font font-medium text-gray-400 mb-1">
             Iphone
            </h2>
            <h1 className="title-font font-serif text-lg font-medium text-gray-900 mb-3">
            Apple Iphone 15 pro max
            </h1>
            <p className="leading-relaxed font-serif mb-3">
            Brand, Apple, Model, Apple iPhone 15 Pro Max, Capacity, 256GB, Display, Super Retina XDR Display, 6.7-inch (Diagonal) All-Screen OLED Display, ...
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-purple-500 font-serif inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
     <img  className="w-12 h-12 text-white font-serif p-2 rounded-full" src="https://www.servcorp.co.uk/media/34561/e-commerce-img.jpeg" alt="" />
      <span className="ml-3 font-serif text-xl">E Commerce</span>
    </a>
    <p className="text-sm text-black sm:ml-4 font-serif sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      Waseem Baloch--
      <a
        href="https://github.com/waseembaloch21"
        className="text-black ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
       Github
      </a>
    </p>
    <span className="inline-flex sm:ml-auto font-serif sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </a>
    </span>
  </div>
</footer>




    </div>
  )
}

export default Home