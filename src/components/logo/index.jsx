import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/pictures/logo.svg'
import {theme} from '../../theme.js'

const LogoContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
`;

const LogoImg = styled.img`
  width:8em;
  height:8em;
`;
const LogoTxt = styled.div`
  margin-top:6px;
  font-size:52px;
  font-weight:900;
  text-shadow: 0px 2px 4px rgba(0,0,0, 0.4);
  color:${theme.logo};
  `;


function Logo(props) {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoTxt>RED ENTRETIEN</LogoTxt>
    </LogoContainer>
  )
}

export default Logo
