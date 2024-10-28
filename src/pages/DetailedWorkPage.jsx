import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import id1_img1 from "../assets/works/food-drive-covid/image1.png";
import id1_img2 from "../assets/works/food-drive-covid/image2.png";
import id1_img3 from "../assets/works/food-drive-covid/image3.png";

import id2_img1 from "../assets/works/mask-donation-drive/image1.png";
import id2_img2 from "../assets/works/mask-donation-drive/image2.png";
import id2_img3 from "../assets/works/mask-donation-drive/image3.png";

import id3_img1 from "../assets/works/project-education-mission/image1.png";
import id3_img2 from "../assets/works/project-education-mission/image2.png";
import id3_img3 from "../assets/works/project-education-mission/image3.png";
import id3_img4 from "../assets/works/project-education-mission/image4.png";
import id3_img5 from "../assets/works/project-education-mission/image5.png";

import id4_img1 from "../assets/works/project-smile/image1.png";
import id4_img2 from "../assets/works/project-smile/image2.png";
import id4_img3 from "../assets/works/project-smile/image3.png";
import id4_img4 from "../assets/works/project-smile/image4.png";

import id5_img1 from "../assets/works/blanket-donation-drive1/image1.png";
import id5_img2 from "../assets/works/blanket-donation-drive1/image2.png";
import id5_img3 from "../assets/works/blanket-donation-drive1/image3.png";

import id6_img1 from "../assets/works/blanket-donation-drive2/image1.png";
import id6_img2 from "../assets/works/blanket-donation-drive2/image2.png";
import id6_img3 from "../assets/works/blanket-donation-drive2/image3.png";
import id6_img4 from "../assets/works/blanket-donation-drive2/image4.png";

import id7_img1 from "../assets/works/children's-day-celebration/image1.png";
import id7_img2 from "../assets/works/children's-day-celebration/image2.png";
import id7_img3 from "../assets/works/children's-day-celebration/image3.png";
import id7_img4 from "../assets/works/children's-day-celebration/image4.png";

import id8_img1 from "../assets/works/stray-dogs/image1.png";
import id8_img2 from "../assets/works/stray-dogs/image2.png";
import id8_img3 from "../assets/works/stray-dogs/image3.png";
import id8_img4 from "../assets/works/stray-dogs/image4.png";
import id8_img5 from "../assets/works/stray-dogs/image5.png";

import id9_img1 from "../assets/works/food-donation/image1.png";
import id9_img2 from "../assets/works/food-donation/image2.png";
import id9_img3 from "../assets/works/food-donation/image3.png";
import id9_img4 from "../assets/works/food-donation/image4.png";

