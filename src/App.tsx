import React from 'react';
import Nav from './Nav'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
min-height:100vh;
display:flex;
flex-direction: column;
`;

const Main = styled.div`
flex-grow:1;
overflow:auto:
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function NoMatch() {
  return (
    <div>页面不存在，请检查网址路径</div>
  );
}

export default App;
