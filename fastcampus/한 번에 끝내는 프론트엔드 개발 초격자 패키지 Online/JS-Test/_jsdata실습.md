# js 데이터 실습
- 기본적으로 export default로 가져오는 것은 이름을 지정하지 않아도 된다.
- named export로 가져오는 것은 이름이 필요

## 내보내기 가져오기
``` js

/*이름이 필요 없음*/
// export default function getRandom(data) {
//   return Math.floor(Math.random() * 10)
// }

// export default function (data) {
//   return Math.floor(Math.random() * 10)
// }

/*이름이 필요함*/
export function random(data) {
  return Math.floor(Math.random() * 10)
}

// 받아올 때 사용법

/*이름이 필요 없음*/
import ran from './getRandom'
/*이름이 필요함*/
import { random } from './getRandom'

// *******************
// 기본 통로로 나오는 경우 하나만
// Named 통로로 나오는 경우 여러개 선언 가능
// *******************
export function random(data) {
  return Math.floor(Math.random() * 10)
}
export const user = {
  name: 'HEROPY',
  age: 85
}
export default 123
// --------------
export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
export default 123
// Only one default export allowed per module. (에러가 뜸)
```

``` js
import _ from 'lodash' // From `node_modules` !
import chkType from './getType'
//import { random, user as heropy } from './getRandom'
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(chkType([1, 2, 3]))
//console.log(random(), random())
//console.log(heropy)
console.log(R)
```
