import React, { useState } from 'react'
import  Button  from '../../components/button/index';
import styled from 'styled-components'
import Footer from '../../components/footer';
import backgroundImg from '../../assets/pictures/CleaningService.jpg'
import SectionTitle from '../../components/sectionTitle';
import emailjs from 'emailjs-com'
import Modal from '../../components/modal';



const ContainerContact = styled.div`
  padding:0vh;
  text-align:center;
  width:100%;
  height:100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;   
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
padding-top:0;
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


function Soumission(props) {
  const [textEmail, setTextEmail] = useState("");
  const [textName, setTextName] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [textError, setTextError] = useState("");
  const [modalHidden, setModalHidden] = useState(false);

  function hidden() {

  }

  function sendEmail(e) {
    e.preventDefault();
    if(textEmail && textName && textMessage){
    
    console.log("lol")
    // emailjs.sendForm("service_0baz35r", "template_qm2ceyl", e.target,"user_wWMLwLo0TYhE1YOCXmci9")
    //   .then((result) => {
    //       // console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    // e.target.reset();
    setModalHidden(true)
    setTextError("Merci! Votre message a été envoyé")
    
    }else {
      setModalHidden(true)
      setTextError("Some fields are empty");
      // setModalHidden(!modalHidden)
    }      
}

  return (
    <>
    <ContainerContact >
      <BackgroundFilter>
        {/* {!modalHidden? <Modal>{textError}</Modal> : <div></div>} */}
  <Modal modalHidden={modalHidden}
  setModalHidden={setModalHidden}
  >{textError}</Modal>
      <FormWrapper>
        <SectionTitle Margin={"3vh auto"}colorFont={"white"} Fontweight={"700"} FontSize={"4vh"}>Soumission</SectionTitle>
      <FormEmail  onSubmit={sendEmail} name="EmailForm">
        <LabelForm>Nom:</LabelForm><br/>
        <InputName 
        value={textName}
        onChange={(e) => setTextName(e.target.value)}
        type="text"  name="ContactName" ></InputName>
        <br/><br/>
        <LabelForm >Email:</LabelForm><br/>
        <InputName 
        value={textEmail}
        onChange={(e) => setTextEmail(e.target.value)}
        type="email"  name="ContactEmail" ></InputName>
        <br/><br/>
        <LabelForm>Message:</LabelForm><br/>
        <TextAreaEmail 
        value={textMessage}
        onChange={(e) => setTextMessage(e.target.value)}
        name="ContactMessage" rows="6" cols="20" message="message"></TextAreaEmail>
        <br/><br/>
        <LabelForm>Sélectionnez le service:</LabelForm><br/>
        <select name="ContactService" id="cars" >
          <option value="Entretien Commercial">Entretien Commercial</option>
          <option value="Entretien Industriel">Entretien Industriel</option>
          <option value="Entretien après Construction">Entretien après Construction</option>
          <option value="Nettoyage des vitres">Nettoyage des vitres</option>
          <option value="Décapage & Cirage de Plancher">Décapage & Cirage de Plancher</option>
          <option value="Autre">Autre</option>
        </select>
      <br/><br/>
        <input type="submit" value="Envoyer message" style={{backgroundColor:"red", color:"white"}}></input>
      </FormEmail>
      </FormWrapper>
      </BackgroundFilter>
    </ContainerContact>
      <Footer></Footer>
    </>
  )
}

export default Soumission
