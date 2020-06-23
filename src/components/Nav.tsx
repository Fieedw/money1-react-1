import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const Nav = styled.nav`
line-height:24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
background:#f2f2f2;
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
  width:24px;
  height:24px;
  }
  &.selected{
  color:#f60;
  .icon{
  fill:#f60;
  }
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
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="label"/>
            标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="statistics"/>
            统计</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default nav;
