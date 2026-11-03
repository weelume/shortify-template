import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {shortifyTemplate} from '../../features/site-templates/catalog/shortify/meta'
import type {TemplateLocale} from '../../features/site-templates/types'
import {brand} from '../../features/site-templates/catalog/shortify/config/brand'
type RouteProps={params:Promise<{slug?:string[]}>}
async function resolvePage(params:RouteProps['params']){
 const segments=(await params).slug??[],locale:TemplateLocale=segments[0]==='en'?'en':'zh',slug=(locale==='en'?segments.slice(1):segments).join('/')
 const page=shortifyTemplate.surfaces[0].pages.find(page=>page.slug===slug);if(!page)notFound()
 return {page,locale}
}
export async function generateMetadata({params}:RouteProps):Promise<Metadata>{const {page,locale}=await resolvePage(params);return {title:(page.localizedTitles?.[locale]??page.title)+' · '+brand.name[locale],description:brand.description[locale]}}
export default async function Page({params}:RouteProps){const {page,locale}=await resolvePage(params);const {default:View}=await page.load();return <View basePath="" locale={locale}/>}
