'use client'
import {useBrandText} from '../host'
import {useEffect,useRef,useState} from 'react'
import {motion,useReducedMotion,useAnimationControls} from 'framer-motion'
import {testimonials,type Locale} from '../content/data'

export function ReviewCard({index,locale}:{index:number;locale:Locale}){const text=useBrandText();const item=testimonials[index];return <article className="sf-review-card"><span className="sf-stars" aria-label={locale==='zh'?'五星评价':'Five stars'}>★★★★★</span><blockquote>“{text(locale,item.quote)}”</blockquote><div className="sf-review-author"><img src={item.image} alt=""/><div><h3>{item.name}</h3><p>{item.views} {locale==='zh'?'播放':'Views'} <span>·</span> {item.followers} {locale==='zh'?'关注':'Followers'}</p></div></div></article>}
export function Carousel({locale}:{locale:Locale}){
 const [index,setIndex]=useState(0),[userPaused,setUserPaused]=useState(false),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false),[step,setStep]=useState(0),ref=useRef<HTMLDivElement>(null),reduced=useReducedMotion(),controls=useAnimationControls()
 const paused=userPaused||hovered||focused
 useEffect(()=>{const container=ref.current;if(!container)return;const observer=new ResizeObserver(()=>{const track=container.querySelector<HTMLElement>('.sf-review-track'),slide=container.querySelector<HTMLElement>('.sf-review-slide');if(track&&slide)setStep(slide.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap))});observer.observe(container);return()=>observer.disconnect()},[])
 useEffect(()=>{if(paused||reduced||testimonials.length<2)return;const timer=setInterval(()=>setIndex(value=>value+1),5000);return()=>clearInterval(timer)},[paused,reduced])
 useEffect(()=>{let cancelled=false;controls.start({x:-index*step,transition:reduced?{duration:0}:{type:'spring',stiffness:110,damping:22}}).then(()=>{
  // 尾部复制可见卡片，完成过渡后无动画复位，避免循环边界出现空白或倒退。
  if(!cancelled&&index>=testimonials.length){controls.set({x:0});setIndex(0)}
 });return()=>{cancelled=true}},[index,step,controls,reduced])
 return <div className="sf-carousel" ref={ref} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget))setFocused(false)}}><div className="sf-carousel-window"><motion.div className="sf-review-track" animate={controls} drag={reduced?false:'x'} dragSnapToOrigin dragConstraints={{left:-step*testimonials.length,right:0}} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>45)setIndex(value=>Math.max(0,Math.min(testimonials.length,value+(info.offset.x<0?1:-1))))}}>{[...testimonials,...testimonials.slice(0,2)].map((item,i)=><div className="sf-review-slide" key={`${item.name}-${i}`} aria-hidden={i>=testimonials.length||undefined}><ReviewCard index={i%testimonials.length} locale={locale}/></div>)}</motion.div></div><div className="sf-pagination" role="group" aria-label={locale==='zh'?'评价轮播':'Testimonial carousel'}>{testimonials.map((item,i)=><button key={item.name} onClick={()=>setIndex(i)} aria-label={locale==='zh'?`查看第 ${i+1} 条评价`:`Go to review ${i+1}`} aria-pressed={index%testimonials.length===i}/>)}<button className="sf-pause-button" onClick={()=>setUserPaused(!userPaused)} aria-pressed={userPaused}>{locale==='zh'?(userPaused?'继续':'暂停'):(userPaused?'Resume':'Pause')}</button></div></div>
}
