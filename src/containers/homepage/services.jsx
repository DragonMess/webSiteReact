import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components'
import { Marginer } from '../../components/marginer';
import OurService from '../../components/ourService/OurService';
import SectionTitle from '../../components/sectionTitle';

const ServicesContainer = styled(Element)`
  width:100%;
  min-height:1500px;
  display:flex;
  flex-direction:column;
  padding: 10px 0;
`;

function ServicesSection(porps) {
  return (
    <ServicesContainer name="servicesSection">

      <SectionTitle>Servies</SectionTitle>
      <Marginer direction="vertical" margin="2vh" />
      <OurService></OurService>
      
    </ServicesContainer>
  )
}

export default ServicesSection
