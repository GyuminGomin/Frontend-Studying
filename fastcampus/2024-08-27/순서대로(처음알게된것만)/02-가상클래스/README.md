# 가상클래스

1. :hover

2. :active
  - 마우스를 클릭하고 있는 동안 선택 (마우스 클릭 유지)

3. :focus
  - 포커스되면 선택
  - 포커스가 될 수 있는 요소가 정해져 있음
    - HTML 대화형 콘텐츠 INPUT, A, BUTTON, LABEL, SELECT 등
    - 그리고 HTML 대화형 콘텐츠가 아니더라도 tabindex 속성을 사용한 요소도 Focus 가능 (tab키를 통해 포커스 이동)

4. :first-child
  - 선택자가 형제 요소 중 첫째라면 선택

5. :last-child
  - 선택자가 형제 요소 중 막내라면 선택

6. :nth-child(n)
  - 선택자가 형제 요소 중 (n)째라면 선택 (짝수 : 2n, 홀수 : 2n+1, n+2-> 2부터 시작)

7. :not(XYZ)
  - 선택자XYZ가 아닌 ABC요소 선택
  - .fruits *:not(span) -> span이 아닌 요소들을 다 가져오는 것