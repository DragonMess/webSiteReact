import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../assets/pictures/ContactUs.jpg'
import Social from '../../components/social';
import Footer from '../../components/footer'
import SectionTitle from '../../components/sectionTitle';

const ContactWarapper = styled.article`
  width:100%;
  height:100vh;
  padding:0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;   
`;
const BackgroundFilter = styled.div`
  width:100%;
  height:100vh;
  padding-top:5vh;
  background-color:rgba(55,55,55,0.8);

`;

const ContactCard = styled.section`
  width:500px;
  max-width:80%;
  min-height:120px;
  margin:15vh auto;
  background-color:rgb(0, 185, 151,.5);
  border-radius:2vh;
  padding:2%;
    @media screen and (max-width:960px){
    max-width:90%;
    margin:10vh auto;
  }
`;

const ContactHr = styled.hr`
  
  border: 1px solid #ffff;
`;

const ContactWay = styled.div`
  padding: 0 5%;
  color:#fff;
  font-size:3vh;
  text-decoration:none;
  a{
     display:inline-block;
     margin:2vh 3vh;
     text-decoration:none;
     color:#fff;
  }

`;

function Contact(props) {
  return (
    <>
    <ContactWarapper>
      <BackgroundFilter>
      <ContactCard>
        <SectionTitle Margin={"0vh auto"} colorFont={"white"} Fontweight={"700"} FontSize={"4vh"}>Contactez-nous</SectionTitle>
        <ContactHr/>
        <ContactWay>
          <FontAwesomeIcon icon={faPhoneAlt}/>
          <a href="tel:5142471423">(514) 247-1423</a>    
        </ContactWay>
        <ContactWay>
          <FontAwesomeIcon icon={faEnvelope}/>
          <a href="mailto:rudadiv@gmail.com">rudadiv@gmail.com</a>    
        </ContactWay>
        <ContactHr/>
        <Social></Social>
      </ContactCard>
      </BackgroundFilter>
    </ContactWarapper>
    <Footer></Footer>
    </>
  )
}

export default Contact
