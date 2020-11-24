import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin-top:9vh;
  font-size:${({FontSize}) => (FontSize? `${FontSize}`: "5.2vh")};
  font-weight:${({Fontweight}) => (Fontweight? `${Fontweight}`: "700")};
  color:${({colorFont}) => (colorFont? `${colorFont}`: "black")};
`;

function SectionTitle(props) {
  return (
<Title {...props}>{props.children}</Title>
  )
}

export default SectionTitle
