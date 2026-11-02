'use client'
import {useBrandText} from '../host'
import {animate,motion,useInView,useMotionValue,useReducedMotion,useTransform} from 'framer-motion'
import {useEffect,useRef} from 'react'
import {copy,type Copy,type Locale} from '../content/data'
function Counter({value,suffix}:{value:number;suffix:string}){
 const ref=useRef<HTMLSpanElement>(null),seen=useInView(ref,{once:true,amount:.6}),reduced=useReducedMotion(),count=useMotionValue(0),display=useTransform(count,n=>`${Math.round(n).toLocaleString('en-US')}${suffix}`)
 useEffect(()=>{if(!seen)return;const controller=animate(count,value,{duration:reduced?0:1.6,ease:'easeOut'});return()=>controller.stop()},[seen,reduced,count,value])
 return <span ref={ref} aria-label={`${value}${suffix}`}><motion.span aria-hidden="true">{display}</motion.span></span>
}
export function Stats({locale,about=false}:{locale:Locale;about?:boolean}){
 const text=useBrandText()
 const items:Array<{value:number;suffix:string;label:Copy}>=about?[{value:70,suffix:'+',label:copy('从独立创始人到成熟品牌','From solo founders to big brands')},{value:150,suffix:'M+',label:copy('以内容创造真正的成长','Real growth, no gimmicks')},{value:98,suffix:'%',label:copy('长期合作的创作者','Creators who choose to stay')}]:[{value:3450,suffix:'+',label:copy('稳定交付的短视频','Videos delivered with consistency')},{value:150,suffix:'M+',label:copy('获得的自然播放','Organic views we’ve generated')},{value:500,suffix:'+',label:copy('每周为创作者节省的小时','Hours saved every single week for creators')},{value:70,suffix:'+',label:copy('选择与我们协作的创作者','Creators who trust Shortify with their content')}]
 return <div className={`sf-stats ${about?'sf-stats-three':''}`}>{items.map(item=><div key={item.label.en}><strong><Counter value={item.value} suffix={item.suffix}/></strong><p>{text(locale,item.label)}</p></div>)}</div>
}
