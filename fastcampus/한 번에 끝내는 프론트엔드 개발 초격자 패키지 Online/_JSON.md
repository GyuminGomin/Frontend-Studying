# JSON

## Json
``` js
// JSON (JavaScript Object Notation)
// 자바스크립트 객체 표기법
/*
  Json이라는 Format은 정확하게 하나의 문자데이터이지만,
  해석되는 와중에 마치 객체 데이터처럼 사용되는 것처럼 보인다.
*/
import myData from './myData.json'

console.log(myData)

const user = {
  name : 'HEROPY',
  age : 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user) // str로 바꾸는 것
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str) // 객체로 바꾸는 것
console.log('obj', obj)
```