import React from 'react'
import Navbar from '../components/Navbar'
import DonationForm from '../components/Donation'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function DonationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
  }, []);
  
  return (
    <>
    <Navbar/>
    <DonationForm/>
    <Footer/>
    </>
  )
}

export default DonationPage