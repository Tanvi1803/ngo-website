import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      image: hero1,
      title: 'Welcome to Our NGO',
      description: 'We are dedicated to making the world a better place.',
      button: 'Learn More',
      link: '#intro', // Link to the intro section on the same page
      position: 'md:left-40',
      isAnchor: true, // Indicates this link is an anchor
    },
    {
      image: hero2,
      title: 'Support Our Causes',
      description: 'Your donations help us achieve our goals.',
      button: 'Donate Now',
      link: '/donate-us', // Link to your Donation page
      position: 'mx-auto md:left-[120px]',
      isAnchor: false,
    },
    {
      image: hero3,
      title: 'Join Us',
      description: 'Become a volunteer and make a difference.',
      button: 'Join Us',
      link: '/membership-volunteership', // Link to your Join Us page
      position: 'mx-auto md:left-[120px]',
      isAnchor: false,
    },
  ];

  const handleAnchorClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector(event.currentTarget.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target
    }
  };

  return (
    <section className="relative border-[#fee57e] border-8">
      <Slider {...settings} className="relative">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[85vh]">
            <img src={slide.image} alt={`Slide ${index}`} className="object-cover w-full h-full" />
            <motion.div
              initial={{ opacity: 0, x: slide.position.includes('right') ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`absolute bottom-60 ${slide.position} bg-black bg-opacity-50 text-white p-8 rounded-lg max-w-lg`}
            >
              <h2 className="mb-4 text-4xl font-bold">{slide.title}</h2>
              <p className="mb-4 text-lg">{slide.description}</p>
              {slide.isAnchor ? (
                <a href={slide.link} className="inline-block" onClick={handleAnchorClick}>
                  <button className="px-4 py-2 font-bold text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                    {slide.button}
                  </button>
                </a>
              ) : (
                <Link to={slide.link} className="inline-block">
                  <button className="px-4 py-2 font-bold text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                    {slide.button}
                  </button>
                </Link>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-10 hidden text-3xl text-white transition-opacity duration-300 transform -translate-y-1/2 opacity-75 cursor-pointer right-4 top-1/2 hover:opacity-100 md:block"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-10 hidden text-3xl text-white transition-opacity duration-300 transform -translate-y-1/2 opacity-75 cursor-pointer left-4 top-1/2 hover:opacity-100 md:block"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

export default HeroSection;
