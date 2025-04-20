'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import Features from '@/components/Features'
import Pricing from '@/components/PricingSection'
import Testimonials from '@/components/Testimonials'
import ContactWalla from '@/components/Contact'

const page = () => {
  return (
    <div>
       <Navbar/>
    <Home/>
   <Features/>
   <Pricing/>
   <Testimonials/>
    <ContactWalla/>
    </div>
  )
}

export default page