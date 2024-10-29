// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import IntroSection from '../components/Intro';
import SponsorSection from '../components/Sponsor';
import ConnectWithUs from '../components/Connect';
import Footer from '../components/Footer';

function HomePage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
    }, []);

    const openChatbot = () => {
        window.open('http://127.0.0.1:5500/chatbot/index.html', '_blank');
    };

    return (
        <>
            <Navbar />
            <HeroSection />
            <button 
                onClick={openChatbot} 
                style={{ 
                    margin: '20px', 
                    padding: '10px 20px', 
                    backgroundColor: '#4CAF50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    display: 'block', 
                    textAlign: 'center',
                    width: '200px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                Chatbot
            </button>
            <IntroSection />
            <SponsorSection />
            <ConnectWithUs />
            <Footer />
        </>
    );
}

export default HomePage;
