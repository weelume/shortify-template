'use client'
import {Shell} from '../components/Shell'
import {About} from '../views/About'
import type {SiteTemplatePageProps} from '../../../types'
export default function AboutPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><About locale={locale}/></Shell>}
