// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import IntroSection from '../components/Intro';
import SponsorSection from '../components/Sponsor';
import ConnectWithUs from '../components/Connect';
import { useEffect } from 'react';
import Footer from '../components/Footer';

function HomePage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
      }, []);
    return (
        <>
            <Navbar />
            <HeroSection />
            <IntroSection />
            <SponsorSection />
            <ConnectWithUs />
            <Footer/>
        </>
    );
}

export default HomePage;
