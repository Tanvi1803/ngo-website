import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Objectives = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 text-black border-[#fee57e] border-8 bg-gray-100"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative max-w-4xl p-8 overflow-auto bg-white rounded-md shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex justify-center mb-5">
          <NavLink
            to="/motto-objective"
            className="px-4 py-2 font-semibold text-gray-600 transition-colors duration-300 rounded hover:bg-amber-600 hover:text-white active:bg-amber-600 active:text-white"
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
          initial={{ y: -50, opacity: 0, x: 50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>Our Objectives</span>
        </motion.h2>

        <motion.ul
          className="mb-4 text-lg leading-7 text-gray-600"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <li className="mb-4">
            <strong>Education and Skill Development:</strong> Our Trust prioritizes and takes initiatives for the education and skill development of needy children. We provide books, stationery items, and help pay school fees. We aim to establish schools, libraries, and vocational training centers, and conduct scholarship programs to empower individuals through education and equip them with the skills needed to succeed in life.
          </li>
          <li className="mb-4">
            <strong>Healthcare and Sanitation:</strong> Our Trust works to facilitate access to healthcare services and sanitation facilities, especially in underdeveloped and remote areas. To improve public health, we establish health clinics, organize medical camps, and promote hygiene and sanitation practices within communities.
          </li>
          <li className="mb-4">
            <strong>Environmental Conservation:</strong> Our Trust focuses on environmental conservation and sustainability. We work to protect natural habitats, promote sustainable development practices, and raise awareness about environmental issues such as climate change, pollution, and biodiversity loss.
          </li>
          <li className="mb-4">
            <strong>Human Rights:</strong> Our Trust promotes and protects human rights, including civil, political, economic, social, and cultural rights. We advocate for the rights of specific groups, such as women, children, minorities, refugees, and indigenous people.
          </li>
          <li className="mb-4">
            <strong>Social Welfare:</strong> Our Trust aims to improve the welfare and well-being of underprivileged and marginalized communities. This includes providing education, healthcare, nutrition, housing, and other basic needs to those in need.
          </li>
          <li className="mb-4">
            <strong>Community Development:</strong> Our Trust engages in community development projects aimed at empowering communities to become self-reliant and sustainable. This includes initiatives such as microfinance programs, entrepreneurship training, infrastructure development, and capacity-building workshops.
          </li>
          <li className="mb-4">
            <strong>Disaster Relief and Rehabilitation:</strong> Our Trust plays a crucial role in disaster response and recovery efforts. We provide emergency relief supplies, shelter, medical assistance, and psychosocial support, as well as long-term rehabilitation and reconstruction assistance to disaster-affected communities.
          </li>
          <li className="mb-4">
            <strong>Empowerment of Women and Gender Equality:</strong> Our Trust focuses on promoting gender equality and empowering women and girls. We work to eliminate discrimination and violence against women, increase women's access to education and economic opportunities, and promote women's participation in decision-making processes.
          </li>
          <li className="mb-4">
            <strong>Promotion of Animal Welfare:</strong> Our Trust advocates for the protection and welfare of animals, including companion animals, wildlife, and livestock. We support animal shelters, conduct rescue operations, run spaying and neutering programs, and campaign against animal cruelty and exploitation.
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Objectives;
