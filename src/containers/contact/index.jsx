import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../assets/pictures/ContactUs.jpg'

const ContactWarapper = styled.article`
  width:100%;
  height:100vh;
  padding:0;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;   
`;
const BackgroundFilter = styled.div`
  width:100%;
  height:100vh;
  background-color:rgba(55,55,55,0.5);
`;

const ContactCard = styled.section`
  max-width:90%;
  background-color:red;
`;

function Contact(props) {
  return (
    <ContactWarapper>
      <BackgroundFilter>
      <ContactCard>
        hefj;a
      </ContactCard>
      </BackgroundFilter>
    </ContactWarapper>
  )
}

export default Contact
