// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "VoidCat 服务状态",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/wumingshiali', label: 'GitHub', highlight: true },
    { link: 'https://meali.top/posts', label: 'Blog', highlight: true },
    { link: 'mailto:ZWj1154142014@hotmail.com', label: 'Email Me'},
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'p_web',
      name: '个人网站',
      method: 'GET',
      target: 'https://meali.top',
      statusPageLink: 'https://meali.top',
      timeout: 10000,
    },
    {
      id: 'tjl',
      name: '通缉令生成器',
      method: 'GET',
      target: 'https://tjl.meali.top',
      statusPageLink: 'https://tjl.meali.top',
      timeout: 10000,
    },
    {
      id: 'tg',
      name: '文字渲染器',
      method: 'GET',
      target: 'https://tg.meali.top',
      statusPageLink: 'https://tg.meali.top',
      timeout: 10000,
    },
    {
      id: 'breaking-fake-news',
      name: '爆炸假新闻',
      method: 'GET',
      target: 'https://breaking-fake-news.meali.top',
      statusPageLink: 'https://breaking-fake-news.meali.top',
      timeout: 10000,
    },
    {
      id: 'openlist',
      name: 'Openlist',
      method: 'GET',
      target: 'https://ol.meali.top',
      statusPageLink: 'https://ol.meali.top',
      timeout: 10000,
    },
    {
      id: 'umami',
      name: 'Umami',
      method: 'GET',
      target: 'https://umi.meali.top',
      timeout: 10000,
    },
  ],
  // [Optional] Notification settings
  notification: {
    // [Optional] Notification webhook settings, if not specified, no notification will be sent
    // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature

// const maintenances: MaintenanceConfig[] = []

const maintenances: MaintenanceConfig[] = [
  {
    monitors: ["umami"],
    title: "Umami 严重事故",
    body: "此次事故的原因是尝试给使用 Edgeone 部署的 Umami 添加 Cloudflare 代理，由于两边都配置了 https 重定向导致无限重定向",
    start: "2026-09-11T17:04:00+08:00",
    end: "2026-09-11T19:58:00+08:00",
    color: "red"
  }
]

// Don't edit this line
export { maintenances, pageConfig, workerConfig }
