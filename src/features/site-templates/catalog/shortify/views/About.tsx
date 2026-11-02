'use client'
import {useBrandText} from '../host'
import {content,copy,team,type Locale} from '../content/data'
import {Reveal,ScrollWords,SectionHeading} from '../components/ui'
import {Stats} from '../components/Stats'
const story=[
 {title:copy('一切从忙不完的剪辑开始','It started with the grind.'),body:copy('漫长的深夜，错过的更新，不断重复的修改。我们也是难以稳定发布的创作者。','Long nights. Missed uploads. Endless re-edits. We were creators struggling to stay consistent.')},
 {title:copy('我们发现，瓶颈并不是创意','We realized it wasn’t creativity — it was the process'),body:copy('许多好想法就这样停在了剪辑队列里。缺少的不是热情，而是时间和顺畅的流程。','Great ideas were dying in the edit queue. The bottleneck wasn’t passion — it was time.')},
 {title:copy('于是，我们开始帮助其他创作者','We started helping other creators.'),body:copy('从帮朋友处理素材开始，一套真正有效的协作方式逐渐形成。从一个人，到十个人，再到七十个人。','What began as favors for friends became a workflow that actually worked. One creator turned into ten. Then seventy.')},
 {title:copy('Shortify 就这样诞生了','Shortify was born.'),body:copy('一个帮助创作者稳定发布的剪辑团队。更快交付，真人编辑，让创作热情不被消耗。','A video editing agency built to keep creators consistent — without killing their spark. Fast turnarounds. Real editors. No burnout.')},
]
export function About({locale}:{locale:Locale}){const text=useBrandText();return <>
 <section className="sf-about-statement sf-container"><ScrollWords as="h1" value={text(locale,copy('我们希望创作者始终专注创作，而不是被剪辑和截止日期淹没。让你的好想法被看见，持续、自然，并且足够精彩。','Shortify was built to help creators stay creative — not buried in edits and deadlines. We’re here to make sure your ideas see the light of day, consistently and beautifully.'))}/></section>
 <section className="sf-section sf-container sf-about-timeline"><div className="sf-timeline-intro"><SectionHeading locale={locale} align="left" title={copy('我们如何走到这里','How we became Shortify.')} description={copy('我们并非从一家代理机构开始。我们是一群想走出剪辑队列的创作者。','We didn’t start as an agency. We started as creators looking for a way out of the edit queue.')}/></div><div className="sf-timeline-steps">{story.map((item,i)=><Reveal key={item.title.en} from="right" delay={i*.05}><article><h3>{text(locale,item.title)}</h3><p>{text(locale,item.body)}</p></article></Reveal>)}</div></section>
 <section className="sf-section sf-container"><SectionHeading locale={locale} title={copy('认识流程背后的伙伴','Meet the people behind the process')} description={copy('一群热爱故事、剪辑和创作的人，为每个想法找到适合的表达。人物与职位为演示内容。','Editors, storytellers, and makers obsessed with helping creators win. People and roles are demonstration content.')}/><div className="sf-team-grid">{team.map((person,i)=><Reveal key={person.name} delay={i*.08} className="sf-team-card"><img src={person.image} alt={locale==='zh'?`${person.name} 团队演示照片`:`Demonstration team photo of ${person.name}`} loading="lazy"/><h3>{person.name}</h3><p>{text(locale,person.role)}</p></Reveal>)}</div></section>
 <section className="sf-section sf-container"><SectionHeading locale={locale} title={copy('让结果说话','The result speaks for itself')} description={copy('作品通过创作者的信任和反馈呈现价值。统计为演示。','Our work speaks through the creators who trust us. Metrics are demonstrations.')}/><Stats locale={locale} about/><p className="sf-demo-note">{text(locale,content.demo)}</p></section>
 </>}
