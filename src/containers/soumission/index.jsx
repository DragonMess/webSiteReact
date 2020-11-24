import React from 'react'
import  Button  from '../../components/button/index';
import styled from 'styled-components'
import Footer from '../../components/footer';
import backgroundImg from '../../assets/pictures/CleaningService.jpg'

const ContainerContact = styled.div`
  padding:0vh;
  text-align:center;
  width:100%;
  max-height:100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;   
`;
const BackgroundFilter = styled.div`
  width:100%;
  max-height:100vh;
  background-color:rgba(55,55,55,0.8);
  display:flex;
  flex-direction:column;
  align-items:center;
  align-content:center;
  position:relative;
`;
const FormWrapper = styled.div`
padding-top:3vh;
width:500px;
max-width:80%;
display:flex;
flex-direction:column;
align-items:center;
margin:10vh auto 3vh;
border-radius:2vh;
text-align:left;
background-color:rgb(0, 185, 151,.5);
`;
const ContactHeader = styled.header`
  color:#fff;
  font-weight:700;
  font-size:calc(10px + 5vh);
  text-align:center;
  padding-top:1vh;
  @media screen and (max-width:960px){
    font-size:calc(10px + 3vh);
  }
`;

const FormEmail = styled.form`
  margin-left:auto;
  margin-right:auto;
  width:90%;
  padding:2vh;
`;
const LabelForm = styled.label`  /* text-align:left; */
  color:#fff;
  font-weight:bold;
`;

const InputName = styled.input`
  width:80%;
  color:#fff;
  background-color:rgb(0, 185, 151,.5);
`;

const TextAreaEmail = styled.textarea`
  width:80%;
  max-width:80%;
  color:#fff;
  background-color:rgb(0, 185, 151,.5);
`;


function Soumission() {
  return (
    <>
    <ContainerContact >
      <BackgroundFilter>
      <FormWrapper>
        <ContactHeader>
          Soumission
        </ContactHeader>
      <FormEmail  method="POST" encType="multipart/form-data" name="EmailForm">
        <LabelForm>Nom:</LabelForm><br/>
        <InputName type="name"  name="ContactName"></InputName>
        <br/><br/>
        <LabelForm>Email:</LabelForm><br/>
        <InputName type="email"  name="ContactEmail"></InputName>
        <br/><br/>
        <LabelForm>Message:</LabelForm><br/>
        <TextAreaEmail name="ContactCommentt" rows="6" cols="20"></TextAreaEmail>
        <br/><br/>
        <LabelForm>Sélectionnez le service:</LabelForm><br/>
        <select name="cars" id="cars">
          <option value="volvo">Entretien Commercial</option>
          <option value="saab">Entretien Industriel</option>
          <option value="opel">Entretien après Construction</option>
          <option value="audi">Nettoyage des vitres</option>
          <option value="audi">Décapage & Cirage de Plancher</option>
          <option value="audi">Autre</option>
        </select>
      <br/><br/>
        <Button size={"small"} backColor={"#E6503A"}>Soumettre</Button>
      </FormEmail>
      </FormWrapper>
      </BackgroundFilter>
      <Footer></Footer>
    </ContainerContact>
    
    </>
  )
}

export default Soumission
