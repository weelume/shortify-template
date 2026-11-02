'use client'
import {useEffect,useRef,useState} from 'react'
import {motion,useReducedMotion} from 'framer-motion'
import {videos,text,type Locale} from '../content/data'

export function Video({index,locale,auto=true,controls=false}:{index:number;locale:Locale;auto?:boolean;controls?:boolean}){
 const item=videos[index%videos.length],ref=useRef<HTMLVideoElement>(null),reduced=useReducedMotion(),[error,setError]=useState(false)
 useEffect(()=>{
  const video=ref.current;if(!video||!auto||reduced)return
  // 离开可见区域暂停播放，防止长页面中的多个视频持续解码；失败在卡片内明确显示。
  let visible=false,disposed=false
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible){video.play().catch((reason:unknown)=>{
   // 可见性变化引起的主动 pause 会取消未完成的 play，不是素材播放失败。
   if(disposed||!visible||(reason instanceof DOMException&&reason.name==='AbortError'))return
   console.warn('[shortify] video playback unavailable',{id:item.id,reason:reason instanceof Error?reason.name:'unknown'});setError(true)
  })}else video.pause()},{threshold:.08})
  observer.observe(video);return()=>{disposed=true;observer.disconnect();video.pause()}
 },[auto,reduced,item.id])
 return <div className="sf-video-card"><video ref={ref} src={`/templates/shortify/media/${item.id}.mp4`} poster={item.poster} muted={auto} loop={auto} autoPlay={auto&&!reduced} playsInline controls={controls||!!reduced} preload="metadata" aria-label={locale==='zh'?`${item.name} 的短视频演示`:`Short-form video demonstration by ${item.name}`} onError={()=>setError(true)}/>{!controls&&<><div className="sf-video-stats" aria-hidden="true"><span>♡<small>{item.views}</small></span><span>♧<small>46</small></span><span>♧<small>35</small></span></div><div className="sf-video-caption"><strong>{item.name}</strong><span className="sf-follow">{locale==='zh'?'关注':'Follow'}</span><p>{text(locale,item.caption)}</p></div></>}{error&&<p className="sf-media-error" role="status">{locale==='zh'?'视频无法自动播放，请使用播放控件。':'Autoplay unavailable. Use the video controls.'}<button onClick={()=>{if(ref.current){ref.current.controls=true;ref.current.play().then(()=>setError(false)).catch(()=>setError(true))}}}>{locale==='zh'?'播放':'Play'}</button></p>}</div>
}
export function VideoMarquee({locale}:{locale:Locale}){
 const [paused,setPaused]=useState(false)
 return <><div className={`sf-video-marquee ${paused?'is-paused':''}`}><div className="sf-marquee-track">{[...videos,...videos].map((item,i)=><div key={`${item.id}-${i}`} aria-hidden={i>=videos.length||undefined} inert={i>=videos.length||undefined}><Video index={i} locale={locale}/></div>)}</div><button className="sf-motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused}>{locale==='zh'?(paused?'继续滚动':'暂停滚动'):(paused?'Resume scrolling':'Pause scrolling')}</button></div><MobileVideos locale={locale}/></>
}
/** 原站小屏使用离散轮播，大屏保留连续滚动；二者不共享运动速度。 */
function MobileVideos({locale}:{locale:Locale}){
 const [index,setIndex]=useState(0),[paused,setPaused]=useState(false),[width,setWidth]=useState(236),ref=useRef<HTMLDivElement>(null),reduced=useReducedMotion()
 useEffect(()=>{if(!ref.current)return;const observer=new ResizeObserver(([entry])=>{if(entry.contentRect.width)setWidth(entry.contentRect.width)});observer.observe(ref.current);return()=>observer.disconnect()},[])
 useEffect(()=>{if(paused||reduced)return;const timer=setInterval(()=>setIndex(value=>(value+1)%videos.length),5000);return()=>clearInterval(timer)},[paused,reduced])
 return <div className="sf-mobile-videos"><div className="sf-mobile-video-stage" ref={ref}><motion.div className="sf-mobile-video-track" animate={{x:-index*(width+40)}} transition={{type:'spring',stiffness:100,damping:22}} drag={reduced?false:'x'} dragSnapToOrigin dragConstraints={{left:-(width+40)*(videos.length-1),right:0}} onDragEnd={(_,info)=>{if(Math.abs(info.offset.x)>35)setIndex(value=>Math.max(0,Math.min(videos.length-1,value+(info.offset.x<0?1:-1))))}}>{videos.map((video,i)=><div key={video.id}><Video index={i} locale={locale}/></div>)}</motion.div></div><div className="sf-mobile-video-controls"><button aria-label={locale==='zh'?'上一个视频':'Previous video'} onClick={()=>setIndex((index+videos.length-1)%videos.length)}>‹</button><div className="sf-pagination" role="group" aria-label={locale==='zh'?'首屏视频轮播':'Hero video carousel'}>{videos.map((video,i)=><button key={video.id} aria-label={locale==='zh'?`查看第 ${i+1} 个视频`:`View video ${i+1}`} aria-pressed={i===index} onClick={()=>setIndex(i)}/>)}</div><button aria-label={locale==='zh'?'下一个视频':'Next video'} onClick={()=>setIndex((index+1)%videos.length)}>›</button></div><button className="sf-motion-toggle" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{locale==='zh'?(paused?'继续轮播':'暂停轮播'):(paused?'Resume carousel':'Pause carousel')}</button></div>
}
