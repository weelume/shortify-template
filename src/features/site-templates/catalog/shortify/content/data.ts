import media from './media.json'
export type Locale = 'zh' | 'en'
export type Copy = {zh:string;en:string}
export const text=(locale:Locale,value:Copy)=>value[locale]
export const copy=(zh:string,en:string):Copy=>({zh,en})
export const asset=(id:keyof typeof media)=>media[id]
export const videos = [
 {id:'ava',name:'avacollective',poster:'/templates/shortify/media/ava-poster.webp',caption:copy('那些保持稳定更新的创作者，都做对了这件事','The consistency cheat code no one talks about'),views:'5,948'},
 {id:'ethan',name:'ethaneditz',poster:'/templates/shortify/media/ethan-poster.webp',caption:copy('创作不是好运，而是持续练习','Creators aren’t lucky. They’re trained.'),views:'5,242'},
 {id:'claire',name:'clairecreates',poster:'/templates/shortify/media/claire-poster.webp',caption:copy('自由创作者都在讨论这件事','Freelancers are going crazy about this…'),views:'937K'},
 {id:'emily',name:'emilyonmic',poster:'/templates/shortify/media/emily-poster.webp',caption:copy('每一次发布，都让内容更好','Your content gets better the more you publish.'),views:'105K'},
 {id:'ryan',name:'ryanmercer.studio',poster:'/templates/shortify/media/ryan-poster.webp',caption:copy('这改变了我在线上表达自己的方式','This changed how I show up online.'),views:'5,948'},
]
export const nav=[{slug:'',title:copy('首页','Home')},{slug:'portfolio',title:copy('作品','Portfolio')},{slug:'about',title:copy('关于','About')},{slug:'blog',title:copy('博客','Blog')}]
export const content={
 call:copy('预约聊聊','Book a call'),
 hero:copy('你的短视频创作\n从此轻松运转','YOUR SHORT-FORM,\nON AUTOPILOT'),
 intro:copy('你负责记录，我们负责其余。把原始灵感变成让人停下滑动的短视频，让创作持续发生。','You record. We handle the rest. Turning your raw ideas into scroll-stopping short-form videos, automatically.'),
 problem:copy('是什么让你\n迟迟没有发布新内容','What’s really stopping\nyou from posting more?'),
 problemDesc:copy('剪辑、修改、反复纠结，再从头来过。在镜头和发布按钮之间，创作的热情逐渐消耗。','You’re stuck in a cycle of editing, tweaking, second-guessing, and repeating, where creativity slows down between the camera and the upload button.'),
 features:copy('短视频持续增长\n需要的都在这里','Everything you need\nto scale on short-form'),
 featuresDesc:copy('快速交付、紧跟趋势，以表现为导向的短视频内容，帮助好想法被更多人看见。','Fast turnarounds, trend-driven edits, and performance focused short-form content built to grow your reach'),
 services:copy('让创作服务简单一点','OUR SERVICES SIMPLIFIED'),
 servicesDesc:copy('从原始片段，到准备发布的社交媒体内容，我们这样帮助你。','From raw video clips to polished, ready-to-post social media content, here’s how we help:'),
 process:copy('从灵感到发布','HOW IT WORKS'),
 processDesc:copy('从记录你的想法，到发布精心打磨的短片，让内容持续流动。','From recording your thoughts to posting polished clips here’s how Shortify keeps your content flowing.'),
 statement:copy('问题往往不在创意，而在流程。我们用完整的内容协作系统，把原始素材变成精心剪辑的短视频。','The problem isn’t creativity — it’s process. Shortify fixes that with a done-for-you system that turns raw footage into polished short-form content — fast.'),
 pricing:copy('选择你的节奏\n其余交给我们','Pick Your Pace.\nWe’ll handle the rest'),
 reviews:copy('听听创作者怎么说','What creators say about Shortify'),
 reviewsDesc:copy('更多自由、更好的互动，把精力重新放回最擅长的创作。以下人物、数据和评价仅为模板演示。','More freedom, better engagement, and more time to create. People, metrics and testimonials are template demonstrations.'),
 faq:copy('常见问题','Frequently Asked Questions'),
 cta:copy('每个创作者都有好想法\n让你的想法被更多人看见','EVERY CREATOR HAS IDEAS.\nWE MAKE SURE YOURS REACH MILLIONS'),
 demo:copy('仅为模板演示，未发送或保存任何信息','Template demo only. Nothing is sent or saved.'),
}
export const painPoints=[copy('更新不稳定','Inconsistent Posting'),copy('高质量剪辑','Premium Editing'),copy('剪辑太耗时','Too Much Time Editing'),copy('总在和别人比较','Comparing With Others'),copy('素材难整理','Hard to Stay Organized'),copy('创作疲劳','Creative Fatigue'),copy('流程断层','Broken Workflow'),copy('品牌不统一','No Brand Consistency'),copy('想得多，发得少','Post Less. Think More')]
export const features=[
 {title:copy('快速交付','Fast Turnaround'),body:copy('从原始素材到可以发布的内容，只需五至六天，让好想法及时上线。','We move fast, your videos go from raw footage to ready to post content in just five to six days, a remarkably efficient turnaround.'),image:asset('3b0edaa11f9121bd'),kind:'speed'},
 {title:copy('你的内容也能如此出彩','Your content can look this good.'),body:copy('用更好的剪辑、字幕、节奏和画面，让品牌被记住。','Better edits, captions, pacing, and visuals elevate a brand.'),image:asset('55e3cde452b093f1'),kind:'phone'},
 {title:copy('用数字呈现进步','Numbers speak for themselves'),body:copy('持续观察播放与互动，用真实反馈优化下一条内容。图中数据为演示。','Our clients consistently hit above-average reach with 2x higher views. Figures shown are demonstrations.'),image:asset('d15e60722e655d7b'),kind:'chart'},
 {title:copy('内容始终紧跟趋势','Always on trend CONTENT'),body:copy('编辑持续关注声音、内容形式和视觉风格的新变化。','Editors track trending sounds, formats, and styles for your content.'),image:asset('63b7316913d987cb'),kind:'trend'},
 {title:copy('把长内容变成高光时刻','Turn hours into highlights'),body:copy('把长视频拆解成多个有重点、有节奏、便于分享的短片。','Transforming long video into many short, engaging clips.'),image:asset('d188ab00ad1571e2'),kind:'clips'},
]
export const services=[
 {title:copy('短视频剪辑','Short form editing'),body:copy('找到开场的吸引力，用紧凑而自然的节奏，让观众愿意看到最后。','We craft fast, engaging edits that hook viewers and keep them watching videos till the end with our editing.')},
 {title:copy('品牌视觉与字幕','Branding & CAPTIONS'),body:copy('字幕、颜色、视觉和表达方式彼此一致，让每一次出现都属于你的品牌。','We match your brand’s tone with captions, colors, and visuals that stand out and write captions that are trending.')},
 {title:copy('长内容再创作','Long-form Repurposing'),body:copy('从播客、访谈和长视频里，提炼适合短视频平台的精彩片段。','We transform lengthy podcasts and video content into dozens of easily shareable short-form video clips.')},
 {title:copy('内容表现优化','CONTENT OPTIMIZATION'),body:copy('追踪开场、节奏和关键表现，把每次发布都变成下一次改进的依据。','We track hooks, pacing, and crucial data points to consistently help your reels perform significantly better.')},
]
export const steps=[
 {title:copy('1. 记录','1. Record'),body:copy('记录想法、灵感或对话，不需要复杂布景，也不用昂贵设备。','Capture your thoughts, ideas, or conversations no setup or fancy gear needed.')},
 {title:copy('2. 上传','2. Upload'),body:copy('整理素材和品牌要求，让编辑团队了解你想表达什么。','Send us your footage and brand guidelines. We organize everything into a clear creative brief.')},
 {title:copy('3. 剪辑','3. We edit'),body:copy('编辑打磨开场、节奏、字幕与动效，让内容更有感染力。','Our editors shape hooks, pacing, captions and motion into a polished, on-brand short.')},
 {title:copy('4. 交付','4. Deliver'),body:copy('检查、反馈并完成调整，获得适合各个平台发布的短视频。','Review your ready-to-post clips, share feedback, and publish across your platforms.')},
]
export const plans=[
 {title:copy('基础计划','BASIC PLAN'),price:'1999',description:copy('适合刚开始建立稳定线上表达的创始人与创作者。','Perfect for founders just starting to build a consistent online presence.'),items:[copy('每月最多 8 条短视频','Up to 8 short videos per month'),copy('5–6 天交付','5–6 day turnaround time'),copy('包含开场、字幕与节奏调整','Hooks, captions & pacing included'),copy('每条视频 1 轮反馈','1 feedback round per video'),copy('趋势音乐与效果','Trend-based music & effects')]},
 {title:copy('专业计划','PRO PLAN'),price:'2499',description:copy('适合希望投入更多精力、持续扩大品牌影响力的创作者。','For serious creators ready to go all in aggressively to scale their brand.'),items:[copy('包含基础计划全部内容','All Basic plan features+'),copy('每月最多 16 条短视频','Up to 16 short videos per month'),copy('3–4 天交付','3–4 day turnaround time'),copy('不限反馈轮次','Unlimited feedback rounds'),copy('每月趋势适配','Monthly trend adaptation'),copy('创意审核','Creative review')]},
 {title:copy('精英计划','ELITE PLAN'),price:'3999',description:copy('适合需要高频内容与专属协作的成熟品牌。','For established authorities who need daily content and white-glove service.'),items:[copy('包含专业计划全部内容','All Pro plan features+'),copy('每月最多 30 条短视频','Up to 30 short videos / month'),copy('48–72 小时交付','48–72 hour turnaround time'),copy('专属编辑与创意负责人','Dedicated editor + creative lead'),copy('多平台画幅适配','Multi-platform formatting'),copy('每月内容策略','Monthly content strategy')]},
]
export const faqs=[
 {q:copy('整个服务如何运作','How does Shortify actually work?'),a:copy('记录视频或播客，整理并上传素材；编辑完成剪辑、字幕与效果，通常在五至六天内提供可发布的短视频。这里展示的是模板流程。','You record your video or podcast, upload it, and within 5–6 days receive ready-to-post short-form videos with captions, cuts, and effects. This is a template demonstration.')},
 {q:copy('由真人编辑还是 AI 完成','IS THIS DONE BY HUMANS OR AI?'),a:copy('由真人编辑负责创意与最终交付。AI 可以辅助字幕与开场建议，但不会替代编辑的审美判断。','Human editors craft every clip. AI tools can speed up subtitles and suggest hooks; final creative decisions remain human.')},
 {q:copy('没有长视频素材怎么办','WHAT IF I DON’T HAVE LONG VIDEOS?'),a:copy('口播片段、录屏、语音笔记或脚本都可以成为创作起点。先把想法记录下来即可。','You can send raw talking-head clips, screen recordings, voice notes, or even a script/topic list. Long-form content is optional.')},
 {q:copy('如何开始第一次合作','How do I get started?'),a:copy('通过联系页描述你的目标、内容类型和更新频率。这是演示站点，表单只在本地校验，不发送或保存。','Describe your goals, content type and publishing schedule on the contact page. This demo validates locally and does not send or save the form.')},
 {q:copy('可以提供哪些类型的内容','WHAT KIND OF CONTENT CAN I SEND?'),a:copy('播客、访谈、直播、Zoom 会议、口播、录屏、语音备忘或要点脚本都可以。请只使用你有权提供的素材。','Podcasts, YouTube videos, Zoom calls, livestreams, vlogs, screen recordings, interviews, voice memos or bullet-point scripts. Only provide content you have rights to use.')},
 {q:copy('交付需要多长时间','HOW FAST IS THE TURNAROUND?'),a:copy('基础计划通常为 5–6 个工作日，专业与精英计划更快。具体取决于素材长度、反馈轮次和约定范围；本页报价为演示。','Standard turnaround is 5–6 business days. Higher plans offer faster delivery. Actual timing depends on source length, feedback and agreed scope; plans here are demonstrations.')},
]
export const testimonials=[
 {name:'KSA',quote:copy('整个内容流程变得顺畅了。我们可以兼顾多个平台，同时保持内容质量。','Shortify has completely streamlined our workflow. It allows us to scale our output across platforms without sacrificing quality.'),views:'8B+',followers:'24M+',image:asset('cfe4e1ac0845e4d1')},
 {name:'Kai CenatI',quote:copy('把长直播整理成精彩片段，让创作投入产生了更多可能。','The ROI we’ve seen since using Shortify is insane. It’s the easiest way to turn long streams into viral clips instantly.'),views:'800M+',followers:'10M+',image:asset('912649159e561684')},
 {name:'MrBeasts',quote:copy('我们以前花很多时间手动寻找片段，现在可以把精力投入到更重要的创作。','We used to spend hours manually clipping content. Shortify automated that process and gave us huge upside on our channel growth.'),views:'40B+',followers:'200M+',image:asset('c6e19c722c74d288')},
 {name:'Pokimaned',quote:copy('持续更新很重要，一个可靠的长期协作伙伴能带来很大帮助。','Consistency is key in this game, and Shortify helps us hit our targets. It is a reliable partner in our long-term content strategy.'),views:'500M+',followers:'9M+',image:asset('1757931492744534')},
 {name:'IShowSlow',quote:copy('稳定的内容协作成为日常运营的一部分，也为品牌成长释放了空间。','Shortify is an essential part of our operations and they have provided huge upside to us and our brand Growth.'),views:'2B+',followers:'10M+',image:asset('7aa91fb2f9f6a566')},
]
export const team=[{name:'Ron Walker',role:copy('创始人兼 CEO','Founder & CEO'),image:asset('03e6bf0c6f08940b')},{name:'Dylan Hughes',role:copy('创意负责人','Creative Lead'),image:asset('46b8507611b20596')},{name:'Chloe Morgan',role:copy('视频编辑','Video Editor'),image:asset('aec5ded1a44f1eab')},{name:'Tyler Adams',role:copy('视频编辑','Video Editor'),image:asset('65496ac77dd7dba6')},{name:'Jake Miller',role:copy('动效设计师','Motion Expert'),image:asset('fbfc9bf8b69b9904')}]
