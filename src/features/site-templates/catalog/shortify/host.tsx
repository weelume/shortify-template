'use client'
import {createContext,useContext,type ReactNode} from 'react'
import type {TemplateLocale} from '../../types'
export interface ShortifyHostOptions {brandName?:Record<TemplateLocale,string>;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Record<TemplateLocale,string>;marketplaceAriaLabel?:Record<TemplateLocale,string>;filing?:ReactNode}
const Context=createContext<ShortifyHostOptions>({})
/** 宿主只注入品牌与平台入口，模板页面保持可独立运行。 */
export function ShortifyHostProvider({children,...options}:ShortifyHostOptions&{children:ReactNode}) {return <Context.Provider value={options}>{children}</Context.Provider>}
export function useShortifyHost(){return useContext(Context)}
/** 同一通用内容在宿主中使用注入的品牌，独立运行仍使用模板自身品牌。 */
export function useBrandText(){const host=useShortifyHost();return (locale:TemplateLocale,value:Record<TemplateLocale,string>)=>value[locale].replace(/Shortify/gi,host.brandName?.[locale]??'Shortify')}

