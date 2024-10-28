import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';

function FaqsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <Navbar />
      <Faqs />
      <Footer/>
    </>
  );
}

export default FaqsPage;
