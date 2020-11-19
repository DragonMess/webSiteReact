import React from 'react'
import styled from 'styled-components';
import Logo from '../logo';
import { Marginer } from '../marginer';

const FooterWrapper = styled.div`
   position: relative;
   left: 0;
   bottom: 0;
   width: 100%;
   min-height:30vh;
   background-color:#3a3939;
   color: white;
   display:flex;
   flex-direction:column;
   align-items:center;


`;

function Footer(props) {
  return (
    <FooterWrapper>
      <Marginer direction="vertical" margin="4vh" ></Marginer>
      <Logo inLine={"footer"} ></Logo>
      <p>À votre disposition pour tous vos besoin</p>
      <p></p>
    </FooterWrapper>
  )
}

export default Footer
