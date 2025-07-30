<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logos">
          <div class="footer-logo">
            <img src="/favicon.svg" alt="神人映射" />
            <div class="footer-logo-text">
              <span class="logo-title">Kami Frp 神人映射</span>
              <span class="logo-subtitle">由 <a href="http://www.menetx.com" target="_blank">神人网络</a> 运营</span>
            </div>
          </div>
        </div>
        <p>Copyright © Kami Frp 项目组 2025.</p>
      </div>
      <div class="footer-right">
        <a href="/policy?tab=terms">服务协定</a>
        <a href="/dashboard/help">联系我们</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { NButton } from 'naive-ui'
</script>

<style lang="scss" scoped>
@use '../assets/styles/components/homeFooter.scss';
</style>
