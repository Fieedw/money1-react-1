import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';

const WrapperTagsSection = styled.section`
background:white;padding: 12px 16px;
flex-grow:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;
> ol { margin: 0 -12px;
  > li {
 background:#ffe793;color:#666;border-radius:18px;display:inline-block;
 padding:3px 18px;font-size: 14px;margin: 8px 12px;
 &.selected{background: #f60;color:white;}
    }
}
> button{

background:none;border:none;
padding:2px 4px;border-bottom:1px solid #f60;
color:#666;margin-top: 8px;
}`;
type Props = { value: number[];onChange:(selectedChunksResult: number[])=>void; }
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;

    const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //如果tag已被选中，就复制所有没有被选中的tag,作为新的 selectedTag
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <WrapperTagsSection>
      <ol>
        {tags.map(tag => <li key={tag.id} onClick={() => {onToggleTag(tag.id);}} className={getClass(tag.id)}>{tag.name}</li>)}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </WrapperTagsSection>
  );
};
export {TagsSection};