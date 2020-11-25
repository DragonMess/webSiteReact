import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/pictures/logo.svg'
import {theme} from '../../theme.js'

const LogoContainer = styled.div`
  display: flex;
  flex-direction:${({inLine})=> (inLine ? "row" : "column" )};
  align-items:center;
    @media screen and (max-width:960px){
    padding-top:${({inLine})=> (inLine=="nav" ? "0vh" : "1vh" )};
  }
`;

const LogoImg = styled.img`
  /* width:8em; */
  width:${({inLine})=> (inLine=="nav" ? "1.5em" : inLine=="footer"? "3em" : "8em" )};
  height:${({inLine})=> (inLine=="nav" ? "1.5em" : inLine=="footer"? "3em" :"8em" )};
  margin-left:${({inLine})=> (inLine=="nav" ? "5px" : "0" )};

`;
const LogoTxt = styled.div`
  margin-top:${({inLine})=> (inLine=="nav" ? "0": inLine=="footer"? "3px" : "6px" )};
  font-size:${({inLine})=> (inLine=="nav" ? "calc(4px + 1.5vh)" :inLine=="footer"? "calc(10px + 2vw)": "calc(10px + 4vw)" )};
  margin-left:${({inLine})=> (inLine=="nav" ? "4px" : "0" )};
  text-align:center;
  font-family:sans-serif;
  font-weight:${({inLine})=> (inLine=="nav" ? "700" : "900" )};
  text-shadow: 0px 2px 4px rgba(0,0,0, 0.4);
  color:${theme.logo};
  `;


function Logo(props) {
  return (
    <LogoContainer {...props}>
      <LogoImg src={logo} {...props}/>
      <LogoTxt {...props}>RED ENTRETIEN</LogoTxt>
    </LogoContainer>
  )
}

export default Logo
