# Astryx 활용 가이드

이 문서는 `try-astryx` 프로젝트에서 Astryx를 검토·테스트하면서 정리한 내용입니다.  
디자이너·개발자 모두에게 공유할 수 있도록, **역할 / 활용법 / 한계**를 중심으로 적어 두었습니다.

> 참고 버전: Astryx `v0.1.4` (npm `@astryxdesign/core`)  
> 공식: [GitHub](https://github.com/facebook/astryx) · [Working with AI](https://astryx.atmeta.com/docs/working-with-ai) · [Playground](https://astryx.atmeta.com/)

---

## 1. Astryx가 무엇인가

**Astryx는 코드(React) 쪽 디자인 시스템**입니다.

- Figma 플러그인이나 “Figma 전용 도구”가 아닙니다.
- React 앱에서 쓰는 **UI 부품 세트**(Button, Layout, AppShell, Table 등) + **테마/토큰** + **AI/CLI용 규칙**입니다.
- Meta가 공개한 AI-ready 디자인 시스템으로, Cursor 같은 AI가 컴포넌트를 추측하지 않고 CLI/문서로 맞게 짜도록 설계되어 있습니다.

비유하면:

| 도구 | 역할 |
| --- | --- |
| **Figma** | 무엇을 만들지 보여주는 스케치/설계도 |
| **Astryx** | 실제로 조립하는 레고 세트 (React 컴포넌트) |
| **Cursor + CLI/MCP** | 스케치를 Astryx 부품으로 번역하는 보조 |

**핵심:** Astryx와 무관한 Figma 시안을 주고도, Astryx 컴포넌트로 구현하는 흐름이 정상적인 사용법입니다.  
Astryx 전용 Figma 킷으로 시안을 만들면 번역이 **더 쉬워질 수는** 있지만, **필수는 아닙니다.**

---

## 2. 한 줄로 보는 역할 분담

| 역할 | 하는 일 |
| --- | --- |
| **디자이너** | 시안 작성. 가능하면 Astryx 토큰/구조에 맞춤. (선택) Community Figma 라이브러리를 Team Library로 써서 조립. 브랜드 차이는 **Variables / 테마**로 조정 |
| **개발자** | `@astryxdesign/core` + 테마로 구현. CLI/`AGENTS.md`로 AI와 함께 작업. Figma를 AI가 못 읽어도 **직접 컴포넌트로 개발 가능** |
| **AI (Cursor)** | 시안 링크 또는 “Astryx로 ○○ 화면 만들어” 요청을 받아, CLI·규칙에 맞춰 코드 작성 |

시안이 없어도 개발은 가능합니다. 시안이 있으면 AI가 맞춰 주기 쉽습니다.

---

## 3. 디자이너: 이렇게 활용하면 됩니다

### 3-1. 기본 원칙

1. **페이지를 복/붙해서 새 프로젝트로 가져가지 않습니다.**  
   Figma의 Astryx 파일은 “시안 파일”이 아니라 **라이브러리(부품 창고 + 설명서)** 에 가깝습니다.
2. **부품은 공통, 분위기만 프로젝트별**로 바꿉니다.  
   Button/Badge를 프로젝트마다 다시 그리는 것보다, **Variables(색·간격·타이포)** 또는 모드로 브랜드를 맞춥니다.
3. **최종 UI의 진실은 코드(Astryx)** 쪽에 둡니다.  
   Figma는 방향·구조·카피 합의용, 구현은 React 컴포넌트가 기준입니다.

### 3-2. 추천 워크플로

```text
Community / 팀 라이브러리 (필요 시 Duplicate → Publish)
        ↓
새 시안 파일에서 라이브러리 Enable
        ↓
Assets에서 컴포넌트 인스턴스 삽입 + Auto Layout 유지
        ↓
Variables로 브랜드 색·간격 조정
        ↓
구현할 Frame 링크를 개발/Cursor에 전달
```

#### (선택) 비공식 Community 라이브러리

- [astryx_design_system (Community)](https://www.figma.com/community/file/1655939158795671259/astryx-design-system)  
  — **Unofficial**. 공식 Figma UI Kit은 아직 명확하지 않습니다.
- **테스트·시안 속도**용으로는 충분합니다.
- npm Astryx(`0.1.4`)와 100% 동기화는 보장되지 않습니다.  
  → “디자인 소스 오브 트루스”로 믿기보다 **시안용 키트**로 보세요.

사용 시:

1. Community에서 **Duplicate** (내 초안으로 복사)
2. (팀 작업이면) Team Library로 **Publish** 후, 새 시안 파일에서 **Enable**
3. **Assets**에서 Button, Badge, AppShell 등만 꺼내 조립  
   (Foundations / Templates / 컴포넌트 **페이지 전체를 복/붙이지 않음**)

파일 안의 Foundations · Templates · AppShell 등은:

| 구분 | 의미 |
| --- | --- |
| **Foundations** | 색·타이포·간격·shape 등 기초 규칙 (토큰) |
| **Templates** | 테이블·대시보드·설정 등 **완성 페이지 레시피** |
| **컴포넌트 페이지** | 각 부품의 props / 예시 / Do·Don’t 문서 |

### 3-3. 시안에서 맞추면 좋은 기준

픽셀 자유 디자인을 줄이고 Astryx 스케일에 맞추면, 개발 갭이 작아집니다.

- **Spacing:** `4 / 8 / 12 / 16 / 20 / 24…` (`--spacing-*`)
- **색:** hex 하드코딩보다 semantic 이름 (`accent`, `text-primary`, `background-surface` 등)
- **레이아웃:** 전체 페이지 → AppShell, 사이드 → SideNav, 밀집 데이터 → Table/List (**리스트 아이템을 Card로 감싸지 않기**)
- **Badge:** 짧은 상태/분류 태그용. 날짜·건수·장식용으로 남발하지 않기
- Figma Variables에 `--color-*`, `--spacing-*`처럼 **코드와 같은 이름**을 두면 핸드오프가 수월합니다.

토큰 참고: [astryx docs / tokens](https://astryx.atmeta.com/docs/tokens)

### 3-4. Figma에서 프로젝트마다 분위기 바꾸기

| 방식 | 설명 | 추천 |
| --- | --- | --- |
| **Variables / Modes** | 같은 컴포넌트, 색·간격만 Brand A / Brand B | ★ 가장 권장 |
| **라이브러리 공통 + 시안만 분리** | Astryx 공유, 프로젝트 파일에서 토큰만 오버라이드 | 권장 |
| **프로젝트용 라이브러리 포크** | 브랜드가 크게 다르면 복제본만 수정·Publish | 필요 시 |

### 3-5. Figma AI 활용

- **Figma Make / 캔버스 AI:** 빠른 프로토타입·레이아웃 생성에는 유용합니다.
- 다만 Make가 만드는 코드/레이어는 **기본이 일반 React/HTML**이지, Astryx 컴포넌트가 아닙니다.
- AI로 초안을 만든 뒤, **최종 시안은 킷/토큰 기준으로 정리**하는 편이 Cursor 번역에 유리합니다.

프로덕션 UI는 **Cursor + Astryx**로 가는 쪽이 맞습니다.

### 3-6. Cursor ↔ Figma (MCP)

개발/에이전트가 시안을 정확히 읽으려면 Figma MCP가 있으면 좋습니다.

- Cursor: `/add-plugin figma` 또는 MCP `https://mcp.figma.com/mcp`
- 구현할 **Frame만** 선택 → 링크 복사 → Cursor에 전달
- 로그인 = “내 권한으로 요청한 파일을 읽을 수 있음”이지, 계정 전체를 상시 훑는 것이 아님

Community 파일은 MCP에서 **페이지 목록이 Cover만** 보이는 경우가 있습니다.  
그때는 보고 싶은 페이지의 `node-id` URL을 함께내거나, Duplicate한 파일에서 페이지별로 공유하면 됩니다.

---

## 4. 개발자: 이렇게 활용하면 됩니다

### 4-1. 기본 원칙

1. **진실의 원천은 `@astryxdesign/core`** 입니다. Figma를 그대로 픽셀 복제하지 않습니다.
2. UI를 짜기 전 **컴포넌트를 추측하지 말고** CLI로 확인합니다.
3. AI가 Figma를 못 읽어도, **개발자가 컴포넌트를 import해서 직접 개발하면 됩니다.**

### 4-2. 설치·세팅 (이 레포 기준)

스택 예: **Vite + React + JavaScript** + Yarn (`node-modules`)

```bash
yarn add @astryxdesign/core @astryxdesign/theme-neutral
yarn add -D @astryxdesign/cli
```

앱 진입점에서 CSS (순서 중요):

```css
@import '@astryxdesign/core/reset.css';
@import '@astryxdesign/core/astryx.css';
```

테마는 Provider로 앱을 한 번만 감쌉니다. (이 프로젝트: `src/themes.js` + `src/provider.jsx`)

TypeScript는 **필수가 아닙니다.** React + JS로 충분하고, TS는 자동완성·오타 방지·AI 정확도에 유리한 정도입니다.

### 4-3. AI용 규칙 (`AGENTS.md`)

```bash
yarn astryx init --features agents --agent cursor
```

- `AGENTS.md`는 **사람용 매뉴얼이라기보다 AI가 읽는 규칙서**입니다.
- “Astryx Basic rule”을 세팅해 둔 것이고, 프로젝트 규칙은 그 밖에 추가하면 됩니다.
- `<!-- ASTRYX:START -->` ~ `END` 구간은 Astryx가 관리합니다. `init`을 다시 돌리면 **덮어씌워질 수 있음**.

### 4-4. UI 작성 워크플로 (추측 금지)

```bash
yarn astryx build "로그인 화면"     # 가까운 page/block/component 키트
yarn astryx template <name>         # 레이아웃 참고 / 스캐폴드
yarn astryx component Button        # props·예시
yarn astryx search "sidebar"        # 검색
yarn astryx docs tokens             # 토큰 문서
```

자주 쓰는 규칙 (요약):

- `<div>`로 레이아웃 때우지 않기 → Layout / AppShell / SideNav 사용
- 커스텀 스타일: 컴포넌트 props → 그다음 `var(--color-*|--spacing-*|--radius-*)`  
  raw hex/px, Tailwind utility로 Astryx를 우회하지 않기
- 브랜드/악센트는 테마로. `:root`에서 `--color-*`를 임의 덮어쓰지 않기

### 4-5. 테마 (프로젝트 한 개 기준)

일반 프로젝트는 **테마 1개**를 두고 전역에 연결합니다.

```js
// 예: defineTheme로 neutral 베이스 + 브랜드만 오버라이드
import { defineTheme } from '@astryxdesign/core/theme'
import { neutralTheme } from '@astryxdesign/theme-neutral'

export const appTheme = defineTheme({
  name: 'try-astryx',
  extends: neutralTheme,
  color: { accent: '#E85D4C', /* ... */ },
  // radius, typography, components.button 등
})
```

- 공식 테마 패키지: `neutral`, `matcha`, `butter`, `stone`, `y2k`, `chocolate`, `gothic` 등
- **프로젝트 성격에 맞게 보여주려면** 공식 테마 교체보다 `defineTheme` 커스텀이 맞습니다.
- 브랜드를 바꿀 때: **`themes.js`만 수정** → 화면 컴포넌트 코드는 그대로

Figma에서 토큰을 바꿨을 때:

| 변경 수준 | 코드 반영 |
| --- | --- |
| 색·간격·타이포 등 **토큰/테마** | `defineTheme` / `astryx theme`로 맞추면 **기본 컴포넌트가 일괄** 따라감 |
| Badge 구조 자체를 바꾸는 등 **부품 구조** | 자동 일괄 동기화는 안 됨. Code Connect / 수동 / `swizzle` 등으로 개별 대응 |

실무에서는 “프로젝트 분위기”를 **대부분 토큰·테마로 처리**하고, 컴포넌트 구조는 웬만하면 건드리지 않는 것이 좋습니다.

### 4-6. Cursor에 넘길 때 예시 프롬프트

```text
이 Figma 프레임을 참고해서 구현해줘.
시안은 참고용이고, 실제 코드는 @astryxdesign/core + yarn astryx component 기준으로 작성해.
div 없이 Astryx 레이아웃 컴포넌트만 쓰고, 색·간격은 토큰만 사용해.
```

(선택) Astryx MCP도 함께: `https://astryx.atmeta.com/mcp`

---

## 5. 권장 엔드투엔드 흐름

```text
[디자이너]
  시안 (가능하면 Astryx 토큰/킷에 맞춤)
        ↓ Frame 링크
[개발자 / Cursor]
  Figma MCP로 구조 읽기
        ↓
  yarn astryx build / template / component
        ↓
  @astryxdesign/core 로 구현
        ↓
  theme(defineTheme)으로 브랜드 일괄 적용
```

테스트용 최소 루프:

1. 작은 화면 1개만 Figma로 시안 (또는 시안 없이 `astryx build`만)
2. Cursor로 구현
3. 어긋나면 **시안은 참고, 코드 Astryx를 우선**으로 보정

---

## 6. 한계와 주의점

아래는 “안 된다”기보다 **지금 시점(0.1.x)에서 기대치를 맞춰야 하는 부분**입니다.

### 디자인 쪽

| 한계 | 설명 |
| --- | --- |
| **공식 Figma UI Kit 부재** | Community 비공식 키트만 현실적. 버전·props 불일치 가능 |
| **Figma ↔ 코드 자동 완전 동기화 없음** | 토큰 이름을 맞춰 “유사하게 관리”하는 수준. 원클릭 양방향 동기화는 기대 어려움 |
| **구조 커스텀은 비용이 큼** | 테마로 안 되는 디자인(완전히 다른 Badge 등)은 코드에서 따로 맞춰야 함 |
| **Figma AI ≠ Astryx** | Make/AI 시안이 곧바로 Astryx 컴포넌트 인스턴스는 아님 |
| **Community + MCP** | 페이지 목록/권한이 기대와 다를 수 있음. Duplicate·페이지 URL이 필요할 수 있음 |

### 개발 쪽

| 한계 | 설명 |
| --- | --- |
| **초기에 러닝 커브** | CLI/`AGENTS.md` 규칙을 지키지 않으면 AI가 `div`·임의 스타일로 벗어남 |
| **디자인 자유도 vs 시스템** | 독특한 마케팅 랜딩·완전 커스텀 UI는 Astryx만으로 100%가 어려울 수 있음 (근사치 + 일부 커스텀) |
| **버전 초기(0.1.x)** | API·문서·키트가 빠르게 바뀔 수 있음. `upgrade --apply` 염두 |
| **StyleX/Tailwind로 “우회”하지 말 것** | prebuilt CSS + 토큰/테마가 권장 경로. AGENTS.md도 StyleX utility 남용을 막음 |
| **Yarn PnP** | CLI·에디터 경로 이슈가 날 수 있어, 이 레포처럼 `nodeLinker: node-modules`가 안전 |

### 협업·프로세스

| 한계 | 설명 |
| --- | --- |
| **시안 품질이 곧 구현 품질** | Auto Layout·명확한 계층·변수 사용이 없으면 AI 번역이 흔들림 |
| **“시안만 AI에게 맡긴다”는 오해** | 코드에 Astryx가 있으면 시안 없이도 UI 가능. 시안은 가속 장치 |
| **디자이너·개발자 언어를 토큰으로 맞출 것** | hex를 서로 다르게 쓰면 테마 이점이 사라짐 |

---

## 7. 이 프로젝트(`try-astryx`)에서 확인한 것

- Vite + React(JS) + Yarn으로 Astryx 설치·CSS·Theme Provider·`AGENTS.md` 연결
- 공식 테마 전환 vs `defineTheme` **프로젝트 커스텀** → 단일 `appTheme`로 정리
- Community Figma(Unofficial)로 Foundations / Templates / 컴포넌트 문서 구조 파악
- Figma MCP로 시안·라이브러리 페이지를 읽고, 코드와 **같은 토큰 언어**로 맞춰 가는 흐름 검증

개발 서버:

```bash
yarn
yarn dev
```

---

## 8. 빠른 체크리스트

### 디자이너

- [ ] 시안을 Astryx spacing·semantic color에 맞춤 (가능하면)
- [ ] (선택) Community 킷 Duplicate → Library Publish → Assets로만 조립
- [ ] 브랜드 차이는 Variables / Modes로
- [ ] 구현 대상 Frame 링크만 공유 (불필요한 페이지 전체 복붙 X)

### 개발자

- [ ] `reset.css` + `astryx.css` import
- [ ] Theme Provider + (프로젝트) `defineTheme` 1개
- [ ] `yarn astryx init --features agents --agent cursor`
- [ ] UI 전: `build` → `template` → `component`
- [ ] Figma와 어긋나면 **코드 Astryx를 우선**

---

## 9. 참고 링크

- [Astryx GitHub](https://github.com/facebook/astryx)
- [Working with AI](https://astryx.atmeta.com/docs/working-with-ai)
- [How Astryx works](https://astryx.atmeta.com/blog/how-astryx-works)
- [Tokens](https://astryx.atmeta.com/docs/tokens)
- [Playground](https://astryx.atmeta.com/)
- [비공식 Figma 라이브러리](https://www.figma.com/community/file/1655939158795671259/astryx-design-system)
- [Cursor ↔ Figma MCP](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server)

---

*이 문서는 도입 검토·테스트 과정에서 나눈 논의를 바탕으로 작성했으며, Astryx 버전 업데이트에 따라 세부 CLI/규칙은 달라질 수 있습니다. 프로젝트 내 AI 규칙은 `AGENTS.md`를 우선하세요.*
