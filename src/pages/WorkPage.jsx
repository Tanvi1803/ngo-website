import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import id1 from "../assets/works/food-drive-covid/image1.png";
import id2 from "../assets/works/mask-donation-drive/image1.png";
import id3 from "../assets/works/project-education-mission/image1.png";
import id4 from "../assets/works/project-smile/image1.png";
import id5 from "../assets/works/blanket-donation-drive1/image1.png";
import id6 from "../assets/works/blanket-donation-drive2/image1.png";
import id7 from "../assets/works/children's-day-celebration/image1.png";
import id8 from "../assets/works/stray-dogs/image1.png";
import id9 from "../assets/works/food-donation/image1.png";
import noimg from "../assets/works/fund-img.png";

const projects = [
  {
    id: 1,
    title: "Food Donation Drive (COVID-19)",
    description: "Many families have become financially weak due to the corona pandemic. Due to the collapse of businesses, the livelihoods of all the families have been snatched away. People earning money from daily wages do not have enough ration to eat.",
    date: "2024-05-10",
    image: id1
  },
  {
    id: 2,
    title: "Mask Donation Drive",
    description: "Amid the global pandemic, our team decided to distribute masks to poor people who can't afford them.",
    date: "2024-05-09",
    image: id2
  },
  {
    id: 3,
    title: "Project Education Mission",
    description: "Our team visited Safeena Baal Grih (an orphanage) to provide educational materials and essentials to orphan kids.",
    date: "2024-06-15",
    image: id3
  },
  {
    id: 4,
    title: "Project Smile",
    description: "Our team, along with Khitij NGO, distributed study materials and learning kits to 150 children of a slum.",
    date: "2024-07-01",
    image: id4
  },
  {
    id: 5,
    title: "Blanket Donation Drive 1",
    description: "Providing warmth to the needy during the winter season.",
    date: "2023-12-15",
    image: id5
  },
  {
    id: 6,
    title: "Blanket Donation Drive 2",
    description: "Continuing our efforts to provide warmth to those in need.",
    date: "2024-01-10",
    image: id6
  },
  {
    id: 7,
    title: "Children's Day Celebration",
    description: "Celebrating Children's Day with underprivileged kids.",
    date: "2024-11-14",
    image: id7
  },
  {
    id: 8,
    title: "Food for Stray Dogs",
    description: "Providing food and care for stray dogs.",
    date: "Ongoing",
    image: id8
  },
  {
    id: 9,
    title: "Food Donation for Orphans",
    description: "Feeding orphan kids on special occasions.",
    date: "Ongoing",
    image: id9
  },
  {
    id: 10,
    title: 'Fund Raising Webinar on: Depression Among Youngsters',
    description: 'A webinar addressing depression among youngsters.',
    date: '2024-11-14',
    
  },
  {
    id: 11,
    title: 'Open Mic Event – The Virtual Verse',
    description: 'An open mic event showcasing poetic talents.',
    date: '2022-11-14',
   
  }
];

const WorkPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.date.includes(searchQuery)
    );
  });

  const sortedProjects = filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

  const pageCount = Math.ceil(sortedProjects.length / projectsPerPage);

  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
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
            <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>Our Works</span>
          </motion.h2>

          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name or date (YYYY-MM-DD)"
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
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image || noimg} alt={project.title} className="object-cover w-full h-48" />
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold text-[#280101] mb-4">{project.title}</h3>
                  <p className="flex-grow text-base text-gray-700">{project.description}</p>
                  <Link to={`/our-works/${project.id}`} className="px-4 py-2 mt-4 font-medium text-center text-white transition-colors duration-300 rounded-md bg-amber-500 hover:bg-amber-600">
                    Click To See More Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {sortedProjects.length > projectsPerPage && (
            <div className="flex justify-center mt-8">
              {[...Array(pageCount)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    paginate(index + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
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

export default WorkPage;
