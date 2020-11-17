import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';
import Office  from '../../assets/pictures/Offices.jpg'

const ServiceWrap = styled.section`
  /* margin-left:10%; */
  /* margin-right:auto; */
  display:flex;
  /* flex-direction:row; */
  justify-content:center;
  width:100%;
  height:30vh;
  &:hover{
    background:green;
  }
`;
const Service = styled.div`
  display:flex;
  flex-direction:column;
  width:40%;
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
  /* justify-content:left;
  right:0; */
  width:50%;
  /* height:90%; */
  background:url('${Office}') no-repeat;
  background-size: contain;
  /* margin-left:10%; */
  /* background-color:rgba(55,55,55,0.89); */
`;

function OurService(props) {
  return (
    <div>
    <ServiceWrap>
      {/* <Marginer direction="horizontal" margin="10vh" /> */}
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
