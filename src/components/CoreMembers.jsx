import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShubhamKanhaiyaImage from '../assets/Shubham_Kanhaiya.jpg';
import ArunavPrakharImage from '../assets/Arunav_Prakhar.jpg';
import MuneerAshrafImage from '../assets/Muneer_Ashraf.jpg';
import HemantDubeyImage from '../assets/Hemant_Dubey.jpg';
import RishavPandeyImage from '../assets/Rishav_Pandey.jpg';

const members = [
  {
    name: "Shubham Kanhaiya (Co-Founder)",
    mobile: "7091717497",
    email: "thekanhaiya17@gmail.com",
    image: ShubhamKanhaiyaImage,
  },
  {
    name: "Arunav Prakhar (Co-Founder)",
    mobile: "9798470449",
    email: "arunavprakhar98@gmail.com",
    image: ArunavPrakharImage,
  },
  {
    name: "Muneer Ashraf (Secretary)",
    mobile: "9304268323",
    email: "muneerzeeshanashraf@gmail.com",
    image: MuneerAshrafImage,
  },
  {
    name: "Hemant (Assistant Secretary)",
    mobile: "7870295287",
    email: "hemantdubey1920@gmail.com",
    image: HemantDubeyImage,
  },
  {
    name: "Rishav Pandey (Treasurer)",
    mobile: "9693007418",
    email: "pandey2303rishav@gmail.com",
    image: RishavPandeyImage,
  },
];

const CoreMembers = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 text-black border-[#fee57e] border-8 bg-gray-100"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full max-w-6xl p-8 overflow-auto bg-white rounded-md shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h2
          className="mb-4 text-4xl font-bold text-center"
          initial={{ y: -50, opacity: 0, x: 50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-bold text-[#280101] underline md:text-6xl">
            Core Members
          </span>
        </motion.h2>

        <motion.ul
          className="mb-4 text-lg leading-7 text-gray-600"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
              },
            },
            hidden: { opacity: 0 },
          }}
        >
          {members.map((member, index) => (
            <motion.li
              key={index}
              className="flex flex-col items-center p-4 mb-8 rounded-lg shadow-lg bg-gray-50 sm:flex-row sm:text-left sm:p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
              />
              <div>
                <strong className="text-xl font-semibold">
                  {member.name}
                </strong>
                <br />
                Mobile: {member.mobile}
                <br />
                Email:{" "}
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex justify-center mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <button
            onClick={handleBackToHome}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CoreMembers;
