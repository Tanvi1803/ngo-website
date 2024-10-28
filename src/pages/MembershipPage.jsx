import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/MembershipForm'
import Footer from '../components/Footer'
import { useEffect } from 'react'

function MembershipPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
  }, []);
  return (
    <>
        <Navbar/>
        <Form/>
        <Footer/>
       

    </>
  )
}

export default MembershipPage