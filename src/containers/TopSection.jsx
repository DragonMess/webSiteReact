import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../assets/pictures/buildings.jpg'
import Button from '../components/button';
import DownArrow from '../components/downArrow';
import Logo from '../components/logo';
import { Marginer } from '../components/marginer';
import Social from '../components/social';
import {theme} from '../theme.js'

const TopContainer = styled.div`
  width:100%;
  height:100vh;
  padding:0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  // background-size: cover;
  background-size: 100% 100%;
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
  font-size:33px;
  font-weight:700;
  line-height:1.4;
  color:white;
`;

const DownArrowContainer = styled.div`
  position:absolute;
  bottom:30px;
  left:50%;
  transform: translate(-50%);
  cursor: pointer;
`;

function TopSection() {
  return (
    <TopContainer>
      <BackgroundFilter>
        <Marginer direction="vertical" margin="8em" />
        <Logo/>
        <Marginer direction="vertical" margin="4em" />
        <SloganTxt>ENTRETIEN MÉNAGER COMMERCIAL</SloganTxt>
        <SloganTxt>ET INDUSTRIEL</SloganTxt>
        <Marginer direction="vertical" margin="4em" />
        <Button>OBTENIR UNE ESTIMATION</Button>
         <Marginer direction="vertical" margin="4em" />
         <Social></Social>
        <DownArrowContainer>
          <DownArrow />
        </DownArrowContainer>
      </BackgroundFilter>

    </TopContainer>
  )
}

export default TopSection
