import React from 'react'
import  Button  from '../../components/button/index';
import styled from 'styled-components'
import Footer from '../../components/footer';
import { theme } from '../../theme';
import SectionTitle from '../../components/sectionTitle';

const ContainerContact = styled.div`
  padding-top:5vh;
  min-height:100vh;
  background:rgb(57, 77, 73,.5);
  text-align:center;
  /* display:flex; */
/* flex-direction:column; */
justify-items:center;
`;

const FormWrapper = styled.div`
padding-top:3vh;
width:500px;
max-width:80%;
display:flex;
flex-direction:column;
align-items:center;
margin:auto;
border-radius:2vh;
text-align:left;
background-color:white;

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
    </ContainerContact>
  )
}

export default Soumission
