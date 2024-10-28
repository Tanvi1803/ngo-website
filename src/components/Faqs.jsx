import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQs = () => {
    return (
        <>
            <motion.div
                className="flex flex-col items-center justify-center min-h-screen p-4 text-black border-[#fee57e] border-8 bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="pt-12 mb-8 text-4xl text-center md:text-6xl text-[#280101] font-bold"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className='underline-travel'>FAQs and Policies</span> 
                </motion.h2>
                <motion.div
                    className="w-full max-w-3xl p-8 overflow-auto bg-white rounded-md shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">1. What is the mission of Maati 16 Trust?</dt>
                        <dd className="text-lg">
                            Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India. We strive to provide accessible and quality education to underserved populations, including children, adults, and marginalized communities. Through innovative programs and partnerships, we aim to equip individuals with the knowledge, skills, and opportunities they need to thrive in today's world. By addressing the root causes of illiteracy and promoting lifelong learning, we envision a future where every person has the chance to reach their full potential and contribute positively to society.
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">2. How old is Maati 16 Trust?</dt>
                        <dd className="text-lg">
                            Maati 16 was established in the year 2016.
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">3. Which Areas does Maati 16 Trust work in?</dt>
                        <dd className="text-lg">
                            Maati 16 has been working in the thematic areas of education, health care, youth employability, and empowerment of women and girls. Education is our priority.
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">4. How to become a Volunteer in Maati 16 Trust?</dt>
                        <dd className="text-lg">
                            You need to fill the Membership/Volunteer form of Maati 16. It will take 24 – 48 hours to verify and then you receive an approval email.
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">5. How can I donate to Maati 16 Trust?</dt>
                        <dd className="text-lg">
                            You can go to the “Donate Now” section of Maati 16 Trust’s Website and donate online. For other donation-related queries, please write to maati16official@gmail.com
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">6. What is project Gyan Sagar?</dt>
                        <dd className="text-lg">
                            Our primary focus is child education. In this project, we help needy children who want to study and make their future bright. We want to reduce the illiteracy rate in India. We are currently working in Bihar and Delhi and aim to cover all states of India. We also assist orphanages by providing study and stationary materials; currently, we are connected with 10 – 15 orphanages and plan to increase this number soon.
                        </dd>
                    </div>
                    <div className="mb-8">
                        <dt className="mb-2 text-2xl font-bold">7. How can I work for Maati 16?</dt>
                        <dd className="text-lg">
                            Please visit our “Career” page to learn more about current openings.
                        </dd>
                    </div>
                    <div className="flex justify-center">
                        <Link to="/privacy-policies"
                            className="bg-amber-500 hover:bg-[#e09528] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default FAQs;
