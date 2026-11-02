'use client'
import Link from 'next/link'
import {motion,useReducedMotion,useScroll,useTransform,type MotionValue} from 'framer-motion'
import {useRef,type ReactNode} from 'react'
import {content,text,type Copy,type Locale} from '../content/data'
import {templatePath as route} from '../config/routing'
import {useBrandText} from '../host'

export {route}
export function Button({children,href,secondary=false}:{children:ReactNode;href:string;secondary?:boolean}){return <Link className={`sf-button ${secondary?'sf-secondary':''}`} href={href}><span className="sf-button-window"><span>{children}</span><span aria-hidden="true">{children}</span></span></Link>}
export function CallButton({base,locale}:{base:string;locale:Locale}){return <Button href={route(base,locale,'contact-us')}>{text(locale,content.call)}</Button>}
export function Reveal({children,className='',delay=0,from='bottom'}:{children:ReactNode;className?:string;delay?:number;from?:'bottom'|'left'|'right'|'scale'}){
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:from==='bottom'?36:0,x:from==='left'?-16:from==='right'?16:0,scale:from==='scale'?.9:1,filter:'blur(6px)'}} whileInView={{opacity:1,y:0,x:0,scale:1,filter:'blur(0px)'}} viewport={{once:true,amount:.12}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
export function SectionHeading({title,description,locale,align='center'}:{title:Copy;description?:Copy;locale:Locale;align?:'center'|'left'}){const text=useBrandText();return <header className={`sf-section-heading sf-align-${align}`}><Reveal><h2>{text(locale,title)}</h2></Reveal>{description&&<Reveal delay={.1}><p>{text(locale,description)}</p></Reveal>}</header>}
function HighlightWord({word,progress,start,end,spaced}:{word:string;progress:MotionValue<number>;start:number;end:number;spaced:boolean}){const opacity=useTransform(progress,[start,end],[.18,1]);return <motion.span style={{opacity}}>{word}{spaced?' ':''}</motion.span>}
/** 每个词消费自身的滚动区间，向上滚动时会按原路径退回，不使用一次性淡入替代。 */
export function ScrollWords({value,as='p'}:{value:string;as?:'p'|'h1'}){
 const ref=useRef<HTMLDivElement>(null),reduced=useReducedMotion()
 const {scrollYProgress}=useScroll({target:ref,offset:['start .85','end .35']})
 const spaced=value.includes(' '),words=spaced?value.split(' '):value.split('')
 const children=reduced?value:words.map((word,index)=><HighlightWord key={index} word={word} spaced={spaced} progress={scrollYProgress} start={index/words.length} end={(index+1)/words.length}/>)
 return <div ref={ref} className="sf-scroll-words">{as==='h1'?<h1>{children}</h1>:<p>{children}</p>}</div>
}
export function ToggleIcon({open}:{open:boolean}){return <span className={`sf-toggle-icon ${open?'is-open':''}`} aria-hidden="true"/>}
