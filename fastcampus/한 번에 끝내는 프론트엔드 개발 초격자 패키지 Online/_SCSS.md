# Sass (SCSS)
Parcel bulnder 가 자동으로 scss를 css로 컴파일

- sassmeister.com 사이트 (sass -> css)

## 예시
``` scss
// 변수(Variable)
$color: royalblue;

// 중첩(Nesting)
.container {
  h1 {
    color: $color;
  }
}

// & - 상위 선택자 참조
.btn {
  position: absoulte;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}

// 중첩된 속성
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    top: 10px;
    bottom: 40px;
    left: 20px;
    right: 30px;
  };
}

// 1. 산술연산중 주요한 부분은 () 안에 넣기 (javascript와 게산은 같지만)
// 이유는 font: 같은 경우 10px / 10px serif 같이 단축속성에 사용하기 때문
// 2.단위도 같아야 한다. % 와 px을 계산할 수 없음

// @mixins (재활용)
// -> 함수처럼 매개변수 사용 가능
/*
@mixin box($size: 80px, $color: tomato) {
  widht: $size;
  background-color: $color;
}
-> default 80px, tomato
*/
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  @include center;
  .item {
    @include center;
  }
}
.bo {
  @include center;
}

// 반복문 (문자열 보간 사용)
@for $i from 1 through 10 {
  .box:nth-child(#{$i}) {
    width: 100px * $i;
  }
}

// 함수
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@function ratio($size, $ratio) {
  @return $size * $ratio
}
.box {
  $width: 100px;
  width: $width;
  height: ratio($width, 1/2);
  @include center;
}

// 색상내장함수
$color: royalblue;

mix($color, red); // 2개 색상을 섞음
lighten($color, 10%); // 10%만큼 밝아짐
darken($color, 10%); // 10%만큼 어두움
saturate($color, 40%); // 
desaturate($color, 40%); // 채도
grayscale($color); // gray화
invert($color); // 반전
rgba($color, .5); // 투명도
```



