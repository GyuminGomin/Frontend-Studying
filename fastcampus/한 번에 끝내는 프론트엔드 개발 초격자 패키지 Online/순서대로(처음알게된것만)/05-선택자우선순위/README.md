# 선택자 우선순위

``` html
<div 
    id="color_yellow"
    class="color_green"
    style="color: orange"> <!-- 인라인 선언 = 1000점 -->
    Hello World!
  </div>
```

``` css
div {color: red !important;} /* !important = 9999999999점*/

#color_yellow {color: yellow;} /*ID 선택자 = 100점*/

.color_green {color: green;} /* Class 선택자 = 10점*/

div {color: blue;} /* 태그 선택자 = 1점*/

* {color: darkblue;} /* 전체 선택자 = 0점 */

body {color: violet;} /* 상속 x*/
```