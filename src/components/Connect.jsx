import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactUsForm from './contactUsForm';

const ConnectWithUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="flex flex-col items-center justify-center min-h-[40vh] p-8 bg-gray-100 border-[#fee57e] border-t-0 border-8">
      <motion.h2
        className="mb-4 text-3xl font-bold md:text-6xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <span className='underline-travel'>CONNECT WITH US</span>
      </motion.h2>
      <motion.p
        className="mb-8 text-xl text-center md:text-2xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        Call/Whatsapp/Text at <span className='text-amber-500'>+91 - 9870112134</span>  to know more!
      </motion.p>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <motion.h3 className="mb-2 text-2xl font-bold">
            <CountUp start={0} end={5} duration={2.5} redraw={true} />
          </motion.h3>
          <p>CORE MEMBERS</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <motion.h3 className="mb-2 text-2xl font-bold">
            <CountUp start={0} end={22} duration={2.5} redraw={true} />+
          </motion.h3>
          <p>VOLUNTEERS</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <motion.h3 className="mb-2 text-2xl font-bold">
            <CountUp start={0} end={10} duration={2.5} redraw={true} />+
          </motion.h3>
          <p>DONATION EVENTS</p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <motion.h3 className="mb-2 text-2xl font-bold">
            <CountUp start={0} end={303} duration={2.5} redraw={true} />+
          </motion.h3>
          <p>STUDENTS BENEFITED</p>
        </motion.div>
      </div>
      <ContactUsForm/>
    </section>
  );
};

export default ConnectWithUs;
