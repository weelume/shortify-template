'use client'
import {useBrandText} from '../host'
import {useState} from 'react'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import {faqs,type Locale} from '../content/data'
import {ToggleIcon} from './ui'
export function Faq({locale}:{locale:Locale}){
 const text=useBrandText();const [active,setActive]=useState<number|null>(0),reduced=useReducedMotion()
 return <div className="sf-faq-list">{faqs.map((item,i)=><div key={item.q.en} className={`sf-faq-item ${active===i?'is-open':''}`}><h3><button id={`sf-faq-${i}`} aria-expanded={active===i} aria-controls={`sf-answer-${i}`} onClick={()=>setActive(active===i?null:i)}>{text(locale,item.q)}<ToggleIcon open={active===i}/></button></h3><AnimatePresence initial={false}>{active===i&&<motion.div id={`sf-answer-${i}`} role="region" aria-labelledby={`sf-faq-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.3}}><p>{text(locale,item.a)}</p></motion.div>}</AnimatePresence></div>)}</div>
}
