import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';


// Import your event images
import eventImg1 from "../assets/events/event1.jpeg";
import eventImg2 from "../assets/events/event2.jpg";

const events = [
  {
    id: '1',
    title: "Fund Raising Webinar on: Depression Among Youngsters",
    description: "A webinar addressing depression among youngsters.",
    date: "2024-11-14",
    image: eventImg1
  },
  {
    id: '2',
    title: "Open Mic Event – The Virtual Verse",
    description: "An open mic event showcasing poetic talents.",
    date: "2024-11-20",
    image: eventImg2
  },
  // Add more events as needed
];

const EventPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const navigate = useNavigate();

  const filteredEvents = events.filter(event => {
    const searchLower = searchQuery.toLowerCase();
    return (
      event.title.toLowerCase().includes(searchLower) ||
      event.date.includes(searchQuery)
    );
  });

  const sortedEvents = filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));

  const pageCount = Math.ceil(sortedEvents.length / eventsPerPage);

  const currentEvents = sortedEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <motion.h2
            className="pb-5 mb-4 text-4xl font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>Upcoming Events</span>
          </motion.h2>

          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event name or date (YYYY-MM-DD)"
              className="w-full py-3 pl-10 pr-12 text-gray-900 border-2 rounded-full border-amber-800 focus:outline-none focus:border-yellow-600"
            />
            <FiSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-4"
              >
                <IoMdClose />
              </button>
            )}
          </div>

          <div className="grid w-[90%] mx-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <motion.div
                key={event.id}
                className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={event.image} alt={event.title} className="object-cover w-full h-48" />
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-[#280101] mb-4">{event.title}</h3>
                  <p className="flex-grow text-base text-gray-700">{event.description}</p>
                  <p className="text-gray-500 mb-2">{event.date}</p>
                  <button
                    className="px-4 py-2 mt-4 font-medium text-center text-white transition-colors duration-300 rounded-md bg-amber-500 hover:bg-amber-600"
                    onClick={() => navigate(`/event-registration/${event.id}`)} // Navigate to registration page
                  >
                    Register Now
                  </button>
                  
                </div>
              </motion.div>
            ))}
          </div>

          {sortedEvents.length > eventsPerPage && (
            <div className="flex justify-center mt-8">
              {[...Array(pageCount)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    paginate(index + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`mx-1 px-4 py-2 bg-[#fee57e] text-[#280101] rounded-md hover:bg-yellow-600 transition duration-300 ${currentPage === index + 1 ? 'font-bold' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EventPage;
