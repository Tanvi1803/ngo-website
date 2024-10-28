import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MembershipForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    address: '',
    aadhar: '',
    whatsapp: '',
    email: '',
    acceptance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [showForm]);

  return (
    <div className="border-8 border-[#fee57e] bg-gray-100 p-6">
      <motion.h2
        className="pt-12 pb-5 mb-4 text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl font-bold text-[#280101] md:text-6xl underline-travel">
          MEMBERSHIP FORM
        </span>
      </motion.h2>
      {showForm ? (
        <div className="max-w-xl p-5 mx-auto bg-white rounded-lg shadow-md">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {['name', 'dob', 'contact', 'address', 'aadhar', 'whatsapp', 'email'].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' ')}
                </label>
                <input
                  type={field === 'dob' ? 'date' : field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
            <div className="mb-4">
              <input
                type="checkbox"
                id="acceptance"
                name="acceptance"
                checked={formData.acceptance}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="acceptance" className="inline-block">
                I hereby declare that being a member of MAATI-16 will abide by all the rules and regulations and always follow the ethical code of conduct.
              </label>
            </div>
            <button type="submit" className="w-full p-3 mb-2 text-white rounded bg-amber-500 hover:bg-amber-600">
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-200 hover:bg-gray-300 text-[#280101] p-3 rounded w-full"
            >
              Go Back
            </button>
          </motion.form>
        </div>
      ) : (
        <motion.div className="max-w-2xl p-5 mx-auto bg-white rounded-lg shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
          <h3 className="text-lg font-bold">Membership Guidelines</h3>
          <ul className="pl-5 list-disc">
            <li>Every Member will have to donate some amount in group funds per month for the on-field operations. We believe in full transparency; thus, every detail of the total collected money and expenses will be shared with you via WhatsApp group.</li>
            <li>Remember the main motto of joining MAATI-16: to be a helping hand to society. It is compulsory for all members to actively participate in every drive or any event of the foundation; failing which you will be answerable to the core team.</li>
            <li>We will have proper on-field meetings which are compulsory to attend for every member.</li>
            <li>You are not allowed to share photos or footage of any on-field activity or drive conducted by us without the watermark, logo, or mention of MAATI-16's identity. No self-promotion will be tolerated.</li>
            <li>Every member must feed animals like dogs and cows and help every living being. You can also keep grains for birds or water outside your house for thirsty animals.</li>
            <li>If you do not abide by any of the rules, you will be terminated from the group.</li>
          </ul>

          <h3 className="mt-5 text-lg font-bold">Contact Information</h3>
          <p>For any queries, you can contact us at:</p>
          <p>+91 9870112134</p>
          <p>Email: maati16official@gmail.com</p>
          <p>Instagram: @maati16._</p>
          <button
            onClick={() => setShowForm(true)}
            className="w-full p-3 mt-3 text-white rounded bg-amber-500 hover:bg-amber-600"
          >
            View Form
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default MembershipForm;
