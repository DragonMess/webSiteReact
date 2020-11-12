import React from 'react'
import styled from 'styled-components'
import TopSection from '../TopSection';

const PageContainer = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
`;


function Homepage() {
  return (
<PageContainer>
  <TopSection/>
</PageContainer>
  )
}

export default Homepage
