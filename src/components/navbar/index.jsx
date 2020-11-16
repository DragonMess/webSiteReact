import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { theme } from '../../theme';
import Logo from '../logo';
import { Marginer } from '../marginer';

const NavBarWrapper = styled.div`
  position:fixed;
  top:0;
  width:100%;
  min-height:7vh;
  z-index:1;
  background-color:#3a3939;
  display:flex;
  justify-content:space-between;
    /* @media screen and (max-width:960px){
    widht:100%;
    height:90vh;
    background-color:green;
  } */
`;
const BrandWrapper = styled.div`
  display:flex;
  flex-direction:row;
`;
const LinksWrapper = styled.div`
  min-width:500px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  /* text-align:center; */
  @media screen and (max-width:960px){
    display:flex;
    /* flex-wrap:wrap; */
    flex-direction:column;
    width:100%;
    min-height:30vh;
    position:absolute;
    top:80px;
    /* left:0; */
    left:${({click}) => (!click ? "0" : '-1000px')};
    opacity:1;
    transition: all .5s ease;
    background-color:${theme.gris};
  }
`;
const LinksTxt = styled(Link)`
  color:white;
  font-size:calc(2px + 1.2vh);
  text-decoration:none;
  @media screen and (max-width:960px){
    widht:100%;
    display:table;
  }
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

function Navbar(props) {

  const [click , setClick] =useState(true);

  const handleClick = ()=> {
    setClick(!click);
  }
  console.log(click)
  return (
    <NavBarWrapper>
      <Marginer direction="horizontal" margin="0" />
      <BrandWrapper>
        <Logo inLine ></Logo>
      </BrandWrapper>
        <MobileIcon onClick={handleClick}>{click? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
        </MobileIcon>
      <LinksWrapper click={click}>
        <LinksTxt to="">SERVICES</LinksTxt>
        <LinksTxt>SOUMISSION</LinksTxt>
        <LinksTxt>À PROPOS</LinksTxt>
        <LinksTxt>CONTACT</LinksTxt>
      </LinksWrapper>

      <Marginer direction="horizontal" margin="0" />
    </NavBarWrapper>
      
  )
}

export default Navbar
