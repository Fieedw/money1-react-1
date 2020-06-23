import styled from 'styled-components';
import React from 'react'
import Nav from './Nav'

const Wrapper = styled.div`
min-height:100vh;
display:flex;
flex-direction: column;
background:#f5f5f5;
`;

const Main = styled.div`
flex-grow:1;
overflow:auto:
`;
const Layout =(props: any)=>{
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
};
export default Layout;