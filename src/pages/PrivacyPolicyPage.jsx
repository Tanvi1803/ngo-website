import React from 'react'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'

function PrivacyPolicyPage() {
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
  }, []);
  return (
    <>
        <Navbar/>
        <PrivacyPolicy/>
        <Footer/>
    </>
  )
}

export default PrivacyPolicyPage