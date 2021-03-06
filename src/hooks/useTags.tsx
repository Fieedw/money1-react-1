import {useEffect, useState} from 'react';
import {createId} from '../lib/createld';
import {useUpdate} from './useUpdate';

const useTags = () => {//封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  useEffect(()=>{
    let localTags =JSON.parse(window.localStorage.getItem('tags')||'[]')
    if (localTags.length ===0){
      localTags =[
        {id: .1, name: '衣'},
        {id: .2, name: '食'},
        {id: .3, name: '住'},
        {id: .4, name: '行'}
      ]
    }setTags(localTags)
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
  },tags)
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name:obj.name} : tag));
    // const index =findTagIndex(id)
    // const tagsClone =JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index,1,{id:id,name:obj.name})
    // setTags(tagsClone)
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
    // const index = findTagIndex(id);
    // const tagsClone = JSON.parse(JSON.stringify(tags));
    // tagsClone.splice(index, 1);
    // setTags(tagsClone);
  };
  const addTag =()=> {
    const tagName = window.prompt('请输入新的标签名');
    if (tagName !== null && tagName !=='') {
      setTags([...tags,{id:createId(),name:tagName}]);
    }
  }
  const getName =(id:number)=>{
    const tag =tags.filter(t =>t.id ===id)[0]
    return tag ? tag.name :''
  }
  return {
    tags, setTags, findTag, findTagIndex, updateTag, deleteTag,addTag,getName
  };
};
export {useTags};