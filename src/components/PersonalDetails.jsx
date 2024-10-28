import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';
import HemanshuDubeyImage from '../assets/Hemanshu_Dubey.jpg'; // Corrected the image path

const PersonalDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-black bg-gray-100 border-[#fee57e] border-8 pt-12">
      <motion.h2
        className="mb-4 text-4xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>Personal Details</span>
      </motion.h2>

      <motion.div
        className="flex flex-col items-center mb-8 md:flex-row md:items-start"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="order-2 text-lg md:mr-8 md:order-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <table className="w-full">
            <tbody>
              {[
                { label: <><FaUser className="inline mr-2" />Founder:</>, value: 'Hemanshu Dubey' },
                { label: <><FaPhone className="inline mr-2" />Contact Number / WhatsApp:</>, value: '+91 9870112134' },
                { label: <><FaMapMarkerAlt className="inline mr-2" />Registered Address:</>, value: 'Plot D-5, Block D,' },
                { value: <>
                  Om Vihar, Phase – V, <br />
                  Near West Point School, <br />
                  New Delhi. <br />
                  Zip Code – 110059
                </> },
                { label: <><FaInstagram className="inline mr-2" />Instagram:</>, value: <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" className="text-black hover:text-gray-700">maati16</a> },
                { label: <><FaLinkedin className="inline mr-2" />LinkedIn:</>, value: <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" className="text-black hover:text-gray-700">Hemanshu Dubey</a> },
              ].map((detail, index) => (
                <motion.tr
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  <td className="pr-2 font-semibold">{detail.label}</td>
                  <td>{detail.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="order-1 mb-4 md:mb-0 md:ml-8 md:order-2">
          <img
            src={HemanshuDubeyImage}
            alt="Hemanshu Dubey"
            className="object-cover w-64 h-64 rounded-full md:w-96 md:h-96" // Adjusted image size for better display
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalDetails;
