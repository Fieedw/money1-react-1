import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
 display:flex;align-items: center;
  > span {margin-right: 16px ;white-space: nowrap;color:#f60;}
  > input {display: block;width: 100%;height:72px;background: none;border:none;}
  `;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  return (
    <Label>
      <span>{props.label}}</span>
      <input type={props.type} placeholder={props.placeholder} defaultValue={props.defaultValue} onBlur={props.onBlur}
        //受控组件
        // value={note}
        // onChange={(e) => setNote(e.target.value)}
        //非受控组件
        //      ref={refInput}
        //      defaultValue={note}
        //      onBlur={onBlur}
      />
    </Label>
  );
};
export {Input};
