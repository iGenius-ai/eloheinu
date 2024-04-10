"use client"

import Navbar from '@/components/Navbar'
import AboutUs from '@/components/about/AboutUs'
import Hero from '@/components/about/Hero'
import React from 'react'
import Footer from '../footer/Footer';

const AboutApp = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  )
}

export default AboutApp