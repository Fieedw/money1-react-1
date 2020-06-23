import React from 'react'
import cs from 'classnames'
//如何引入一个目录
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props ={
  name?: String
} &React.SVGAttributes<SVGElement>

const Icon =(props: Props)=>{
  const {name,children,className,...reset} =props
  return(
    <svg className={cs('icon',className)}{...reset}>
      <use xlinkHref={'#'+props.name}/>
    </svg>
  )
}
export default Icon;