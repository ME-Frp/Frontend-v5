<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logos">
          <div class="footer-logo">
            <img src="/favicon.svg" alt="幻缘映射" />
            <div class="footer-logo-text">
              <span class="logo-title">幻缘映射 MagicEdge Frp</span>
              <span class="logo-subtitle">由 <a href="http://www.menetx.com" target="_blank">幻缘网络</a> 与 <a
                  href="http://www.blbilink.com" target="_blank">阜阳市波比网络科技有限公司</a> 运营</span>
            </div>
          </div>
        </div>
        <p>Copyright © ME Frp 项目组 2021-2025.</p>
        <p><a href="https://内网穿透.中国/">内网穿透联盟统一识别编码: AZWB66WB</a></p>

        <p class="footer-vaptcha">验证服务由 <a href="https://www.vaptcha.com" target="_blank" rel="noopener">VAPTCHA</a> 提供</p>
        <p><a href="https://beian.miit.gov.cn">津ICP备2025034927号-2</a></p>
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
