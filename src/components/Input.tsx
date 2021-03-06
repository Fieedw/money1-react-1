import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
 display:flex;align-items: center;
  > span {margin-right: 16px ;white-space: nowrap;color:#f60;}
  > input {display: block;width: 100%;height:44px;background: none;border:none;}
  `;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label,...reset} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...reset}
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
