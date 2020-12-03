import React from 'react'
import styled from 'styled-components';

const ModalMessage = styled.div`

.modal {
visibility:${({modalHidden})=>modalHidden === true? "visible" :"hidden"}; 
 /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 35vh; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
  .modal-content {
  background-color: #504f4f;
   /* background-color:rgb(42, 212, 181); */
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width:600px;
  max-width:80%;
  color:rgb(0, 185, 151);
  border-radius:2vh;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`;

function Modal(props) {
  return (
    <ModalMessage {...props}>

<div  className="modal">
  <div className="modal-content">
    <span className="close"
    onClick={()=> {props.setModalHidden(false)
    }}
    >&times;</span>
    {/* <span className="closer">x</span> */}
    <p>{props.children}</p>
  </div>
</div>
      
    </ModalMessage>
  )
}

export default Modal