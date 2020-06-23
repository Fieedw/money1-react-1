import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
background: #f5f5f5;padding: 14px 16px;font-size:14px;`;
type Props ={value: string;onChange:(value: string)=>void}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange} placeholder="添加备注信息">
        {/*<span>备注</span>*/}
        {/*<input type="text" placeholder="在这里添加备注"*/}
        {/*  //受控组件*/}
        {/*  // value={note}*/}
        {/*  // onChange={(e) => setNote(e.target.value)}*/}
        {/*  //非受控组件*/}
        {/*       ref={refInput}*/}
        {/*       defaultValue={note}*/}
        {/*       onBlur={onBlur}*/}
        {/*/>*/}
      </Input>
    </Wrapper>
  );
};
export {NotesSection};