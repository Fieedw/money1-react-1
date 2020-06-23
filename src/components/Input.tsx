import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
 display:flex;align-items: center;
  > span {margin-right: 16px ;white-space: nowrap;color:#f60;}
  > input {display: block;width: 100%;height:72px;background: none;border:none;}
  `;
const Input: React.FC = () => {
  return (
    <Label>
      <span>备注</span>
      <input type="text" placeholder="在这里添加备注"
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
export {Input}
