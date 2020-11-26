import React from 'react'
import styled from 'styled-components';
import OurService from '../../components/ourService/OurService';
import SectionTitle from '../../components/sectionTitle'
import backgroundImg from '../../assets/pictures/Team.jpg'
import Footer from '../../components/footer';


const MainContainer = styled.div`
  padding:0vh;
  text-align:center;
  width:100%;
  height:100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;   
`;
const BackgroundFilter = styled.div`
  width:100%;
  height:100vh;
  background-color:rgba(55,55,55,0.8);
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content:center;
  position:relative;
`;

const WrapSection = styled.section`
  margin-left:auto;
  margin-right:auto;
  display:flex;
  flex-direction:row;
  max-width:500px;
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
const Card = styled.section`
  width:500px;
  /* max-width:80%; */
  height:600px;
  max-height:800px;
  
  margin:15vh auto;
  background-color:rgb(0, 185, 151,.5);
  border-radius:2vh;
  padding:0 0 0vh 0;
    @media screen and (max-width:960px){
    max-width:90%;
    margin:10vh auto;
    min-height:450px;
  }
`;
const Description = styled.p`
  font-size:3vh;
  font-weight:300;
  line-height: 5vh;
  text-align:center;
  color:#fff;
  margin:0 auto;
  max-width:400px;
  min-height:30vh;
  font-style: normal;
    @media screen and (max-width:960px){
      /* margin-bottom:1vh; */
      font-size:2.5vh;
      }
`;
function Apropos(props) {
  return (
    <MainContainer>
      <BackgroundFilter>
        <Card>
      <SectionTitle colorFont={"white"} Fontweight={"700"} FontSize={"4vh"} Margin={"4vh auto"}>À propos de nous</SectionTitle>
      <WrapSection>
        <Description>
          RED ENTRETIEN est une entreprise de nettoyage dans le Grand Montréal spécialise dans le menage commercial et industriel. Depuis plus de 10 ans, notre équipe offre de services d'excelence. Notre but c'est la satisfaction de nos clients, c'est pourquoi nous offrons de service de nettoyage de qualité et de personnalisation.
        </Description>
      </WrapSection>
      </Card>
      <Footer></Footer>
      </BackgroundFilter>
    </MainContainer>
  )
}

export default Apropos
