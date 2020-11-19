import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  height:100vh;
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  display:flex;
  flex-direction:column;
`;

function PageContainer(props) {
  return (
<Container {...props}>
</Container>
  )
}

export default PageContainer
