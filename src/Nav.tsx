import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const Nav = styled.nav`
line-height:24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
 > ul {
 display:flex;
  > li {width: 33.333%;
  text-align: center;
  > a{ 
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
    .icon{
  width:32px;
  height:32px;
  }
   }   
     }
  }
`;
const nav = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/tags">
            <Icon name="label"/>
            标签</Link>
        </li>
        <li>
          <Link to="/money">
            <Icon name="money"/>
            记账</Link>
        </li>
        <li>

          <Link to="/statistics">
            <Icon name="statistics"/>
            统计</Link>
        </li>
      </ul>
    </Nav>
  );
};
export default nav;
