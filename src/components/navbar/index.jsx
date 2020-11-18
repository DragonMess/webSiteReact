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
    flex-direction:column;
    min-width:100%;
    min-height:40vh;
    position:absolute;
    top:7vh;
    /* left:0; */
    left:${({click}) => (!click ? "0" : '-1000px')};
    opacity:1;
    transition: all .5s ease;
    background:rgba(55,55,55,0.92);

  }
`;
const LinksTxt = styled(Link)`
  color:white;
  font-size:calc(2px + 1.5vh);
  text-decoration:none;
  &:hover, :focus{
    color:${theme.logo};
    font-weight:bold;
  }
  @media screen and (max-width:960px){
    /* display:table; */
    font-size:1.7vh;
    margin-bottom:20px;
    margin-top:20px;
      &:hover,&:focus{
    color:black;
    font-weight:bold;
    font-size:3vh;
  }
  }
`;
const MobileIcon = styled.div`
  display:none;
  color:white;
  @media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100,60%);
    font-size:2vh;
    text-align:center;  
    cursor: pointer;
  }
`;

function Navbar(props) {

  const [click , setClick] =useState(true);

  const handleClick = ()=> {
    setClick(!click);
  }
  // console.log(click)
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
