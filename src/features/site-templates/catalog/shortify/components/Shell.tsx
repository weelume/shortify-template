'use client'
import Link from 'next/link'
import {usePathname,useRouter} from 'next/navigation'
import {MotionConfig} from 'framer-motion'
import {useEffect,useInsertionEffect,useRef,useState,type ReactNode} from 'react'
import {brand} from '../config/brand'
import {useShortifyHost} from '../host'
import {content,nav,text,copy,ctaClips,type Locale} from '../content/data'
import {route,CallButton,Reveal} from './ui'
import {localePath} from '../config/routing'
import {debugEvent} from '../config/debug'
import '../tokens.css'
import '../theme.css'

export function Shell({children,locale,basePath,cta=true}:{children:ReactNode;locale:Locale;basePath:string;cta?:boolean}){
 const host=useShortifyHost(),pathname=usePathname(),router=useRouter()
 const [menuOpen,setMenuOpen]=useState(false),[compact,setCompact]=useState(false),dialog=useRef<HTMLDialogElement>(null),trigger=useRef<HTMLButtonElement>(null)
 const name=text(locale,host.brandName??brand.name),logo=host.lightLogo
 const current=pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/,'').replace(/^\//,'')
 const nextLocale=locale==='zh'?'en':'zh'
 const switchHref=localePath(pathname,basePath,nextLocale)
 useInsertionEffect(()=>{
  const previousLang=document.documentElement.lang
  const previousScrollBehavior=document.documentElement.getAttribute('data-scroll-behavior')
  document.documentElement.lang=locale==='zh'?'zh-CN':'en'
  document.documentElement.dataset.shortify='true'
  document.documentElement.dataset.scrollBehavior='smooth'
  return()=>{document.documentElement.lang=previousLang;delete document.documentElement.dataset.shortify;if(previousScrollBehavior===null)delete document.documentElement.dataset.scrollBehavior;else document.documentElement.setAttribute('data-scroll-behavior',previousScrollBehavior)}
 },[locale])
 useEffect(()=>{const update=()=>setCompact(window.scrollY>100);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[])
 useEffect(()=>{debugEvent('navigation-state',{compact})},[compact])
 useEffect(()=>{debugEvent('navigation',{pathname,locale})},[pathname,locale])
 useEffect(()=>{
  if(!menuOpen)return
  debugEvent('menu',{open:true})
  const overflow=document.body.style.overflow
  document.body.style.overflow='hidden'
  return()=>{document.body.style.overflow=overflow}
 },[menuOpen])
 const closeMenu=()=>dialog.current?.close()
 const languageLink=<Link className="sf-language" href={switchHref} lang={nextLocale} aria-label={locale==='zh'?'Switch to English':'切换为中文'} onClick={event=>{event.preventDefault();closeMenu();router.push(switchHref+window.location.search+window.location.hash)}}>{locale==='zh'?'EN':'中文'}</Link>
 const brandLink=<Link href={route(basePath,locale)} className="sf-brand" aria-label={name}>{logo?<img src={logo} alt=""/>:<span className="sf-orb"/>}<span>{name}</span></Link>
 return <MotionConfig reducedMotion="user"><div className="sf-site" lang={locale==='zh'?'zh-CN':'en'}>
  <a className="sf-skip" href="#sf-main">{locale==='zh'?'跳至正文':'Skip to content'}</a>
  <nav className={`sf-nav ${compact?'is-compact':''}`} aria-label={locale==='zh'?'主导航':'Main navigation'}>{brandLink}<div className="sf-nav-links">{nav.map(item=><Link key={item.slug} href={route(basePath,locale,item.slug)} aria-current={current===item.slug?'page':undefined}>{text(locale,item.title)}</Link>)}</div><div className="sf-nav-actions">{languageLink}<CallButton base={basePath} locale={locale}/><button ref={trigger} className="sf-menu-trigger" aria-label={locale==='zh'?'打开导航菜单':'Open navigation menu'} aria-expanded={menuOpen} onClick={()=>{dialog.current?.showModal();setMenuOpen(true)}}><span className="sf-menu-bars" aria-hidden="true"/></button></div></nav>
  <dialog ref={dialog} className="sf-menu" onClose={()=>{setMenuOpen(false);trigger.current?.focus()}} onClick={event=>{if(event.target===dialog.current)closeMenu()}} aria-label={locale==='zh'?'导航菜单':'Navigation menu'}><div className="sf-menu-panel"><div className="sf-menu-top">{brandLink}<button aria-label={locale==='zh'?'关闭导航菜单':'Close navigation menu'} onClick={closeMenu}><span className="sf-menu-cross" aria-hidden="true"/></button></div>{nav.map(item=><Link key={item.slug} href={route(basePath,locale,item.slug)} onClick={closeMenu}>{text(locale,item.title)}</Link>)}{languageLink}<CallButton base={basePath} locale={locale}/></div></dialog>
  <main id="sf-main">{children}</main>
  {cta&&<section className="sf-cta sf-container"><div className="sf-cta-mosaic" aria-hidden="true">{ctaClips.map((src,i)=><img key={i} src={src} alt="" loading="lazy"/>)}</div><Reveal><h2>{text(locale,content.cta)}</h2></Reveal><CallButton base={basePath} locale={locale}/></section>}
  <div className="sf-wordmark" aria-hidden="true">{name}</div>
  <footer className="sf-footer sf-container"><div className="sf-footer-intro">{brandLink}<p>{text(locale,brand.tagline)}</p><div className="sf-socials"><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://x.com" aria-label="X">𝕏</a><a href="https://instagram.com" aria-label="Instagram">◎</a></div></div><div><h3>{locale==='zh'?'内容':'Sections'}</h3>{[['features',copy('功能','Features')],['our-services',copy('服务','Our service')],['how-it-works',copy('创作流程','How it works')],['pricing',copy('报价','Pricing')],['review',copy('评价','Reviews')]].map(([id,label])=><Link key={String(id)} href={`${route(basePath,locale)}#${id}`}>{text(locale,label as {zh:string;en:string})}</Link>)}</div><div><h3>{locale==='zh'?'页面':'Pages'}</h3>{nav.map(item=><Link key={item.slug} href={route(basePath,locale,item.slug)}>{text(locale,item.title)}</Link>)}<Link href={route(basePath,locale,'contact-us')}>{locale==='zh'?'联系我们':'Contact us'}</Link></div><div><h3>{locale==='zh'?'支持':'Support'}</h3><Link href={route(basePath,locale,'contact-us')}>{locale==='zh'?'联系我们':'Contact us'}</Link><Link href={route(basePath,locale,'privacy-policy')}>{locale==='zh'?'隐私政策':'Privacy Policy'}</Link><Link href={`${route(basePath,locale)}#faq`}>FAQ</Link>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{text(locale,host.marketplaceLabel??copy('模板市场','Template marketplace'))}</Link>}</div><div className="sf-footer-bottom"><span>Copyright © {brand.year} {name}. {locale==='zh'?'保留所有权利':'All rights reserved.'}</span>{host.filing}<span>{locale==='zh'?'短视频内容服务 · 演示模板':'Short-form content studio · Demo template'}</span></div></footer>
  {host.marketplaceHref&&<Link className="sf-marketplace" href={host.marketplaceHref} aria-label={text(locale,host.marketplaceAriaLabel??copy('打开模板市场','Open template marketplace'))}>{logo&&<img src={logo} alt=""/>}<span>{name}</span></Link>}
 </div></MotionConfig>
}
