import type { GlobalThemeOverrides } from 'naive-ui'

// 主题颜色配置
const defaultColors = {
  primaryColor: '#2080f0',
  primaryColorHover: '#4098fc',
  primaryColorPressed: '#1060c9',
  primaryColorSuppl: '#90caf9'
}

// 主题配置
const themeConfigs = {
  default: {
    common: defaultColors
  },
} as const

// 获取主题配置
export function getThemeOverrides(): GlobalThemeOverrides {
  // 默认返回默认主题
  return themeConfigs.default as GlobalThemeOverrides
}

export const getExemptedTheme = () => {
  return themeConfigs.default as GlobalThemeOverrides
}

export const defaultSwc = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const currentTheme = getThemeOverrides()
  return {
    background: checked ? currentTheme.common?.primaryColor : undefined,
    boxShadow: focused ? `0 0 0 2px ${currentTheme.common?.primaryColorSuppl}` : undefined
  }
}

export const exemptedSwc = ({ focused, checked }: { focused: boolean; checked: boolean }) => {
  const currentTheme = themeConfigs.default
  return {
    background: checked ? currentTheme.common?.primaryColor : undefined,
    boxShadow: focused ? `0 0 0 2px ${currentTheme.common?.primaryColorSuppl}` : undefined
  }
}