import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components'
import Footer from '../../components/footer';
import OurService from '../../components/ourService/OurService';
import SectionTitle from '../../components/sectionTitle';

const ServicesContainer = styled(Element)`
  width:100%;
  max-height:1000vh;
  height:500vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 15vh 0;
`;

function ServicesSection(porps) {
  return (
    //  RED Entretien est spécialisée dans les contrats d’entretien de bureaux et de commerces.
    <ServicesContainer name="servicesSection" id="service"  >
      <SectionTitle >Services</SectionTitle>
      <OurService 
      title= {"Entretien Commercial"}
      description={"Nous vous offrons des forfaits d'entretien personnalisés pour que vous gardiez l'environement de travail sain et propre."}
      srcImg={'../Offices.jpg'}
      />
      <OurService 
      title= {"Entretien Industriel"}
      description={'Nous vous proposons une expertise dans le secteur du nettoyage industriel pour gardez vos spaces de travail dans les meilleures conditions.'}
      srcImg={'../Factory.jpg'}
      />
      <OurService 
      title= {"Entretien après Construction"}
      description={"Peu importe l'ampleur des travaux après construction, notre équipe vous offre un service d’une excellente qualité."}
      srcImg={'../Construction.jpg'}
      />
      <Footer  />
    </ServicesContainer>
  )
}

export default ServicesSection
