import type { Job } from '@/types/job'

export const mockJobs: Job[] = [
  {
    id: 1,
    title: '[職缺] Google - Senior Frontend Engineer',
    company: 'Google',
    position: 'Senior Frontend Engineer',
    jobType: 'Full-time 全職',
    locationType: 'Remote 遠端',
    region: '🇹🇼 台灣 Taiwan',
    location: '台北',
    salary: '200萬-300萬 TWD/年',
    description: `## 工作內容
- 開發和維護大規模 Web 應用程式
- 與產品團隊合作設計使用者介面
- 優化前端效能和使用者體驗

## 必備條件
- 5年以上前端開發經驗
- 精通 React, TypeScript
- 熟悉 Web 效能優化`,
    contact: 'hr@google.com',
    url: 'https://github.com/example/repo/issues/1',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    labels: ['job', 'approved', 'remote', 'full-time', 'taiwan'],
  },
  {
    id: 2,
    title: '[職缺] Meta - Product Designer',
    company: 'Meta',
    position: 'Product Designer',
    jobType: 'Full-time 全職',
    locationType: 'Hybrid 混合',
    region: '🇺🇸 美國 United States',
    location: 'San Francisco',
    salary: '$120k-$180k USD/year',
    description: `## Job Description
- Design innovative product experiences
- Build design systems
- Collaborate closely with engineers

## Requirements
- 3+ years UI/UX design experience
- Proficient in Figma, Sketch
- Excellent communication skills`,
    contact: 'design@meta.com',
    url: 'https://github.com/example/repo/issues/2',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    labels: ['job', 'approved', 'hybrid', 'full-time', 'us'],
  },
  {
    id: 3,
    title: '[職缺] Microsoft - Backend Engineer',
    company: 'Microsoft',
    position: 'Backend Engineer',
    jobType: 'Full-time 全職',
    locationType: 'On-site 現場',
    region: '🇯🇵 日本 Japan',
    location: 'Tokyo',
    salary: '¥8M-¥12M JPY/year',
    description: `## 仕事内容
- 高可用性バックエンドサービスの開発
- RESTful APIの設計
- データベースの最適化

## 必須条件
- Node.js または Python の経験
- 分散システムの理解
- SQL/NoSQL データベースの経験`,
    contact: 'jobs@microsoft.com',
    url: 'https://github.com/example/repo/issues/3',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    labels: ['job', 'approved', 'onsite', 'full-time', 'japan'],
  },
  {
    id: 4,
    title: '[Job] Shopee - Data Scientist Intern',
    company: 'Shopee',
    position: 'Data Scientist Intern',
    jobType: 'Internship 實習',
    locationType: 'Remote 遠端',
    region: '🇸🇬 新加坡 Singapore',
    location: 'Singapore',
    salary: 'SGD $3,000-$4,000/month',
    description: `## Job Description
- Data analysis and visualization
- Machine learning model development
- Support data-driven decision making

## Requirements
- Statistics or Data Science background
- Proficient in Python, pandas
- Passionate about machine learning`,
    contact: 'intern@shopee.com',
    url: 'https://github.com/example/repo/issues/4',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    labels: ['job', 'approved', 'remote', 'internship', 'singapore'],
  },
  {
    id: 5,
    title: '[職缺] 91APP - Full Stack Developer',
    company: '91APP',
    position: 'Full Stack Developer',
    jobType: 'Full-time 全職',
    locationType: 'Hybrid 混合',
    region: '🇹🇼 台灣 Taiwan',
    location: '台北',
    salary: '120萬-180萬 TWD/年',
    description: `## 工作內容
- 開發電商平台功能
- 前後端整合
- 系統維護與優化

## 必備條件
- 3年以上全端開發經驗
- React + Node.js
- RESTful API 設計`,
    contact: 'hr@91app.com',
    url: 'https://github.com/example/repo/issues/5',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    labels: ['job', 'hybrid', 'full-time', 'taiwan'],
  },
  {
    id: 6,
    title: '[Job] Spotify - iOS Engineer',
    company: 'Spotify',
    position: 'iOS Engineer',
    jobType: 'Full-time 全職',
    locationType: 'Hybrid 混合',
    region: '🇬🇧 英國 United Kingdom',
    location: 'London',
    salary: '£70k-£100k GBP/year',
    description: `## Job Description
- Develop iOS music streaming app
- Optimize playback experience
- Implement new features

## Requirements
- Swift development experience
- Familiarity with iOS SDK
- App Store submission experience`,
    contact: 'jobs@spotify.com',
    url: 'https://github.com/example/repo/issues/6',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    labels: ['job', 'approved', 'hybrid', 'full-time', 'uk'],
  },
  {
    id: 7,
    title: '[Job] SAP - DevOps Engineer (Part-time)',
    company: 'SAP',
    position: 'DevOps Engineer',
    jobType: 'Part-time 兼職',
    locationType: 'Remote 遠端',
    region: '🇩🇪 德國 Germany',
    location: 'Berlin',
    salary: '€40-€60 EUR/hour',
    description: `## Stellenbeschreibung
- CI/CD Pipeline-Entwicklung
- Kubernetes-Cluster-Verwaltung
- Monitoring-System-Wartung
- 20 Stunden pro Woche

## Anforderungen
- Docker, Kubernetes Erfahrung
- AWS/GCP Cloud-Services
- Linux-Systemadministration`,
    contact: 'dev@sap.com',
    url: 'https://github.com/example/repo/issues/7',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
    labels: ['job', 'approved', 'remote', 'part-time', 'germany'],
  },
  {
    id: 8,
    title: '[Job] Shopify - Senior Rails Developer',
    company: 'Shopify',
    position: 'Senior Rails Developer',
    jobType: 'Full-time 全職',
    locationType: 'Remote 遠端',
    region: '🇨🇦 加拿大 Canada',
    location: 'Toronto (Remote OK)',
    salary: 'CAD $140k-$180k/year',
    description: `## Job Description
- Build e-commerce platform features
- Maintain Ruby on Rails applications
- Improve system scalability

## Requirements
- 5+ years Rails development
- PostgreSQL experience
- Strong testing skills (RSpec)`,
    contact: 'careers@shopify.com',
    url: 'https://github.com/example/repo/issues/8',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 20).toISOString(),
    labels: ['job', 'approved', 'remote', 'full-time', 'canada'],
  },
  {
    id: 9,
    title: '[Job] Atlassian - Product Manager',
    company: 'Atlassian',
    position: 'Product Manager',
    jobType: 'Full-time 全職',
    locationType: 'Hybrid 混合',
    region: '🇦🇺 澳洲 Australia',
    location: 'Sydney',
    salary: 'AUD $150k-$200k/year',
    description: `## Job Description
- Define product roadmap and strategy
- Work with cross-functional teams
- Drive product innovation

## Requirements
- 4+ years product management
- B2B SaaS experience
- Strong analytical skills`,
    contact: 'jobs@atlassian.com',
    url: 'https://github.com/example/repo/issues/9',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 25).toISOString(),
    labels: ['job', 'approved', 'hybrid', 'full-time', 'australia'],
  },
  {
    id: 10,
    title: '[職缺] 香港科技公司 - Android Developer',
    company: 'HK Tech Co.',
    position: 'Android Developer',
    jobType: 'Full-time 全職',
    locationType: 'On-site 現場',
    region: '🇭🇰 香港 Hong Kong',
    location: '香港',
    salary: 'HKD $40k-$60k/month',
    description: `## 工作內容
- 開發 Android 應用程式
- 優化應用程式效能
- 參與技術架構設計

## 必備條件
- 3年以上 Android 開發經驗
- 熟悉 Kotlin, Java
- Material Design 經驗`,
    contact: 'hr@hktech.com',
    url: 'https://github.com/example/repo/issues/10',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
    labels: ['job', 'approved', 'onsite', 'full-time', 'hongkong'],
  },
]
