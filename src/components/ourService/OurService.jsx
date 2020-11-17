import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';
import Office  from '../../assets/pictures/Offices.jpg'

const ServiceWrap = styled.section`
  margin-left:auto;
  margin-right:auto;
  padding-left:3vh;
  display:flex;
  flex-direction:row;
  width:70%;
  min-height:30vh;
  margin-bottom:10vh;
    background-size: contain;
  /* background-color:rgba(55,55,55,0.5); */
  border-radius:2vh;
  /* opacity: 0.9; */
  &:hover{
    /* background:green; */
  }
  @media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    height:90vh;
  }
`;
const Service = styled.div`
  display:flex;
  flex-direction:column;
  max-width:100vw;

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
  color:white;
  margin:0;
`;
const ServiceImg = styled.div`
  border-radius:2vh;
  /* display:fex; */
  min-width:30vw;
  background:url('${Office}') no-repeat right;
  background-size: contain;
  opacity: 0.7;
  @media screen and (max-width:960px){
    margin-left:auto;
    margin-right:auto;
    width:90vw;
    height:40vh;
    border-radius:0;
  }
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
