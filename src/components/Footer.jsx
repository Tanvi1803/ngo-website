// components/Footer.jsx
import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo.png';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="py-10 text-gray-800 bg-gray-100 border-[#fee57e] border-t-0 border-8"
    >
      <motion.div variants={itemVariants} className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4">
        {/* Logo and Short Intro */}
        <div>
          <img src={logo} alt="MAATI-16 Logo" className="h-20 mb-4" />
          <p className="mb-4">
            Maati 16 is a youth-run community-based in Patna, dedicated to helping the poor and needy, especially children who wish to study and create a brighter future.
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-amber-800" />
            </a>
            <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-amber-800" />
            </a>
            <a href="https://www.facebook.com/maatibihar" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-amber-800" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-amber-800">Home</Link>
            </li>
            <li>
              <Link to="/core-members" className="hover:text-amber-800">Core Members</Link>
            </li>
            <li>
              <Link to="/motto-objective" className="hover:text-amber-800">Our Motto and Objective</Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-amber-800">FAQs and Policies</Link>
            </li>
            <li>
              <Link to="/our-works" className="hover:text-amber-800">Our Works</Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-amber-800">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* Office Location and Hours */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Office Location</h3>
          <p className="mb-4">
            Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi. Zip Code – 110059
          </p>
          <h3 className="mb-4 text-xl font-bold">Office Hours</h3>
          <p>Mon - Fri: 9 AM - 6 PM</p>
          <p>Sat: 10 AM - 4 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Contact</h3>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <a href="tel:+919870112134" className="hover:text-amber-800">+91 9870112134</a>
          </p>
          <p className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <a href="mailto:maati16official@gmail.com" className="hover:text-amber-800">maati16official@gmail.com</a>
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="container mx-auto mt-8 text-center">
        <p className="text-gray-900">
          &copy; 2024 All rights reserved, MAATI-16
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
