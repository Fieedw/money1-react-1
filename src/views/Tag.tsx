import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams,useHistory} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from 'components/Center';
import {Space} from '../components/Space';

type Params = {
  id: string
}
const TopBar = styled.header`
display:flex;justify-content: space-between;align-items:center;line-height: 20px;padding: 14px;background:white;
> span{font-size:16px;}
`;
const InputWrapper = styled.div`
background: white;padding: 0 16px;margin-top: 16px;
`;
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const history = useHistory()
  const onclickBack =()=>{
    history.goBack()
  }
  return (
    <Layout>
      <TopBar>
        <Icon name="left" onClick={onclickBack}/>
        <span>编辑标签</span>
        <span> </span>
      </TopBar>
      {
        tag ? <div><InputWrapper>
          <Input label="标签名" type="text" placeholder="请输入新的标签名" value={tag.name}
                 onChange={(e) => {updateTag(tag.id, {name: e.target.value});}}/>
        </InputWrapper>
          <Center>
            <Space/>
            <Space/>
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </Center></div> : <Center>删除成功</Center>
      }
    </Layout>
  );
};
export {Tag};