'use client'
import {useId,useState} from 'react'
import {content,text,type Locale} from '../content/data'
export function ContactForm({locale}:{locale:Locale}){
 const [submitted,setSubmitted]=useState(false),id=useId()
 return <form className="sf-contact-form sf-glass" onSubmit={event=>{event.preventDefault();setSubmitted(true)}} onChange={()=>setSubmitted(false)}><label htmlFor={`${id}-name`}>{locale==='zh'?'你的姓名':'Your Name'}<input id={`${id}-name`} name="name" autoComplete="name" maxLength={100} placeholder={locale==='zh'?'如何称呼你':'Jane Smith'}/></label><label htmlFor={`${id}-email`}>{locale==='zh'?'电子邮箱 *':'Email Address *'}<input id={`${id}-email`} name="email" type="email" required autoComplete="email" maxLength={254} placeholder={locale==='zh'?'name@example.com':'jane@example.com'}/></label><label htmlFor={`${id}-message`}>{locale==='zh'?'你的想法':'Your Message'}<textarea id={`${id}-message`} name="message" maxLength={3000} rows={5} placeholder={locale==='zh'?'聊聊你的创作计划':'Your Message'}/></label><button type="submit" className="sf-form-submit">{locale==='zh'?'校验表单':'Submit'}</button><p className="sf-form-note" id={`${id}-note`}>{text(locale,content.demo)}</p>{submitted&&<p className="sf-form-status" role="status">{locale==='zh'?'本地校验通过。此表单未发送、未保存，也未创建预约。':'Local validation passed. This form was not sent or saved, and no appointment was created.'}</p>}</form>
}
