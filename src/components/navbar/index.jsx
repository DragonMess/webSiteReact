import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../logo';
import { Marginer } from '../marginer';

const NavBarWrapper = styled.div`
  position:fixed;
  top:0;
  width:100%;
  min-height:7vh;
  z-index:1;
  /* background-color:#3a3939; */
  display:flex;
  justify-content:space-between;
`;
const BrandWrapper = styled.div`
  display:flex;
  flex-direction:row;
`;
const LinksWrapper = styled(Link)`
  min-width:500px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  text-align:center;
`;
const LinksTxt = styled.div`
  color:white;
  font-size:calc(2px + 1.2vh);
`;
const MobileIcon = styled.div`
  display:none;
  @media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100,60%);
    font-size:1.8rem;
    cursor: pointer;
  }
`;

function Navbar(porps) {
  return (
    <NavBarWrapper>
      <Marginer direction="horizontal" margin="0" />
      <BrandWrapper>
        <Logo inLine ></Logo>
      </BrandWrapper>
      <LinksWrapper>
        <LinksTxt>SERVICES</LinksTxt>
        <LinksTxt>SOUMISSION</LinksTxt>
        <LinksTxt>À PROPOS</LinksTxt>
        <LinksTxt>CONTACT</LinksTxt>
      </LinksWrapper>
      <MobileIcon>jljsdf</MobileIcon>
      <Marginer direction="horizontal" margin="0" />
    </NavBarWrapper>
      
  )
}

export default Navbar
