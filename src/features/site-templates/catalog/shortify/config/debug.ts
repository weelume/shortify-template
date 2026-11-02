/** 开发日志只记录页面与交互状态，不记录邮箱、姓名、消息或其他输入内容。 */
export function debugEvent(event:string,context:Record<string,string|number|boolean|null>){if(process.env.NODE_ENV==='development')console.debug(`[shortify] ${event}`,context)}
