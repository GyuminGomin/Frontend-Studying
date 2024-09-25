# 강제상속
- 상속되지 않는 스타일들을 강제로 상속시키는 것

- inherit을 사용하면 됨
``` css
.child {
  width: 100px;
  /* height: 200px; */
  height: inherit; /* 부모 요소를 상속 받는 것 */
  /* background-color: orange; */
  background-color: inherit;
  position: fixed;
  top: 100px;
  right: 100px;
}
```