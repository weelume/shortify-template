'use client'
import {Shell} from '../components/Shell'
import {Portfolio} from '../views/Portfolio'
import type {SiteTemplatePageProps} from '../../../types'
export default function PortfolioPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Portfolio locale={locale}/></Shell>}
