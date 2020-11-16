import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar';
import TopSection from '../TopSection';
import ServicesSection from './services';


const PageContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`;


function Homepage() {
  return (
<PageContainer>
  <Navbar></Navbar>
  <TopSection/>
  <ServicesSection/>
</PageContainer>
  )
}

export default Homepage
