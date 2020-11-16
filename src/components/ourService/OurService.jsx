import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';

const ServiceWrap = styled.section`
  display:flex;
  flex-direction:row;
  width:100%;
  height:100vh;
`;
const Service = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
`;
const Title = styled.h3`
  font-size:45px;
  font-weight:500;
  text-align:center;
`;
const Description = styled.p`
  font-size:25px;
  font-weight:300;
`;

function OurService(props) {
  return (
    <ServiceWrap>
      <Marginer direction="horizontal" margin="10vh" />
      <Service>
        <Title>Entretien Comercial</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ducimus delectus nihil!</Description>
      </Service>

      <Marginer direction="horizontal" margin="10vh" />
    </ServiceWrap>
  )
}

export default OurService
