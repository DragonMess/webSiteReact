import React from 'react'
import Footer from '../../components/footer';
import PageContainer from '../pageCointainer/index'
import TopSection from '../TopSection';
import ServicesSection from './services';

function Homepage() {
  console.log("here")
  return (
<>
  <TopSection/>
  <ServicesSection/>
  <Footer />
</>
  )
}

export default Homepage
