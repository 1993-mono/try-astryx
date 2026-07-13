# try-astryx

Meta의 AI-ready React 디자인 시스템 **[Astryx](https://github.com/facebook/astryx)** 를 직접 써보기 위한 실험용 프로젝트입니다.

## 목표

- Astryx 컴포넌트·테마·CLI를 Next.js 환경에서 사용해 보기
- Cursor AI가 Astryx 규칙을 따라 UI를 작성하는지 확인하기
- Figma 시안을 Astryx 컴포넌트로 구현하는 흐름 익히기

## 기술 스택

| 구분 | 선택 |
| --- | --- |
| 프레임워크 | Next.js (App Router) |
| UI | React + TypeScript |
| 디자인 시스템 | Astryx (`@astryxdesign/core`) |
| 테마 | `@astryxdesign/theme-neutral` |
| 에디터 / AI | Cursor |
| 디자인 | Figma |

## 시작하기

아직 프로젝트가 초기화되지 않았다면, 아래 순서로 진행합니다.

1. Next.js (React + TypeScript) 앱 생성
2. Astryx 패키지 및 CLI 설치
3. CSS import + Theme Provider 연결
4. Cursor용 agent docs 생성
5. 컴포넌트 / 템플릿으로 첫 화면 확인

자세한 CLI·설정은 [Astryx 공식 문서](https://github.com/facebook/astryx)와 [Working with AI](https://astryx.atmeta.com/docs/working-with-ai)를 참고하세요.

## 참고 링크

- [Astryx GitHub](https://github.com/facebook/astryx)
- [Astryx Working with AI](https://astryx.atmeta.com/docs/working-with-ai)
- [Next.js 문서](https://nextjs.org/docs)
