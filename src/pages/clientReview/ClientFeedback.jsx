import React, { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../../components/Container/Container";

const  ClientFeedback = ()=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO A4Tech Ltd.",
      image:
        "https://i.ibb.co.com/HSs39vN/8bb8b467609eac8ed22594dbfb075519.jpg",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 2,
      name: "Emily Carter",
      position: "Marketing Director",
      image:
        "https://i.ibb.co.com/21VTDBRh/658bd98f1a549269c3640dc3-tre56788-1-min.jpg",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 3,
      name: "Jessica Martinez",
      position: "Business Owner",
      image:
        "https://i.ibb.co.com/ksLwXHNd/depositphotos-44145381-stock-photo-portrait-of-beautiful-young-woman.jpg",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 4,
      name: "Amanda Wilson",
      position: "Product Manager",
      image:
        "https://i.ibb.co.com/XZttZ6C3/good-looking-woman-jeans-shirt-smiling-young-attractive-young-standing-against-white-background-wear.webp",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 5,
      name: "Rachel Anderson",
      position: "Operations Head",
      image:
        "https://i.ibb.co.com/RGVj25vj/hair-length-chart-women-armpit.webp",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      position: "CEO A4Tech Ltd.",
      image:
        "https://i.ibb.co.com/HSs39vN/8bb8b467609eac8ed22594dbfb075519.jpg",
      rating: 5,
      feedback:
        "FreshBite is a great Restaurant from the University of Texas at Austin has been researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.",
    },
  ];

const nextSlide = React.useCallback(() => {
  setCurrentIndex((prevIndex) =>
    prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
  );
},[testimonials.length]);


const prevSlide = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2
  );
};

  const goToSlide = (index) => {
    setCurrentIndex(index * 2);
  };

const renderStars = (rating) => {
  return [...Array(Number(rating) || 0)].map((_, index) => (
    <FaStar key={index} className="text-orange-400 text-xl" />
  ));
    };
    
     useEffect(() => {
       const interval = setInterval(() => {
         nextSlide();
       }, 5000);
       return () => clearInterval(interval);
     }, [nextSlide]);

  return (
    <Container>
      <div className="min-h-screen  py-16 px-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <path
              d="M75 10 L90 45 L125 45 L97 67 L110 102 L75 80 L40 102 L53 67 L25 45 L60 45 Z"
              fill="#9CA3AF"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" fill="#10B981" />
          </svg>
        </div>
        <div className="absolute top-1/3 right-20 opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 10 L65 35 L92 40 L71 60 L77 87 L50 73 L23 87 L29 60 L8 40 L35 35 Z"
              fill="#D1D5DB"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16" data-aos="zoom-in-up">
            <h3 className="text-red-500 font-bold text-2xl italic mb-2">
              FreshBite
            </h3>
            <h2 className="text-5xl lg:text-6xl font-bold">
              <span className="text-slate-800">Client </span>
              <span className="text-red-500">Feedback</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials
                .slice(currentIndex, currentIndex + 2)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Decorative leaf pattern */}
                    <div className="absolute top-0 right-0 opacity-5">
                      <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                      >
                        <path
                          d="M50 100 Q100 50, 150 100 Q100 150, 50 100"
                          fill="#9CA3AF"
                        />
                        <path
                          d="M70 100 Q100 70, 130 100 Q100 130, 70 100"
                          fill="#D1D5DB"
                        />
                      </svg>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-start gap-4 mb-6 relative z-10">
                      <div className="avatar">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-orange-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-slate-800 font-bold text-xl mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {testimonial.position}
                        </p>
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    {/* Feedback Text */}
                    <p className="text-gray-700 leading-relaxed relative z-10">
                      {testimonial.feedback}
                    </p>
                  </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`btn btn-circle bg-white hover:bg-red-500 hover:text-white border-2 border-gray-200 shadow-lg transition-all duration-300 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaChevronLeft className="text-lg" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / 2))].map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        Math.floor(currentIndex / 2) === index
                          ? "w-8 h-3 bg-red-500"
                          : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  )
                )}
              </div>

              <button
                onClick={nextSlide}
                className="btn btn-circle bg-white hover:bg-red-500 hover:text-white border-2 border-gray-200 shadow-lg transition-all duration-300"
                disabled={currentIndex + 2 >= testimonials.length}
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ClientFeedback;
