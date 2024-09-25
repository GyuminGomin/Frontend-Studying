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