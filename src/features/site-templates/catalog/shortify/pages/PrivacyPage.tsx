'use client'
import {Shell} from '../components/Shell'
import {Privacy} from '../views/Privacy'
import type {SiteTemplatePageProps} from '../../../types'
export default function PrivacyPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Privacy locale={locale} basePath={basePath}/></Shell>}
