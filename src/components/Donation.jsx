import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Donation = () => {
  const location = useLocation();
  const { sponsorTitle } = location.state || { sponsorTitle: 'General Donation' };

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    pan: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="border-8 border-[#fee57e] bg-gray-100 pb-3">
      <motion.h2
        className="pt-12 pb-5 mb-4 text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl font-bold text-[#280101] md:text-6xl underline-travel">
          DONATION FORM
        </span>
      </motion.h2>
      <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
        <motion.div
          className="mb-5 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p className="font-bold"><strong>Account No:</strong> 49918100000881</motion.p>
          <motion.p className="font-bold"><strong>Account Holder Name:</strong> Hemanshu</motion.p>
          <motion.p className="font-bold"><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</motion.p>
          <motion.p className="font-bold"><strong>Branch:</strong> Buddha Colony</motion.p>
          <motion.p className="font-bold"><strong>Pay Online:</strong> 6205415221@ybl</motion.p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="mb-4">
            <label htmlFor="sponsorTitle" className="block mb-2">Sponsorship Option</label>
            <input
              type="text"
              id="sponsorTitle"
              name="sponsorTitle"
              value={sponsorTitle}
              readOnly
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pan" className="block mb-2">PAN</label>
            <input
              type="text"
              id="pan"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">Amount to Donate</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white rounded bg-amber-500 hover:bg-amber-600"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            Donate
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Donation;
