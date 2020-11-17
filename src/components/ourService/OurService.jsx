import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';
import Office  from '../../assets/pictures/Offices.jpg'

const ServiceWrap = styled.section`
  margin-left:auto;
  margin-right:auto;
  display:flex;
  width:70%;
  height:30vh;
  margin-bottom:10vh;
  &:hover{
    background:green;
  }
`;
const Service = styled.div`
  display:flex;
  flex-direction:column;
  max-width:100vw;
  background-color:red;
`;
const Title = styled.h3`
  font-size:4vh;
  font-weight:500;
  text-align:center;
  /* margin:0; */
`;
const Description = styled.p`
  font-size:3vh;
  font-weight:300;
  text-align:center;
  color:#7A7A7A;
  /* margin:2vh 0 0 0; */
`;
const ServiceImg = styled.div`
  display:fex;
  min-width:30vw;
  background:url('${Office}') no-repeat right;
  background-size: contain;
  background-color:rgba(55,55,55,0.5);
  opacity: 0.3;
  /* margin-left:10%; */
  /* background-color:rgba(55,55,55,0.89); */
`;

function OurService(props) {
  return (
    <div>
    <ServiceWrap>
      <Service>
        <Title>Entretien Comercial</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta nulla doloremque, quidem reprehenderit maxime minus adipisci vel ea corporis!</Description>
      </Service>
      <ServiceImg ></ServiceImg>
    </ServiceWrap>
        <ServiceWrap>
      <Service>
        <Title>Entretien Comercial</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dicta nulla doloremque, quidem reprehenderit maxime minus adipisci vel ea corporis!</Description>
      </Service>
      <ServiceImg ></ServiceImg>
    </ServiceWrap>

    </div>
  )
}

export default OurService
