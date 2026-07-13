import { Theme } from '@astryxdesign/core/theme'
import { appTheme } from './themes.js'

/** 프로젝트 전역에 테마 1개만 연결합니다. */
export function Providers({ children }) {
  return (
    <Theme theme={appTheme} mode="light">
      {children}
    </Theme>
  )
}