import type {Locale} from '../content/data'
export const templatePath=(base:string,locale:Locale,slug='')=>`${base.replace(/\/$/,'')}${locale==='en'?'/en':''}${slug?`/${slug}`:''}`||'/'
/** 只移除挂载点之后的语言段，避免嵌套页面和宿主前缀被误替换。 */
export function localePath(pathname:string,base:string,locale:Locale,suffix=''){
 if(base&&pathname!==base&&!pathname.startsWith(base+'/'))throw new Error('页面不属于当前模板挂载点')
 const slug=pathname.slice(base.length).replace(/^\/en(?=\/|$)/,'').replace(/^\//,'')
 return templatePath(base,locale,slug)+suffix
}
