# 🖤 SIMIHAZE BEAUTY Renewal Project

**시미헤이즈 뷰티**의 공식 웹사이트 리뉴얼 프로젝트입니다.  
React 기반의 싱글 페이지 애플리케이션(SPA)으로 구성되었으며, 브랜드 아이덴티티를 강조한 시각적 디자인과 사용자 친화적인 인터페이스를 구현했습니다.

## 🖼️ 배포 링크

> [GO TO PAGE](https://simihaze-renewal.netlify.app/)

---

## 🔧 사용 기술

- **React** + **React Router v6**
- **SCSS** (모듈화 및 반응형 디자인)
- **Swiper.js** (슬라이드 구현)
- **LocalStorage** (장바구니 데이터 유지)
- **JSON 데이터 기반** 상품/리뷰 관리)
- React Icons

---

## 🖼️ 주요 UI 컴포넌트

| 컴포넌트 | 설명 |
|---------|------|
| `Header` | 페이지 최상단 고정 헤더, 스크롤 위치 및 경로에 따라 투명도 변화 적용 |
| `SideMenu` | 햄버거 메뉴 버튼으로 열리는 사이드 메뉴. 장바구니 개수 표시, 카테고리 및 검색 포함 |
| `Footer` | 정책 링크, SNS 아이콘, 사업자 정보 등을 포함한 하단 영역 |
| `Marquee` | 상단 텍스트 슬라이더 (ex. 이벤트, 글로벌 배송 안내 등) |
| `ScrollToTop` | 페이지 이동 시 자동으로 스크롤 최상단으로 이동 처리 |
| `ProductCard` | 개별 상품 카드 |
| `ProductList` | 목록에 따른 `ProductCard` 출력 |

---

## 🏠 메인 페이지 구성 (`/`)

| 구성 요소 | 설명 |
|----------|------|
| `MainVisual` | 비디오 및 이미지 슬라이드 쇼, Swiper 기반 자동 재생 |
| `ThemedStore` | 추천 테마 제품 (isBest=true) 리스트 출력 |
| `Reviews` | 사용자 리뷰 캐러셀 (Swiper + Autoplay) |
| `BestSellers` | BEST 상품만 추려 가로 슬라이드로 노출 |
| `PageLinks` | 주요 페이지로 이동 가능한 비주얼 링크 블록 (About, New In, Face 등) |

---

## 🛍️ 상품 기능

| 페이지 | 기능 요약 |
|--------|-----------|
| `/products/:category` | 카테고리 필터링 및 페이지네이션, 정렬 인터페이스 |
| `/detail/:id` | 상품 상세 정보 (이미지 슬라이드, 수량 조절, 아코디언 설명, 장바구니 기능) |
| `/cart` | 장바구니 목록, 개별/전체 선택 및 삭제, 총액/배송비 자동 계산 |
| `/about`, `/login` | 소개 및 로그인 페이지 UI |

---

## 🧩 데이터 구조

### `products.json`
- 상품 목록 (카테고리, 이름, 이미지, 가격, 설명, 사용법, 전성분 등)

### `reviews.json`
- 리뷰 더미 데이터 (작성자 ID, 내용)

---

## 💾 상태 관리

- `App.js`에서 `products`, `reviews`, `cartItems` 상태 통합 관리
- 장바구니(`cartItems`)는 `localStorage`에 저장하여 새로고침 후에도 유지

---

## 💫 기타 기능

- 상품 카드 및 상세 이미지 hover 시 전환
- 좋아요 하트 토글 UI
- 장바구니 수량 증감 및 삭제
- Swiper를 활용한 다양한 슬라이드 구현
- `requestAnimationFrame`을 활용한 부드러운 스크롤 감지
- 페이지 이동 시 사이드메뉴 자동 닫힘 처리

