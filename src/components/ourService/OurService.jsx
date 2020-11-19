import React from 'react'
import styled from 'styled-components'
import { Marginer } from '../marginer';

const ServiceWrap = styled.section`
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:row;
  width:70%;
  min-height:30vh;
  max-height:100vh;
  margin-bottom:10vh;
  @media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:70vh;
    margin-bottom:-3vh;

  }
`;
const Service = styled.div`
  display:flex;
  flex-direction:column;
  max-width:100vw;
    @media screen and (max-width:960px){
    margin-left:auto;
    margin-right:auto;
    width:90vw;
    height:40vh;
    border-radius:0;
    /* margin-bottom:1vh; */
  }
`;
const Title = styled.h3`
  font-size:4vh;
  font-weight:500;
  text-align:center;
`;
const Description = styled.p`
  font-size:3vh;
  font-weight:300;
  text-align:center;
  color:#7A7A7A;
  margin:0;
    @media screen and (max-width:960px){
      /* margin-bottom:1vh; */
      font-size:2.5vh;
      }

`;
const ServiceImg = styled.div`
  min-width:30vw;
  max-height:30vh;
  /* background-color:red; */
  background:${props => `url(${props.srcImg}) no-repeat center`};
  background-size: contain;
  opacity: 0.7;
  margin-left:2vh;
  @media screen and (max-width:960px){
    margin-left:auto;
    margin-right:auto;
    min-width:90vw;
    height:40vh;
    border-radius:0;
    padding-top:1vh;
  }
`;

function OurService(props) {
  const { title , description , srcImg} = props;
  return (
    <ServiceWrap>
      <Service srcImg={srcImg}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Service>
      <ServiceImg 
      srcImg={srcImg}
      ></ServiceImg>
    </ServiceWrap>
  )
}

export default OurService
