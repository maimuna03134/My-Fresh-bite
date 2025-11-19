import React from 'react';
import Container from "../../components/Container/Container";
import RestaurantTeam from '../restaurantTeam/RestaurantTeam';
import { Link } from 'react-router';

const About = ({index}) => {
    return (
      <Container>
        {/* Section: What is Natto? */}
        <section
          class="max-w-7xl mx-auto px-4 py-12"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <h2 class="text-center font-bold text-xl mb-6 hover:text-amber-600 hover:scale-110 transition-all">
            What is Natto?
          </h2>
          <p class="text-xs text-center max-w-4xl mx-auto mb-12 hover:text-orange-600 transition-all">
            Vivamus tortor nibh, lobortis id, faucibus at, tempus at, dui. Nunc
            nulla. Proin scelerisque augue. Nam ullamcorper. Phasellus id massa.
            Pellentesque nisi. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc augue. Aenean sed
            justo non leo vehicula lacinia. Praesent ipsum libero, auctor ac,
            tempus nec, cation tempor nec, justo cretus sino zunumus lorem
            munumfu lobturro natuban uhicha lrachi sucuung from munual
            praesental curn oom con tease zolell lorem luum pausm posuere orci
            utji.
          </p>

          {/* <!-- Four icons with text below them --> */}
          <div
            class="flex justify-center gap-20 flex-wrap max-w-5xl mx-auto"
            data-aos="fade-right"
          >
            {/* <!-- Search --> */}
            <div class="text-center max-w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-3 h-10 w-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 17.5a7.5 7.5 0 004.65-1.85z"
                />
              </svg>
              <h5 class="mb-1 text-sm font-medium hover:text-amber-600 hover:scale-110 transition-all">
                Search
              </h5>
              <p class="text-xs hover:text-orange-600 transition-all">
                Nunc et risus. Etiam a nibh turpis Phasellus dignissim metus.
              </p>
            </div>

            {/* <!-- Choose --> */}
            <div class="text-center max-w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-3 h-10 w-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 16l4-4-4-4m5 8h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5m-5 0a2 2 0 110-4 2 2 0 010 4zm5 8a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <h5 class="mb-1 text-sm font-medium hover:text-amber-600 hover:scale-110 transition-all">
                Choose
              </h5>
              <p class="text-xs hover:text-orange-600 transition-all">
                Nunc et risus. Etiam a nibh turpis Phasellus dignissim metus.
              </p>
            </div>

            {/* <!-- Pay --> */}
            <div class="text-center max-w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-3 h-10 w-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14v4m0 4h.01"
                />
              </svg>
              <h5 class="mb-1 text-sm font-medium hover:text-amber-600 hover:scale-110 transition-all">
                Pay
              </h5>
              <p class="text-xs hover:text-orange-600 transition-all">
                Nunc et risus. Etiam a nibh turpis Phasellus dignissim metus.
              </p>
            </div>

            {/* <!-- Enjoy --> */}
            <div class="text-center max-w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto mb-3 h-10 w-10 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h5 class="mb-1 text-sm font-medium hover:text-amber-600 hover:scale-110 transition-all">
                Enjoy
              </h5>
              <p class="text-xs hover:text-orange-600 transition-all">
                Nunc et risus. Etiam a nibh turpis Phasellus dignissim metus.
              </p>
            </div>
          </div>

          <div class="flex justify-center mt-8" data-aos="fade-zoom-in">
            <Link
              to="/menu"
              class="bg-orange-400 text-white px-8 py-2 rounded text-sm font-semibold hover:bg-orange-500 transition"
            >
              Order Now
            </Link>
          </div>
        </section>

        <hr class="border-gray-300" />

        {/* <!-- Section: Our App --> */}
        <section class=" px-6 py-12 flex flex-col md:flex-row gap-8 items-center">
          {/* <!-- Form + buttons --> */}
          <div class="md:w-1/2 w-full" data-aos="fade-up-right">
            <h3 class="font-semibold text-lg mb-6 hover:text-amber-600  transition-all">
              Our App
            </h3>
            <p class="mb-6 text-xs max-w-md hover:text-orange-600 transition-all">
              We'll send you a link, open it on your phone to download the app.
            </p>
            <form class="flex max-w-md mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                class="border border-gray-300 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                class="bg-orange-400 text-white px-4 py-2 rounded-r text-sm font-semibold hover:bg-orange-500 transition"
              >
                Send Link
              </button>
            </form>
            <div class="flex gap-4 mt-4">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                class="h-10 cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                class="h-10 cursor-pointer"
              />
            </div>
          </div>

          {/* <!-- Video --> */}
          <div class=" md:w-1/2 w-full" data-aos="fade-up-left">
            <div class="relative w-full pb-[56.25%] overflow-hidden rounded-2xl shadow-md">
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                
                src="https://www.youtube.com/embed/GSjhVMJtbgo?si=AFJlGn2q1IOl6Qbn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        <hr class="border-gray-300" />

        {/* <!-- Section: Active in 30 Countries --> */}
        <section
          class="max-w-7xl mx-auto px-6 py-12 text-xs text-gray-600"
          data-aos="fade-left"
          data-aos-delay={index * 100}
        >
          <h4 class="font-bold text-lg mb-8 hover:text-amber-600 hover:scale-y-110 transition-all">
            Active in 30 Countries
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-y-4 gap-x-8 max-w-5xl mx-auto leading-tight">
            <span className="hover:text-orange-600 transition-all">India</span>
            <span className="hover:text-orange-600 transition-all">
              Australia
            </span>
            <span className="hover:text-orange-600 transition-all">USA</span>
            <span className="hover:text-orange-600 transition-all">Italy</span>
            <span className="hover:text-orange-600 transition-all">Canada</span>
            <span className="hover:text-orange-600 transition-all">Iraq</span>
            <span className="hover:text-orange-600 transition-all">Libya</span>
            <span className="hover:text-orange-600 transition-all">UK</span>
            <span className="hover:text-orange-600 transition-all">Turkey</span>
            <span className="hover:text-orange-600 transition-all">
              Ireland
            </span>
            <span className="hover:text-orange-600 transition-all">Poland</span>
            <span className="hover:text-orange-600 transition-all">Qatar</span>
            <span className="hover:text-orange-600 transition-all">UAE</span>
            <span className="hover:text-orange-600 transition-all">
              Portugal
            </span>
            <span className="hover:text-orange-600 transition-all">
              Lebanon
            </span>
            <span className="hover:text-orange-600 transition-all">Brazil</span>
            <span className="hover:text-orange-600 transition-all">
              Sri Lanka
            </span>
            <span className="hover:text-orange-600 transition-all">Nepal</span>
            <span className="hover:text-orange-600 transition-all">
              Bangladesh
            </span>
            <span className="hover:text-orange-600 transition-all">China</span>
            <span className="hover:text-orange-600 transition-all">
              The Philippines
            </span>
            <span className="hover:text-orange-600 transition-all">
              Singapore
            </span>
            <span className="hover:text-orange-600 transition-all">
              Malaysia
            </span>
            <span className="hover:text-orange-600 transition-all">
              Indonesia
            </span>
            <span className="hover:text-orange-600 transition-all">
              South Africa
            </span>
            <span className="hover:text-orange-600 transition-all">Japan</span>
            <span className="hover:text-orange-600 transition-all">
              New Zealand
            </span>
            <span className="hover:text-orange-600 transition-all">
              West Indies
            </span>
            <span className="hover:text-orange-600 transition-all">Chile</span>
            <span className="hover:text-orange-600 transition-all">
              Austria
            </span>
          </div>
        </section>

        <hr class="border-gray-300" />

        {/* <!-- Section: Our Team --> */}
        <RestaurantTeam></RestaurantTeam>
      </Container>
    );
};

export default About;



 


  



  

// ... order now --> all menu show