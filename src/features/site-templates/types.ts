import type {ComponentType} from 'react'
export type TemplateLocale='zh'|'en'
export interface SiteTemplatePageProps {locale?:TemplateLocale;basePath:string}
export interface SiteTemplatePage {slug:string;title:string;localizedTitles?:Partial<Record<TemplateLocale,string>>;load:()=>Promise<{default:ComponentType<SiteTemplatePageProps>}>}
export type TemplateDevice='desktop'|'tablet'|'mobile'
export interface TemplateScreenshot {src:string;alt:string;device?:TemplateDevice;width?:number;height?:number}
export interface TemplateSurface {id:string;name:string;platform:'pc'|'miniprogram'|'mobile';locales?:readonly TemplateLocale[];pages:SiteTemplatePage[]}
export interface SiteTemplate {id:string;gitUrl?:string;name:string;localizedNames?:Partial<Record<TemplateLocale,string>>;sceneId:string;listed:boolean;tags:string[];summary:string;accentColor:string;cover:string;screenshots:[TemplateScreenshot,...TemplateScreenshot[]];surfaces:TemplateSurface[]}
