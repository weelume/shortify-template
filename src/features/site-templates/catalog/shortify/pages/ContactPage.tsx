'use client'
import {Shell} from '../components/Shell'
import {Contact} from '../views/Contact'
import type {SiteTemplatePageProps} from '../../../types'
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath} cta={false}><Contact locale={locale}/></Shell>}
