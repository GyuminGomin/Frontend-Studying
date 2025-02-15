# 개념

1. 크로스 브라우징

2. 비트맵과 벡터
- 비트맵 : 레스터 이미지
    - JPG(JPEG), PNG, GIF, WEBP(구글이 개발한 JPG,PNG,GIF 모두 대체 가능 -> IE는 지원 불가)
- 벡터 : 점선면의 위치, 색상등 수학적 정보의 형태로 이뤄진 것 Material Image
    - SVG(해상도의 영향에서 자유로움, CSS와 JS로 제어가능, 파일 및 코드 삽입 가능)

3. 특수문자 기호 이름
```
~ (틸드)
` (그레이브, 백틱)
! (익스클러메이션, 느낌표)
@ (앳 사인, 골뱅이)
^ (캐럿)
* (에스터리스크, 별)
- (하이픈, 대시, 마이너스)
_ (언더스코어, 로대시, 밑줄)
" (쿼테이션, 쌍따옴표)
' (어프로스토피, 따옴표)
. (피리어드, 닷, 마침표)
? (퀘스천)
/ (슬래시)
| (버티컬 바)
\ (백슬래시, 역슬래시)
() (퍼렌서시스, 소괄호, 괄호)
{} (브레이스, 중괄호)
[] (브래킷, 대괄호)
<> (앵글 브래킷, 꺽쇠괄호)
```

4. vscode 확장자
```
beautify - 클린 코드 (Ctrl + Alt + L)
autorenametag - 태그 변경
live server - 로컬 서버 실행
 - 참고
 ```
 사용 시 Live server 확장 설정을 통해
 ipconfig로 확인한 내 IP를 설정해줘야 함
 ```

