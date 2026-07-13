import { defineTheme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral'

/**
 * 이 프로젝트의 단일 테마.
 * 앱 전역에서 Providers가 한 번만 감싸면 됩니다.
 */
export const appTheme = defineTheme({
  name: 'try-astryx',
  extends: neutralTheme,
  color: { accent: '#E85D4C', neutralStyle: 'warm' },
  radius: { base: 14, multiplier: 1.35 },
  typography: {
    scale: { base: 15, ratio: 1.25 },
    body: {
      family: 'Nunito',
      fallbacks: 'ui-rounded, system-ui, sans-serif',
      url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap',
    },
    heading: {
      family: 'Nunito',
      fallbacks: 'ui-rounded, system-ui, sans-serif',
      weight: '700',
    },
  },
  tokens: {
    '--color-accent': ['#E85D4C', '#FB923C'],
    '--color-text-accent': ['#C2410C', '#FDBA74'],
  },
  components: {
    button: {
      base: { borderRadius: '9999px', fontWeight: '700' },
    },
    card: {
      base: { borderRadius: '20px' },
    },
  },
})