import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin:${({Margin}) => (Margin? `${Margin}`: "3vh auto")};
  font-size:${({FontSize}) => (FontSize? `${FontSize}`: "5.2vh")};
  font-weight:${({Fontweight}) => (Fontweight? `${Fontweight}`: "700")};
  color:${({colorFont}) => (colorFont? `${colorFont}`: "black")};
  text-align:center;
`;

function SectionTitle(props) {
  return (
<Title {...props}>{props.children}</Title>
  )
}

export default SectionTitle