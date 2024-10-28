import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Motto = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 text-black border-[#fee57e] border-8 bg-gray-100"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative max-w-4xl p-8 overflow-auto bg-white rounded-md shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex justify-center mb-5">
          <NavLink
            to="/motto-objective"
            className={({ isActive }) =>
              `px-4 py-2 font-semibold transition-colors duration-300 rounded ${isActive ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-amber-600 hover:text-white'}`
            }
          >
            Motto
          </NavLink>
          <NavLink
            to="/objectives"
            className={({ isActive }) =>
              `px-4 py-2 mx-2 font-semibold transition-colors duration-300 rounded ${isActive ? 'bg-amber-600 text-white' : 'text-gray-600 hover:bg-amber-600 hover:text-white'}`
            }
          >
            Objectives
          </NavLink>
        </div>

        <motion.h2
          className="mb-4 text-4xl font-bold text-center"
          initial={{ y: -50, opacity: 0, x: -50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>Our Motto</span>
        </motion.h2>

        <motion.p
          className="mb-4 text-lg leading-7 text-center text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. Through their dedication, Maati-16 Trust is not just changing lives but also shaping a better tomorrow for communities in need.
        </motion.p>

        <motion.p
          className="mb-4 text-lg leading-7 text-center text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Maati-16 Trust is dedicated to providing education to underprivileged children, ensuring they have the opportunity to build a brighter future. Through their efforts, they aim to break the cycle of poverty by empowering young minds with knowledge and skills. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Motto;
