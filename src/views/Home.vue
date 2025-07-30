<template>
  <NConfigProvider :theme-overrides="getExemptedTheme()">
  <div class="home-container">
    <!-- 主标题区域 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">{{ mock.title }}</h1>
        <p class="subtitle"> {{ mock.subtitle }} </p>
        <p class="thirdtitle"> {{ mock.thirdtitle }} </p>
        <div class="hero-buttons">
          <NButton type="primary" size="large" class="start-button" @click="router.push('/auth/login')">
            开始使用
          </NButton>
          <NButton size="large" class="docs-button" @click="router.push('/dashboard/downloads')">
            前往下载
          </NButton>
          <NButton size="large" class="docs-button" @click="router.push('/docs')">
            使用文档
          </NButton>
        </div>
      </div>
    </div>

    <!-- 统计数据 -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">
          <NNumberAnimation
            ref="nodeCount"
            :from="0"
            :to="stats.totalNodes"
            :duration="1500"
            :active="true"
          />
        </div>
        <div class="stat-label">节点数</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">
          <NNumberAnimation
            ref="userCount"
            :from="0"
            :to="stats.totalUsers"
            :duration="1500"
            :active="true"
          />
        </div>
        <div class="stat-label">用户数</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">
          <NNumberAnimation
            ref="proxiesCount"
            :from="0"
            :to="stats.proxies"
            :duration="1500"
            :active="true"
          />
        </div>
        <div class="stat-label">隧道数</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">
          <NNumberAnimation
            ref="trafficCount"
            :from="0"
            :to="stats.trafficNumber"
            :duration="1500"
            :active="true"
            :precision="2"
          />
          {{ stats.trafficUnit }}
        </div>
        <div class="stat-label">承载流量</div>
      </div>
    </div>

    <!-- 特色功能 -->
    <div class="features-section">
      <h2 class="section-title">为什么选择我们？</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">
            <NIcon size="32" :component="feature.icon" />
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- 使用场景 -->
    <div class="scenarios-section">
      <h2 class="section-title">应用场景</h2>
      <div class="scenarios-grid">
        <div class="scenario-card" v-for="scenario in scenarios" :key="scenario.title">
          <div class="scenario-icon">
            <NIcon size="48" :component="scenario.icon" />
          </div>
          <div class="scenario-content">
            <h3>{{ scenario.title }}</h3>
            <p>{{ scenario.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 开始使用 CTA -->
    <div class="cta-section">
      <h2>准备好开始了吗？</h2>
      <p>加入我们, 体验高速稳定的内网穿透服务</p>
      <NButton type="primary" size="large" @click="router.push('/auth/register')">
        立即注册
      </NButton>
    </div>
  </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { ref, markRaw, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NIcon, NNumberAnimation, NConfigProvider } from 'naive-ui'
import {
  SpeedometerOutline,
  ShieldOutline,
  CodeSlashOutline,
  ServerOutline,
  HeartOutline,
  GitNetworkOutline,
  GameControllerOutline,
  DesktopOutline,
  WifiOutline
} from '@vicons/ionicons5'
import { getExemptedTheme } from '../constants/theme'
import { mock } from '../constants/mock'

export interface Statistics {
  users: number
  nodes: number
  proxies: number
  traffic: number
}

const router = useRouter()

const features = ref([
  {
    icon: markRaw(SpeedometerOutline),
    title: '高性能',
    description: '基于 Golang 开发, 性能优异, 内存占用低'
  },
  {
    icon: markRaw(ShieldOutline),
    title: '安全稳定', 
    description: 'BGP 线路接入, 多重防护, 稳定可靠, 支持 DDoS 防御'
  },
  {
    icon: markRaw(CodeSlashOutline),
    title: '简单易用',
    description: '界面简洁直观, 一键配置快速使用, 支持多种操作系统'
  },
  {
    icon: markRaw(ServerOutline),
    title: '优质节点',
    description: '多地域节点覆盖, 低延迟, 高带宽'
  },
  {
    icon: markRaw(GitNetworkOutline),
    title: '全新界面',
    description: '基于现代化技术栈开发的全新 5.0 界面, 美观易用'
  },
  {
    icon: markRaw(HeartOutline),
    title: '即时维护',
    description: '我们尽力及时修复故障, 保障服务稳定运行'
  }
])

const scenarios = ref([
  {
    title: '游戏联机',
    description: '支持我的世界、泰拉瑞亚等游戏的联机需求',
    icon: markRaw(GameControllerOutline)
  },
  {
    title: '开发调试',
    description: '便捷地进行微信开发、网站测试等开发工作',
    icon: markRaw(CodeSlashOutline)
  },
  {
    title: '远程办公',
    description: '安全访问远程桌面、内部系统等办公资源',
    icon: markRaw(DesktopOutline)
  },
  {
    title: '物联网',
    description: '轻松连接和管理各类物联网设备',
    icon: markRaw(WifiOutline)
  }
])

interface Stats {
  totalNodes: number
  totalUsers: number
  trafficNumber: number
  trafficUnit: string
  proxies: number
}

const stats = ref<Stats>({
  totalNodes: 0,
  totalUsers: 0,
  trafficNumber: 0,
  trafficUnit: 'B',
  proxies: 0
})

onMounted(async () => {
  try {
    const data = mock.stats
    const traffic = formatTraffic(data.traffic)
    nextTick(() => {
      stats.value = {
        totalNodes: data.nodes,
        totalUsers: data.users,
        trafficNumber: traffic.number,
        trafficUnit: traffic.unit,
        proxies: data.proxies
      }
    })
  } catch (err) {
    console.error('Failed to fetch statistics:', err)
  }
})

// 格式化流量, 返回数字和单位
function formatTraffic(bytes: number): { number: number; unit: string } {
  if (bytes === 0) return { number: 0, unit: 'B' }
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return {
    number: parseFloat((bytes / Math.pow(k, i)).toFixed(2)),
    unit: sizes[i]
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/home.scss';
</style>