Ctrl + O -> 폴더 열기
Ctrl + B -> 사이드 바 토글
Ctrl + Shift + P -> VSCode 메뉴
Ctrl + P -> 프로젝트 내 파일 찾기
Ctrl + W -> 편집기 닫기
Ctrl + F -> 찾기
Ctrl + Alt + H -> 바꾸기
Alt + 화살표 -> 옮기기
Alt + Shift + 화살표 -> 복사
권장 공백 두개 (아래 탭 사이즈 클릭 후 변경)
Ctrl + \ -> 탭 복사
Ctrl + Alt + ] -> 창 오른쪽으로 옮기기
Ctrl + Alt + [-> 창 왼쪽으로 옮기기
```

5. DocType(DTD)
```
Document Type Defintion
문서의 HTML 버전을 지정

<html lang="en">
에서 lang은 지정할 문서의 언어(ISO 639-1)를 명시하는 HTML 속성
지정가능 목록 : https://ko.wikipedia.org/wiki/ISO_639-1_코드_목록
```

6. tab size
```
파일 설정에 tab size 설정 가능 (현재 2로 지정)
```

7. codepen.io
```
프론트 테스트 사이트
```

8. html, css 초기화 간편 사이트
```
https://www.jsdelivr.com/package/npm/reset-css?tab=files

파일을 min 사이즈를 받아서 html로 카피해서 link로 붙여넣기 해주면 됨
```

9. emmet
```
자동 문법 적용되는것을 emmet이라고 부름
```

# CSS

10. 복합_선택자
```
--일치 선택자(Basic Combinator)--
(구분자가 없음)
span.orange -> span 태그의 orange 클래스
.orangespan -> 불가능

--자식 선택자(Child Combinator)--
ul > .orange (구분자 : >)

--하위(후손) 선택자(Descendant Combinator)--
div .orange (구분자 : 띄어쓰기)

--인접 형제 선택자(Adjacent Sibling Combinator)--
선택자 `다음` 형제 요소 `하나`를 선택
.orange + li (구분자 : +)

--일반 형제 선택자(General Sibling Combinator)--
선택자 `다음` 형제 요소 `모두`를 선택
.orange ~ li (구분자 : ~)
```

11. 속성선택자
``` css
[disabled] {
    /*이와 같이 설정 가능*/
}

[type="password"] {
    /*type이 password인 것*/
}
```

12. 상속되는 CSS 속성들
```
모두 글자/문자 관련 속성들!
(모든 글자/문자 속성은 아님)

font-size : 글자 기울기
font-weight : 글자 두께
font-size : 글자 크기
line-height : 줄 높이
font-family : 폰트(서체)
color : 글자 색상
text-align : 정렬
```

13. 우선순위란
```
같은 요소가 여러 선언의 대상이 된 경우,
어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법

1. 점수가 높은 선언이 우선
2. 점수가 같으면, 가장 마지막에 해석된 선언이 우선함
```

14. 단위
```
px - 픽셀
% - 상대적 백분율
em - 요소의 글꼴 크기 (부모요소 font-size)
rem - 루트 요소(html)의 글꼴 크기
vw - 뷰포트 가로 너비의 백분율
vh - 뷰포트 세로 너비의 백분율
```

15. border 속성 스타일
```
none : 선 없음
solid : 실선(일반선)
dotted : 점선
dashed : 파선(---)
double : 두줄선
groove : 흠이 파여있는 모양
ridge : 솟은모양(groove의 반대)
inset : 요소 전체가 들어간 모양
outset : 요소 전체가 나온 모양
```

16. box-sizing
```
content-box : default
border-box : 요소의 내용 + padding + border로 크기 계산
```

17. overflow
```
요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성

visible : 넘친 내용 그대로 보여줌
hidden : 넘친 내용을 잘라냄
scroll : 넘친 내용을 잘라냄, 스크롤바 생성
auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성
```

18. display
```
요소의 화면 출력(보여짐) 특성

block : 상자(레이아웃) 요소
inline : 글자 요소
inline-block : 글자 + 상자 요소
flex : 플렉스 박스 (1차원 레이아웃)
grid : 그리드 (2차원 레이아웃)
none : 보여짐 특성 없음, 화면에서 사라짐
기타 : table, table-row, table-cell 등...
```

19. font-style
```
normal : 기울기 없음
italic : 이텔릭체
oblique : 기울어진 글자
```

20. position
```
요소의 위치 지정 기준

static : 기준 없음
relative : 요소 자신을 기준
absolute : 위치 상 부모 요소를 기준(부모요소중 position이 있는지 확인하고 없으면 body설정)
fixed : 뷰포트(브라우저)를 기준
sticky : 스크롤 영역 기준
```

21. 요소의 display가 변경됨
```
position 속성의 값으로 absolute, fixed가 지정된 요소는,
display 속성이 block으로 변경됨
```

22. flex
```
justify-content : 주축을 기준으로 정렬

align-content : 교차 축을 기준으로 여러줄 정렬
    stretch : flex items를 시작점으로 정렬(늘려서)
    flex-start : flex items를 시작점으로 정렬
    flex-end : flex items를 끝점으로 정렬
    center : flex items를 가운데 정렬
    space-between : flex items 사이를 균등하게 정렬
    space-around : flex items의 외부 여백을 균등하게 정렬

align-items : 교차 축의 한 줄 정렬 방법
    stretch : flex items를 교차 축으로 늘림(늘려서)
    flex-start
    flex-end
    center
    baseline : flex items를 각 줄의 문자 기준선에 정렬
```

23. 전환 속성
- easing functions 검색 : https://easings.net/
- easing functions mdn 검색 : https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function
- tweenmax easing : https://gsap.com/docs/v3/Eases/
```
transition-property
- 전환 효과를 사용할 속성 이름을 지정
    all : 모든 속성에 적용 (default)
    속성이름 : 전환 효과를 사용할 속성 이름 명시 (ex. transition-property: width)

transition-duration
- 전환 효과의 지속시간을 지정

                div {
                width: 100px;
                height: 100px;
                background-color: orange;
                transition: 
                    width .5s, 
                    background-color 2s;
                }

                div:active {
                width: 300px;
                background-color: royalblue;
                }

transition-timing-function
- 전환 효과의 타이밍(Easing) 함수를 지정
    ease : 느리게 - 빠르게 - 느리게 = cubic-bezier(0.25, 0.1, 0.25, 1)
    linear : 일정하게 = cubic-bezier(0, 0, 1, 1)
    ease-in : 느리게-빠르게 = cubic-bezier(0.42, 0, 1, 1)
    ease-out : 빠르게-느리게 = cubic-bezier(0, 0, 0.58, 1)
    ease-in-out : 느리게-빠르게-느리게 : cubic-bezier(0.42, 0, 0.58, 1)
    cubic-bezier(n, n, n, n) : 자신만의 값을 정의(0~1)
    steps(n) : n번 분할된 애니메이션

transition-delay
전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정

                div {
                width: 100px;
                height: 100px;
                background-color: orange;
                transition: 
                    width .5s .5s, 
                    background-color 2s;
                }


                div:active {
                width: 300px;
                background-color: royalblue;
                }
```

24. 이미지 속성
```
기본적으로 auto를 사용하면 가장 작은 크기에 맞춰 설정이 되는데(따라서 width나 height가 필요)
이미지에 auto를 설정하는 순간 이미 이미지의 크기를 알고있다는 과정하에 중간정렬이 자동으로 된다.
```

# JS

24. 메소드 체이닝(Method Chaining)
```
1. split
2. reverse
3. join

const a = 'Hello';
const b = a.split('').reverse().join(''); // 역방향으로 전환
```

# HTML

25. BEM (Block Element Modifier)
```
요소__일부분 : Underscore(Lodash) 기호로 요소의 일부분을 표시
요소--상태 : Hyphen(Dash) 기호로 요소의 상태를 표시
```

# MarkDown
<a href="./_Markdown.md">MarkDown에 대해서</a>

# Git
<a href="./_Git.md">Git에 대해서</a>

# NodeJs
<a href="./_NodeJS.md">NodeJs에 대해서</a>

