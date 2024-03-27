# Project 
: 개인 프로젝트

---

### ✅ URL : https://hyether.vercel.app/
### ✅ 설명 : 무료 날씨 API를 가져와 현재위치, 주요 나라별 날씨 , 검색을 이용한 날씨 기능 구현
---


### 코드,변수 컨벤션

- 코드는 최대한 함수형으로 작성
- 변수명은 최대한 알아보기 쉽게 작성 (직관성)


### 사용된 기술
- react, bootstrap, 무료 날씨 API

### 배포
- vercel

### Problem
- 위치 기반 lat과 lon기반으로 API를 호출해야하는데, API 딜레이로 에러

### Solution
- useEffect를 통해 페이지가 새로고침될때마다 사용자의 lat과 lon을 가져오도록 수정
