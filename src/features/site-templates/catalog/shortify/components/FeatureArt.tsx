'use client'
import {motion,useReducedMotion} from 'framer-motion'
import {asset,features,type Locale} from '../content/data'
type Feature=(typeof features)[number]
/** 英文使用原站完整示意素材；中文以相同比例排布可翻译的界面文字。 */
export function FeatureArt({feature,locale}:{feature:Feature;locale:Locale}){
 const reduced=useReducedMotion()
 if(locale==='en')return <><img className={'sf-original-art sf-original-'+feature.kind} src={feature.image} alt={feature.title.en} loading="lazy"/>{feature.kind==='speed'&&<SpeedLines/>}</>
 if(feature.kind==='speed')return <><div className="sf-speed-illustration"><strong>5 天</strong><svg className="sf-speed-connectors" viewBox="0 0 800 280" fill="none" aria-hidden="true"><path d="M160 115v35q0 22 22 22h380q30 0 30 25v20" stroke="url(#sf-connector)"/><defs><linearGradient id="sf-connector"><stop stopColor="#ffffff0a"/><stop offset=".5" stopColor="#fff9"/><stop offset="1" stopColor="#ffffff0a"/></linearGradient></defs></svg><div className="sf-speed-bolt"><svg viewBox="0 0 60 80" aria-hidden="true"><path d="M35 3 9 45h20l-5 32 28-45H32Z" fill="white"/></svg></div><span>上传</span><span>交付</span></div><SpeedLines/></>
 if(feature.kind==='phone')return <div className="sf-feature-phone-original"><img src={asset('55e3cde452b093f1')} alt="手机短视频预览示意" loading="lazy"/><div className="sf-phone-translated-caption">为什么不<br/>直接开始创作</div></div>
 if(feature.kind==='chart')return <div className="sf-chart-ui"><header><span>短视频播放</span><span>本周</span></header><div className="sf-chart-donut"><span>1.3%<small>关注者</small></span><i/><span>98.7%<small>其他观众</small></span></div><div className="sf-chart-meter"><span>短视频</span><span>98.6%</span></div><div className="sf-chart-bars">{[75,54,80,63,87,71,83,65].map((height,index)=><i key={index} style={{height:height+'%'}}/>)}</div></div>
 if(feature.kind==='trend')return <div className="sf-trend-illustration"><i/><i/><i/><strong>热门内容</strong>{['剪辑','视觉','音乐','开场'].map((label,index)=><motion.span key={label} animate={reduced?{}:{y:[0,index%2?5:-5,0]}} transition={{duration:4+index*.4,repeat:Infinity,ease:'easeInOut'}}>{label}</motion.span>)}</div>
 return <img className="sf-original-art" src={feature.image} alt={feature.title.zh} loading="lazy"/>
}
function SpeedLines(){return <span className="sf-speed-lines" aria-hidden="true">{Array.from({length:8},(_,i)=><i key={i} style={{top:(18+i*9)+'%',animationDelay:(i%4)*-.8+'s',width:20+(i%3)*24}}/>)}</span>}
