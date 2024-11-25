# 스타벅스 예제하면서 새롭게 알게 된 내용

```
루트(제일 상단 폴더)에 favicon.ico가 있으면 자동으로 해석

link rel=icon으로 경로 지정해주면, 사이트 그림 바꿀 수 있음
```

```
position - fixed와 absolute는 width가 최대가 아닌 최소로 잡으려고 한다.(중요)
```

```
loadsh cdn

- 함수 제어 라이브러리
예시 ]
window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll!');
}, 300));

300 -> 0.3초

0.3초 단위로 부하를 줘서 우루루 실행되는 것을 방지해주는 기능
```

```
gsap cdn

- 애니메이션 제어 라이브러리
예시 ]

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간(s), 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    // 배지 나타남
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));
```

```
youtube iframe api

- 유튜브 재생해주는 api
```

```
scrollMagin cdn

- 순차적으로 실행해주는 라이브러리
```

```
html entities
```
