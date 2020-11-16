import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin-top:9vh;
  font-size:34px;
  font-weight:700;
  color:black;
  text-align:center;
`;

function SectionTitle(props) {
  return (
<Title>{props.children}</Title>
  )
}

export default SectionTitle
