import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,access} from 'node:fs/promises'
import {resolve} from 'node:path'
import {templatePath,localePath} from '../src/features/site-templates/catalog/shortify/config/routing.ts'
const root=resolve(import.meta.dirname,'..')
const json=async path=>JSON.parse(await readFile(resolve(root,path),'utf8'))
test('同页语言切换保留嵌套页面、查询参数和锚点，拒绝其他挂载点',()=>{
 const slug='blog/the-content-waterfall-one-podcast-ten-reels'
 assert.equal(localePath('/en/'+slug,'','zh','?source=demo#details'),'/'+slug+'?source=demo#details')
 assert.equal(localePath('/catalog/shortify/site/'+slug,'/catalog/shortify/site','en','?source=demo#details'),'/catalog/shortify/site/en/'+slug+'?source=demo#details')
 assert.equal(templatePath('','zh'),'/');assert.equal(templatePath('','en'),'/en')
 assert.throws(()=>localePath('/unrelated','/catalog/shortify/site','en'))
})
test('页面合同、文章与路由模块一致，所有正文包含双语',async()=>{
 const pages=await json('src/features/site-templates/catalog/shortify/content/pages.json'),articles=await json('src/features/site-templates/catalog/shortify/content/articles.json'),metadata=await json('.tpl/template.json')
 assert.equal(pages.length,12);assert.equal(new Set(pages.map(p=>p.slug)).size,pages.length)
 assert.deepEqual(pages.map(p=>p.slug),metadata.surfaces[0].pages.map(p=>p.slug))
 for(const article of articles){assert.ok(pages.some(p=>p.slug==='blog/'+article.slug));assert.ok(article.blocks.length>=10);assert.ok(article.title.zh&&article.title.en);for(const block of article.blocks)for(const value of block.items??[block.text])assert.ok(value.zh&&value.en)}
})
test('运行素材映射与视频本地存在，不使用远程播放器',async()=>{
 const media=await json('src/features/site-templates/catalog/shortify/content/media.json')
 for(const path of Object.values(media)){assert.ok(path.startsWith('/templates/shortify/'));await access(resolve(root,'public'+path))}
 for(const id of ['ava','ethan','claire','emily','ryan']){const bytes=await readFile(resolve(root,`public/templates/shortify/media/${id}.mp4`));assert.ok(bytes.length>100000);assert.equal(bytes.toString('ascii',4,8),'ftyp')}
 const portfolio=await readFile(resolve(root,'src/features/site-templates/catalog/shortify/views/Portfolio.tsx'),'utf8');assert.ok(!portfolio.includes('<iframe'))
})
