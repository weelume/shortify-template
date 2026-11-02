'use client'
import {Shell} from '../components/Shell'
import {Home} from '../views/Home'
import type {SiteTemplatePageProps} from '../../../types'
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Home locale={locale} basePath={basePath}/></Shell>}
