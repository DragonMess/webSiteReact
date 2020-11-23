import React from 'react'
import styled from 'styled-components';
import Logo from '../logo';
import { Marginer } from '../marginer';

const FooterWrapper = styled.div`
   left: 0;
   bottom: -2vh;
   width: 100%;
   max-height:100vh;
   background-color:rgb(34,34,34);
   color: white;
   display:flex;
   flex-direction:column;
   align-items:center;
   @media screen and (max-width:960px){
     visibility:none;
     display:none;
   }
`;
const Copyrigth = styled.p`
  font-size:1.5vh;
  margin:0;
`;

const LinkDev = styled.a`
  color:#ffff;
`;

function Footer(props) {
  return (
    <FooterWrapper>
      <p></p>
      <Logo inLine={"footer"} ></Logo>
      <p>À votre disposition pour tous vos besoin</p>
  <Copyrigth>© 2020 Copyright: <LinkDev href="https://portfolio-camilo-pineda.herokuapp.com/">CamiloPinedaDev </LinkDev></Copyrigth>
    <Copyrigth>Created by: DragonMess </Copyrigth>
    <Marginer direction="vertical" margin="2vh" ></Marginer>
    </FooterWrapper>
  )
}

export default Footer
