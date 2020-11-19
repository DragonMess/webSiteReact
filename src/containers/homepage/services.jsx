import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components'
import { Marginer } from '../../components/marginer';
import OurService from '../../components/ourService/OurService';
import SectionTitle from '../../components/sectionTitle';

const ServicesContainer = styled(Element)`
  width:100%;
  max-height:1000vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 10px 0;
`;

function ServicesSection(porps) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Services</SectionTitle>
      <OurService 
      title= {"Entretien Commercial"}
      description={'Lorem Camilo ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta nulla doloremque, quidem reprehenderit maxime minus adipisci vel ea corporis!'}
      srcImg={'../Offices.jpg'}
      />
      <OurService 
      title= {"Entretien Industrial"}
      description={'Lorem Camilo ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta nulla doloremque, quidem reprehenderit maxime minus adipisci vel ea corporis!'}
      srcImg={'../Factory.jpg'}
      />
      <OurService 
      title= {"Entretien après Construction"}
      description={'Lorem Camilo ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta nulla doloremque, quidem reprehenderit maxime minus adipisci vel ea corporis!'}
      srcImg={'../Construction.jpg'}
      />
      
    </ServicesContainer>
  )
}

export default ServicesSection
