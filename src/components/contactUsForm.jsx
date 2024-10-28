import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactUsForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Ensures animation triggers only once
    threshold: 0.5, // Adjust this threshold as needed
  });

  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center min-h-[40vh] w-full md:w-2/3 p-8 bg-gray-100"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <label htmlFor="name" className="mb-2 text-lg font-bold  text-amber-800 md:block">
            Your Name
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="px-4 py-2 text-[#280101] border-2 border-transparent rounded-md focus:outline-none focus:border-yellow-600 mb-4 md:mb-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label htmlFor="email" className="mb-2 text-lg font-bold  text-amber-800 md:block">
            Email
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-2 text-[#280101] border-2 border-transparent rounded-md focus:outline-none focus:border-yellow-600 mb-4 md:mb-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col w-full max-w-5xl mt-4 md:mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <label htmlFor="message" className="mb-2 text-lg font-bold text-amber-800">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Your Message"
          className="px-4 py-2 text-[#280101] border-2 border-transparent rounded-md focus:outline-none focus:border-yellow-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        ></motion.textarea>
      </motion.div>
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.button
          type="submit"
          className="w-full px-6 py-3 text-white transition duration-300 rounded-md bg-amber-800 hover:bg-yellow-600 md:w-auto md:py-2 md:px-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default ContactUsForm;
