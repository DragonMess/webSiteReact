import React, { useState } from 'react'
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components'
import backgroundImg from '../assets/pictures/buildings.jpg'
import Button from '../components/button';
import DownArrow from '../components/downArrow';
import Logo from '../components/logo';
import { Marginer } from '../components/marginer';
import Social from '../components/social';

const TopContainer = styled.article`
  width:100%;
  height:100vh;
  padding:0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;   

   @media screen and (max-width:960px){
    /* height:80vh; */
  }
`;
const BackgroundFilter = styled.div`
  width:100%;
  height:100vh;
  background-color:rgba(55,55,55,0.89);
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content:center;
  position:relative;
`;
const SloganTxt = styled.h1`
  margin:0;
  font-size:calc(10px + 2vw);
  font-weight:700;
  line-height:1.4;
  color:white;
  text-align:center;
`;

const DownArrowContainer = styled.div`
  position:absolute;
  bottom:2vh;
  left:50%;
  transform: translate(-50%);
  cursor: pointer;
  @media screen and (max-width:960px){
    bottom:10vh;
  }
`;

function TopSection() {

  const scrollDownNext = () => {
    scroller.scrollTo("servicesSection",{smooth:true, duration:1500})
  }

  const [ classChange , setClassChange ] = useState("slogan")
  const handleAnimation = ()=> {
    setClassChange("slogan1")
  }
  return (
    <Element name="topSection" >
    <TopContainer id="home">
      <BackgroundFilter>
        <Marginer direction="vertical" margin="9vh" />
        <Logo />
        <Marginer direction="vertical" margin="3vh" />
        <SloganTxt className="slogan1">ENTRETIEN MÉNAGER COMMERCIAL</SloganTxt>
        <SloganTxt className="slogan2">ET INDUSTRIEL</SloganTxt>
        <Marginer direction="vertical" margin="4vh" />
        <Button size='big'>OBTENIR UNE ESTIMATION</Button>
         <Marginer direction="vertical" margin="2vh" />
         <Social></Social>
        <DownArrowContainer onClick={scrollDownNext}>
          <DownArrow />
        </DownArrowContainer>
      </BackgroundFilter>
    </TopContainer>
    </Element>
  )
}

export default TopSection
