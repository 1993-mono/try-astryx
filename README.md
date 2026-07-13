# try-astryx

Meta의 AI-ready React 디자인 시스템 **[Astryx](https://github.com/facebook/astryx)** 를 직접 써보기 위한 실험용 프로젝트입니다.

[Vite](https://vite.dev/) + React(JavaScript) 앱을 기반으로 합니다.

## 목표

- Astryx 컴포넌트·테마·CLI를 React 환경에서 사용해 보기
- Cursor AI가 Astryx 규칙을 따라 UI를 작성하는지 확인하기
- Figma 시안을 Astryx 컴포넌트로 구현하는 흐름 익히기

## 기술 스택

| 구분 | 선택 |
| --- | --- |
| 빌드 도구 | Vite |
| UI | React + JavaScript |
| 패키지 관리 | Yarn (`node-modules`) |
| 디자인 시스템 | Astryx (`@astryxdesign/core`) |
| 테마 | `@astryxdesign/theme-neutral` |
| 에디터 / AI | Cursor |
| 디자인 | Figma |

## 시작하기

### 의존성 설치

```bash
yarn
```

### 개발 서버 실행

```bash
yarn dev
```

터미널에 안내된 주소(보통 [http://localhost:5173](http://localhost:5173))를 브라우저에서 열면 됩니다.

## 참고 링크

- [Astryx GitHub](https://github.com/facebook/astryx)
- [Astryx Working with AI](https://astryx.atmeta.com/docs/working-with-ai)
- [Vite 문서](https://vite.dev/)
- [React 문서](https://react.dev/)
