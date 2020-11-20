import React from 'react'
import  Button  from '../../components/button/index';
import styled from 'styled-components'
import Footer from '../../components/footer';
import { theme } from '../../theme';
import SectionTitle from '../../components/sectionTitle';
import backgroundImg from '../../assets/pictures/CleaningService.jpg'
const ContainerContact = styled.div`
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
const FormWrapper = styled.div`
padding-top:3vh;
width:500px;
max-width:80%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:0;
border-radius:2vh;
text-align:left;
background-color:rgb(0, 185, 151,.5);
`;

const FormEmail = styled.form`
  margin-left:auto;
  margin-right:auto;
  width:90%;
  padding:2vh;
`;

const InputName = styled.input`
  width:80%;
  color:rgb(8, 122, 122);
`;

const TextAreaEmail = styled.textarea`
width:80%;
  max-width:80%;
  color:rgb(8, 122, 122);
`;


function Soumission() {
  return (
    <ContainerContact >
      <BackgroundFilter>
      <h2 style={{color:"white" , marginTop:"10vh"}}>Soumission</h2>
      <FormWrapper>
      <FormEmail  method="POST" encType="multipart/form-data" name="EmailForm">
        <label style={{color:"white", fontWeight:"bold"}}>Nom:</label><br/>
        <InputName type="name"  name="ContactName"></InputName>
        <br/><br/>
        <label style={{color:"white", fontWeight:"bold"}}>Email:</label><br/>
        <InputName type="email"  name="ContactEmail"></InputName>
        <br/><br/>
        <label style={{color:"white", fontWeight:"bold"}}>Message:</label><br/>
        <TextAreaEmail name="ContactCommentt" rows="6" cols="20"></TextAreaEmail>
        <br/><br/>
        {/* <input type="submit" value="Submit"/> */}
        <label style={{color:"white", fontWeight:"bold"}}>Sélectionner le service:</label><br/>
        <select name="cars" id="cars">
          <option value="volvo">Entretien Commercial</option>
          <option value="saab">Entretien Industriel</option>
          <option value="opel">Entretien après Construction</option>
          <option value="audi">Nettoyage des vitres</option>
          <option value="audi">Décapage & Cirage de Plancher</option>
          <option value="audi">Autre</option>
        </select>
      <br/><br/>
        <Button size={"small"}>Soumettre</Button>
      </FormEmail>
      </FormWrapper>
      </BackgroundFilter>
    </ContainerContact>
  )
}

export default Soumission
