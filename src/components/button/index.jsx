import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme';

const ButtonWrapper = styled.button`
   /* padding:7px 15px; */
   padding:${({size})=> (size === 'small' ? "5px 8px" : size === 'big' ? "7px 15px" : "2px 4px")};
   border-radius:5px;
   background-color:${theme.logo};
   color:white;
   font-weight:bold;
   font-size:${({size})=> (size === 'small' ? "2.3vh" : size === 'big' ? "2.3vh": "2vh")};
   outline:none;
   border: 2px solid transparent;
   cursor:pointer;

   &:hover {
     background-color:transparent;
     border:2px solid ${theme.logo};
     transition: all 220ms ease-in-out;
   }
`;


function Button(props) {
  return (
    <ButtonWrapper {...props}>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button
