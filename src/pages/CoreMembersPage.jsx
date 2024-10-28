import React from 'react'
import Navbar from '../components/Navbar'
import CoreMembers from '../components/CoreMembers'
import Footer from '../components/Footer'
import { useEffect } from 'react'
function CoreMembersPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when component mounts
      }, []);
  return (
    <>
        <Navbar/>
        <CoreMembers/>
        <Footer/>
    </>
  )
}

export default CoreMembersPage