const projects = [
  {
    id: 1,
    title: "Food Donation Drive (COVID-19)",
    description: "Many families have become financially weak due to the corona pandemic. Due to the collapse of businesses, the livelihoods of all the families have been snatched away. People earning money from daily wages do not have enough ration to eat.",
    detailedDescription: "Our team organized a Food Donation Drive to help families affected by the COVID-19 pandemic. We distributed essential food items like rice, lentils, oil, and vegetables to support those who lost their income sources during the lockdown.",
    date: "2024-05-10",
    images: [id1_img1, id1_img2, id1_img3]
  },
  {
    id: 2,
    title: "Mask Donation Drive",
    description: "Amid the global pandemic, our team decided to distribute masks to poor people who can't afford them.",
    detailedDescription: "Along with masks, we also distributed biscuits, cakes to poor kids, and clothes to people living in slums near Moin Ul Haq Stadium, Patna, Bihar. This initiative aimed to protect vulnerable populations from COVID-19 and provide some relief in these challenging times.",
    date: "2024-05-09",
    images: [id2_img1, id2_img2, id2_img3]
  },
  {
    id: 3,
    title: "Project Education Mission",
    description: "Our team visited Safeena Baal Grih (an orphanage) to provide educational materials and essentials to orphan kids.",
    detailedDescription: "We distributed books (class 1st to class 7th), notebooks, toothpaste, shampoo, soap, indoor games, clothes, and ration kits. We spent half of our day with them, playing games and engaging in various activities, making it a memorable experience for the children.",
    date: "2024-06-15",
    images: [id3_img1, id3_img2, id3_img3, id3_img4, id3_img5]
  },
  {
    id: 4,
    title: "Project Smile",
    description: "Our team, along with Khitij NGO, distributed study materials and learning kits to 150 children of a slum.",
    detailedDescription: "Materials given included pencils, erasers, sharpeners, rulers, copies, drawing books, color pencils, and books. The initiative aimed to support the education of underprivileged children and encourage learning.",
    date: "2024-07-01",
    images: [id4_img1, id4_img2, id4_img3, id4_img4]
  },
  {
    id: 5,
    title: "Blanket Donation Drive 1",
    description: "Providing warmth to the needy during the winter season.",
    detailedDescription: "Our first blanket donation drive was successfully conducted by our group among the poor and needy people around prime locations in Patna, Bihar. The event aimed to protect the vulnerable population from the harsh winter cold.",
    date: "2023-12-15",
    images: [id5_img1, id5_img2, id5_img3]
  },
  {
    id: 6,
    title: "Blanket Donation Drive 2",
    description: "Continuing our efforts to provide warmth to those in need.",
    detailedDescription: "Our second blanket donation drive focused on reaching out to more needy individuals in Patna, ensuring that as many people as possible could stay warm during the cold months.",
    date: "2024-01-10",
    images: [id6_img1, id6_img2, id6_img3, id6_img4]
  },
  {
    id: 7,
    title: "Children's Day Celebration",
    description: "Celebrating Children's Day with underprivileged kids.",
    detailedDescription: "Our team, along with Kshitij NGO, celebrated Children's Day by distributing biscuits, samosas, chocolates, sweets, and other eatables to underprivileged kids. We also provided indoor games kits like Carrom and Ludo, making the day special and memorable for the children.",
    date: "2024-11-14",
    images: [id7_img1, id7_img2, id7_img3, id7_img4]
  },
  {
    id: 8,
    title: "Food for Stray Dogs",
    description: "Providing food and care for stray dogs.",
    detailedDescription: "We initiated a program to feed stray dogs, ensuring that these animals have access to food and care. Our team regularly feeds stray dogs in various areas, promoting kindness towards animals.",
    date: "Ongoing",
    images: [id8_img1, id8_img2, id8_img3, id8_img4, id8_img5]
  },
  {
    id: 9,
    title: "Food Donation for Orphans",
    description: "Feeding orphan kids on special occasions.",
    detailedDescription: "We provide food to orphan kids during special occasions, ensuring they receive nutritious meals and feel loved and cared for. This initiative helps in bringing smiles to their faces and making the occasions special for them.",
    date: "Ongoing",
    images: [id9_img1, id9_img2, id9_img3, id9_img4]
  },
  {
    id: 10,
    title: 'Fund Raising Webinar on: Depression Among Youngsters',
    description: 'A webinar addressing depression among youngsters.',
    detailedDescription: 'This webinar focuses on raising awareness about depression among young people. The Chief Guest is Ms. Srabani Chatterjee, a Clinical Psychologist, with Muneer Ashraf serving as the Event Head. The speakers include Devyani Sisodia from Greater Noida, Sakshi Giri from Ranchi, Nida Shams from Manipal, Fahad Gayas from Patna, Ujjwal Bharadwaj from Patna, Avisha Mishra from Kanpur, Fawaz Rahman from Patna, Umang from Lucknow, Animesh Kumar from Ranchi, Sanchita from Bengaluru, Shubham Dwivedi from Prayagraj, Rahul Chand from New Delhi, Garima Sahu from Prayagraj, Rahul Srivastava from New Delhi, Apoorva Raj from Jaipur, Abhishek Jha from New Delhi, and Ayush Harsh from Kolkata.',
    date: '2024-11-14'

  },
  {
    id: 11,
    title: 'Open Mic Event – The Virtual Verse',
    description: 'An open mic event showcasing poetic talents.',
    detailedDescription: 'The Virtual Verse is an open mic event featuring Ms. Oshin, an Anchor at Doordarshan and Head of Poetic Atma, Bihar, Jharkhand, and Dr. Pallavi Mishra, an Associate Professor at Amity University, Jaipur, as the Chief Guests. The Event Heads are Muneer Ashraf, Samanta Sagar, Sania Mallick, and Sanskriti Singh. The speakers include Parth Singh, Juhi Tomar, Sonal Rasthod, Sansriti Pandey, Shashank Raj Kashyap, Anjali Tiwari, Lavyana Singh, Paramjeet, Kapil Mansi, Avisha Mishra, Nisha Kumari, Animesh, Garima Sahu, Shubham Dwivedi, Vikas Mauya, Alok Singh, Rahul Singh, Sashi Bharitya, Riya Sri, and Shivansh Shekhar.',
    date: '2022-11-14',
    
  }
  
];

const DetailedProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <div className="p-6 mx-auto bg-white rounded-lg shadow-md w-[95%] lg:w-[80%]">
            <h1 className="text-3xl md:text-5xl font-bold text-[#280101] mb-8">{project.title}</h1>
            {project.images && project.images.length > 0 ? (
              project.images.length === 1 ? (
                <div className="flex justify-center mb-8">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover w-full lg:w-[80%] h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="flex justify-center mb-4">
                  <Slider {...settings} className="w-full rounded-lg lg:w-3xl">
                    {project.images.map((image, index) => (
                      <div key={index} className="flex justify-center">
                        <img
                          src={image}
                          alt={`Image ${index + 1}`}
                          className="object-cover w-full h-[300px] md:h-[600px] rounded-lg"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )
            ) : (
              <div>No images available</div>
            )}
            <p className="mb-4 text-xl font-bold text-gray-600">{project.description}</p>
            <p className="mb-4 text-lg text-gray-600">{project.detailedDescription}</p>
            <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
              <span>{project.date}</span>
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/our-works" className="bg-[#fee57e] text-[#280101] py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default DetailedProjectPage;