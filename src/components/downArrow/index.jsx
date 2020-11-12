import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, } from "@fortawesome/free-solid-svg-icons";
import { theme } from '../../theme';


const ArrowContainer = styled.div`
  width:46px;
  height:46px;
  border-radius:50%;
  background-color:rgba(113,113,113,0.48);
  display:flex;
  justify-content:center;
  align-items:center;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${theme.logo};
    transition: all 220ms ease-in-out;
  }
`;

const ArrowIcon = styled.div`
  margin-top:4px;
  color:#fff;
  font-size:30px;
`;

function DownArrow() {
    return (
      <ArrowContainer>
        <ArrowIcon>
          <FontAwesomeIcon icon={faAngleDown} />
        </ArrowIcon>
      </ArrowContainer>
    )
  }


export default DownArrow;
