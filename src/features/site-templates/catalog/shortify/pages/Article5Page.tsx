'use client'
import {Shell} from '../components/Shell'
import {Article} from '../views/Blog'
import type {SiteTemplatePageProps} from '../../../types'
export default function Article5Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Article locale={locale} basePath={basePath} slug="anatomy-of-a-viral-hook-the-first-3-seconds"/></Shell>}
