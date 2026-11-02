'use client'
import {Shell} from '../components/Shell'
import {Blog} from '../views/Blog'
import type {SiteTemplatePageProps} from '../../../types'
export default function BlogPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Blog locale={locale} basePath={basePath}/></Shell>}
