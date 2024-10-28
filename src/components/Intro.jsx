import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import intro from '../assets/intro.jpg'
const IntroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <section ref={ref} className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-gray-100 md:flex-row border-[#fee57e] border-t-0 border-8" id='intro'>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={textVariants}
        className="p-4 md:w-1/2"
      >
        <h2 className="mb-2 text-2xl text-[#280101] font-bold md:text-3xl">Welcome to</h2>
        <h2 className="mb-4 text-4xl text-[#280101] font-bold md:text-5xl">MAATI-16<sup>™</sup></h2>
        <p className="mb-4 text-lg text-justify md:text-xl">
          Maati 16 is a youth-run community-based in Patna, dedicated to helping the poor and needy, especially children who wish to study and create a brighter future. Currently, we are operating in New Delhi and we aim to expand our reach throughout India. The Trust was established to provide relief, assistance, and support to the general public, particularly those who are economically and educationally disadvantaged. Our focus areas are education, healthcare, technical professional training, and other economic activities.
        </p>
        <p className="mb-4 text-lg text-justify md:text-xl">
          Earlier we were 'YOUTH POWER' which was eventually meant to portray the positive potential energy of the youth to change society and now, here we are with the name 'MAATI 16' which means we are grounded and eager to do well for the sake of humanity and humans. Maati symbolizes “Soil” and “16” represents our establishment year.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        className="p-4 md:w-1/2 "
      >
        <img
          src={intro}
          alt="Placeholder"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default IntroSection;
