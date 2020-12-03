import React from 'react'
import styled from 'styled-components';
import Logo from '../logo';

const FooterWrapper = styled.div`
   width: 100%;
   min-height:18vh;
   background-color:#3a3939;
   color: white;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   padding:1%;
   margin:0 0 -18vh 0 ;

   @media screen and (max-width:960px){
    padding-top:0;
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
      <Logo inLine={"footer"} ></Logo>
      <p>À votre disposition pour tous vos besoins</p>
  <Copyrigth>© 2020 Copyright: <LinkDev href="https://portfolio-camilo-pineda.herokuapp.com/">CamiloPinedaDev</LinkDev></Copyrigth>
    <Copyrigth>Created by: DragonMess </Copyrigth>
    </FooterWrapper>
  )
}

export default Footer
