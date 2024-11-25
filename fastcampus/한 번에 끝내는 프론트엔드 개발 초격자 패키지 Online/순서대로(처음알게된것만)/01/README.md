defer 속성이란

- SCRIPT 요소에 defer 속성은, HTML 구조가 준비된 후(문서 분석 이후)에 JavaScript를 해석하겠다는 의미가 있음

- 만약 defer 속성이 없이 script 태그가 body 영역 위에 있으면 js 코드가 해석 시 head 부분까지만 해석해서 body에 적용이 되지 않음