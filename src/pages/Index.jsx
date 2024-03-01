import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import InvestmentPlans from '../components/InvestmentPlans';
import ChartAnalysis from '../components/ChartAnalysis';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Index() {

  return (
    <>
      <Hero />
      <HowItWorks />
      {/* <InvestmentPlans /> */}
      {/* <ChartAnalysis /> */}
      {/* <Testimonials /> */}
    </>
  );
}
