// Gallery.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const images = [
    { id: 1, category: 'category-1', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 2, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 3, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 4, category: 'category-5', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 5, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 6, category: 'category-5', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 7, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 8, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 9, category: 'category-4', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 10, category: 'category-5', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 11, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 12, category: 'category-1', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 10, category: 'category-5', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 11, category: 'category-2', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
    { id: 12, category: 'category-1', src: 'https://designshack.net/wp-content/uploads/placeholder-image.png' },
  ];

  const handleFilterChange = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setFilter(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when filter changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when page changes
  };

  const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const pageCount = Math.ceil(filteredImages.length / imagesPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
  }, []);

  return (
    <section className="py-12 bg-gray-100 border-b-4 border-[#fee57e] border-8">
      <div className="container px-4 mx-auto">
      <motion.h2
        className="pb-5 mb-4 text-4xl font-bold text-center "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'> Gallery</span>
      </motion.h2>

        <div className="mb-6 text-center">
          <select
            value={filter}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="category-1">Category 1</option>
            <option value="category-2">Category 2</option>
            <option value="category-3">Category 3</option>
            <option value="category-4">Category 4</option>
            <option value="category-5">Category 5</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 gap-x-2 sm:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
          {currentImages.map(image => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.3, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="object-cover w-full h-full"
                style={{ aspectRatio: '1.2' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-8">
            {[...Array(pageCount)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-4 py-2 bg-[#fee57e] text-[#280101] rounded-md hover:bg-yellow-600 transition duration-300 ${currentPage === index + 1 ? 'font-bold' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
