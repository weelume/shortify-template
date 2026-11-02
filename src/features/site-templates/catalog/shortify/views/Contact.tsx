'use client'
import {useState} from 'react'
import {useBrandText} from '../host'
import dynamic from 'next/dynamic'
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion'
import {copy,type Locale} from '../content/data'
import {ContactForm} from '../components/ContactForm'
// 日历以浏览器本地日期初始化，避免跨时区 SSR 日期造成水合差异。
const Calendar=dynamic(()=>import('../components/Calendar').then(module=>module.Calendar),{ssr:false})
import {ReviewCard} from '../components/Carousel'
import {Reveal} from '../components/ui'
export function Contact({locale}:{locale:Locale}){
 const text=useBrandText();const [active,setActive]=useState(1),reduced=useReducedMotion()
 return <section className="sf-contact sf-container sf-section"><div className="sf-contact-intro"><Reveal><h1>{locale==='zh'?'一起看看\n你的内容还可以怎样出彩':'LET’S SEE HOW WE CAN\nTRANSFORM YOUR CONTENT.'}</h1></Reveal><p>{text(locale,{zh:'了解速度、质量与稳定更新的最好方式，是亲自看看完整的创作流程。准备好了，就从一次交流开始。',en:'We believe there’s no better way to understand the speed and consistency of Shortify than seeing our system in action. So, if you’re ready, book a call with us.'})}</p><ul className="sf-contact-benefits">{[copy('48 小时快速交付','48 Hour Turnaround'),copy('专属品牌视觉与动效','Custom Branding & Motion'),copy('开场创意与脚本','Viral Hooks & Scripting'),copy('一份内容，多平台再创作','Multi-platform Repurposing')].map(item=><li key={item.en}>{text(locale,item)}</li>)}</ul><ReviewCard index={4} locale={locale}/><p className="sf-demo-note">{locale==='zh'?'服务、人物与评价为模板演示，不构成承诺或真实背书。':'Services, people and testimonials are template demonstrations, not promises or endorsements.'}</p></div><div><div className="sf-contact-tabs" role="tablist" aria-label={locale==='zh'?'联系方式':'Contact options'}>{[copy('预约演示','Schedule Demo'),copy('联系表单','Contact Form')].map((item,i)=><button key={item.en} role="tab" id={`sf-contact-tab-${i}`} aria-selected={active===i} aria-controls="sf-contact-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?1:1-i;setActive(next);document.getElementById(`sf-contact-tab-${next}`)?.focus()}}}>{text(locale,item)}</button>)}</div><AnimatePresence mode="wait" initial={false}><motion.div key={active} role="tabpanel" id="sf-contact-panel" aria-labelledby={`sf-contact-tab-${active}`} initial={{opacity:0,y:reduced?0:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduced?0:-10}} transition={{duration:reduced?0:.25}}>{active===0?<Calendar locale={locale}/>:<ContactForm locale={locale}/>}</motion.div></AnimatePresence></div></section>
}
