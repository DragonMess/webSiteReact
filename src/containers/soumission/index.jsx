import React from 'react'
import  Button  from '../../components/button/index';
import styled from 'styled-components'
import Footer from '../../components/footer';
import { theme } from '../../theme';
import SectionTitle from '../../components/sectionTitle';
import backgroundImg from '../../assets/pictures/Escobando.jpg'
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
  background-color:rgba(55,55,55,0.5);
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
  /* background-color:red; */
  width:80%;
  padding:2vh;
`;

const InputName = styled.input`
  /* background-color:yellow; */
  color:red;
`;

const TextAreaEmail = styled.textarea`
  /* background-color:black; */
  color:yellow;
`;


function Soumission() {
  return (
    <ContainerContact >
      <BackgroundFilter>
      <SectionTitle>Soumission</SectionTitle>
      <FormWrapper>
      <FormEmail  method="POST" encType="multipart/form-data" name="EmailForm">
        <label>Name:</label><br/>
        <InputName type="text"  name="ContactName"></InputName>
        <br/><br/>
        <TextAreaEmail name="ContactCommentt" rows="6" cols="20"></TextAreaEmail>
        <br/><br/>
        {/* <input type="submit" value="Submit"/> */}
        <Button size={"small"}>Submit</Button>
      </FormEmail>
      </FormWrapper>
      </BackgroundFilter>
    </ContainerContact>
  )
}

export default Soumission
