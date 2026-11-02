'use client'
import {Shell} from '../components/Shell'
import {Article} from '../views/Blog'
import type {SiteTemplatePageProps} from '../../../types'
export default function Article4Page({locale='zh',basePath}:SiteTemplatePageProps){return <Shell locale={locale} basePath={basePath}><Article locale={locale} basePath={basePath} slug="silence-is-golden-why-dynamic-captions-are-non-negotiable"/></Shell>}
