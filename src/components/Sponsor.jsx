import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const Sponsor = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const navigate = useNavigate();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sponsors = [
    {
      title: "Sponsor a child's education",
      description: `You can donate according to your pocket. 
The cost to sponsor a child's education is approximately INR 15,000 per year.`,
      button: "Donate Now",
    },
    {
      title: "Provide Meals for a Week",
      description: `Sponsor a snack for 100 children:
Fruit: ~INR 1000
Samosa: ~INR 1000
Juice/Flavored Milk: ~INR 1000`,
      button: "Donate for Meals",
    },
    {
      title: "Fund a Health Camp",
      description: "Sponsor a health camp to provide medical checkups and healthcare services to those in need.",
      button: "Fund Now",
    },
    {
      title: "Supply School Supplies",
      description: `Supply school supplies for 10 children:
Stationery items: ~INR 5000
- Pencil
- Pen
- Eraser
- Sharpener
- Scale
- Notebook`,
      button: "Donate Supplies",
    },
    {
      title: "Support After-School Programs",
      description: `Support after-school programs for activities such as drawing, computer classes, dancing, and singing.
Cost per child: ~INR 12000/year`,
      button: "Support Programs",
    },
    {
      title: "Sponsor Activities",
      description: `We would love to expose the children to activities that’ll help them grow holistically, that they might otherwise not get a chance to experience. Eg: Educational excursion to a factory, movies, picnics, camps, etc.`,
      button: "Click to Donate",
    },
  ];

  const handleDonateClick = (title) => {
    navigate('/donate-us', { state: { sponsorTitle: title } });
  };

  return (
    <section ref={ref} className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-gray-100 border-[#fee57e] border-t-0 border-8">
      <motion.h2
        className="mb-8 text-3xl font-bold md:text-6xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <span className='underline-travel'>SPONSOR
        <div className="box-line"></div>
        </span>
      </motion.h2>
      <motion.p
        className="mb-8 text-xl text-center md:text-2xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        We do not have a specific amount that you need to donate. The details for sponsorship are below:
      </motion.p>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((sponsor, index) => (
          <Tilt key={index} className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
            <motion.div
              className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-lg Tilt-inner"
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold">{sponsor.title}</h3>
                <p className="mb-4 whitespace-pre-wrap">{sponsor.description}</p>
              </div>
              <button
                className="px-4 py-2 mt-4 font-bold text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600"
                onClick={() => handleDonateClick(sponsor.title)}
              >
                {sponsor.button}
              </button>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Sponsor;
