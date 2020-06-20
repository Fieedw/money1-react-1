import Layout from '../Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
font-size:16px;background:white;
> li{
border-bottom:1px solid #e5e5e5;line-height:20px;margin-left:16px;
> a{padding:12px 16px 12px 0;display:flex;justify-content:space-between;align-item:center;}
}
`;
const Button = styled.button`
font-size: 18px;border:none;padding:8px 18px;background:#f60;border-radius: 4px;color:white;
`;
const Center = styled.div`
display:flex;justify-content: center;align-items: center;flex-direction: column;
`;
const Space =styled.div`
height:16px;margin-top:20px;
`

function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/'+tag.id}>
            <span className="oneLine">{tag.name}</span>
            <Icon name="right"/>
            </Link>
          </li>)}
      </TagList>
      <Center>
        <Space/>
          <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;