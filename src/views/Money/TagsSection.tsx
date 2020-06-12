import styled from 'styled-components';

const TagsSection =styled.section`
background:white;padding: 12px 16px;
flex-grow:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;
> ol { margin: 0 -12px;
  > li {
 background:#e2e2e2;border-radius:18px;display:inline-block;
 padding:3px 18px;font-size: 14px;margin: 8px 12px;
    }
}
> button{
background:none;border:none;
padding:2px 4px;border-bottom:1px solid #666;
color:#666;margin-top: 8px;
}`
export {TagsSection}