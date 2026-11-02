'use client'
import {Shell} from '../components/Shell'
import {Article} from '../views/Blog'
import type {SiteTemplatePageProps} from '../../../types'
export default function Article3Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Article locale={locale} basePath={basePath} slug="the-0-setup-why-your-iphone-is-enough"/></Shell>}
