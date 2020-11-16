import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/pictures/logo.svg'
import {theme} from '../../theme.js'

const LogoContainer = styled.div`
  display: flex;
  flex-direction:${({inLine})=> (inLine ? "row" : "column" )};
  align-items:center;
`;

const LogoImg = styled.img`
  /* width:8em; */
  width:${({inLine})=> (inLine ? "1.5em" : "8em" )};
  height:${({inLine})=> (inLine ? "1.5em" : "8em" )};
  margin-left:${({inLine})=> (inLine ? "5px" : "0" )};
`;
const LogoTxt = styled.div`
  margin-top:${({inLine})=> (inLine ? "0" : "6px" )};
  font-size:${({inLine})=> (inLine ? "calc(4px + 1.5vh)" : "calc(10px + 4vw)" )};
  margin-left:${({inLine})=> (inLine ? "4px" : "0" )};
  text-align:center;
  font-family:sans-serif;
  font-weight:${({inLine})=> (inLine ? "700" : "900" )};
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
