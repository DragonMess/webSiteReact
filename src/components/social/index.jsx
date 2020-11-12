import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme';

const SocialWrapper = styled.div`
  max-width:80%;
  width:500px;
  display:flex;
  justify-content:space-evenly;
`;

const SocialIcon = styled.div`
  margin-top:4px;
  color:#fff;
  font-size:35px;
  cursor: pointer;
  

  &:hover {
    color: ${theme.logo};
    transition: all 220ms ease-in-out;
  }
`;


function Social() {
  return (
    <SocialWrapper>
      <SocialIcon>
        <FontAwesomeIcon icon={faFacebook}/>
      </SocialIcon>
      <SocialIcon>
        <FontAwesomeIcon icon={faLinkedin}/>
      </SocialIcon>
      <SocialIcon>
        <FontAwesomeIcon icon={faInstagram}/>
      </SocialIcon>
    </SocialWrapper>
  )
}

export default Social
