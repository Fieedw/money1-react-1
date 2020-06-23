import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params ={
  id:string
}
const TopBar =styled.header`
display:flex;justify-content: space-between;align-items:center;line-height: 20px;padding: 14px;background:white;
> span{font-size:16px;}
`
const Tag: React.FC = () => {
  const {findTag} =useTags()
  let {id} =useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
<TopBar>
  <Icon name="left"/>
  <span>编辑标签</span>
  <span> </span>
</TopBar>
      <div>
        <label>
          <span>标签</span>
          <input type="text" placeholder="请输入你的标签名"/>
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};
export {Tag};