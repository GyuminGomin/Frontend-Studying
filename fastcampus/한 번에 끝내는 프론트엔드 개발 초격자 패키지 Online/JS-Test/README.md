# 초기 셋팅
```
$ npm init -y

- 개발용으로만 사용
$ npm install parcel-bundler --save-dev
- $ npm install parcel-bundler -D
- $ npm i parcel-bundler -D
```

``` json
- package.json

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

->
- 로컬서버로 개발 서버를 열지 않고 index.html로 개발 서버를 열 것이다.
"scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```

```
- 서버 오픈 (dev로 지정한 서버 오픈)

$ npm run dev
```

# Javascript Essential
``` javascript
// 외부로 내보내기
export default function getType() {}

////////////////////////////////
// 변수 유효범위(Variable Scope)
// let, const (블록레벨의 유효성을 가진다.)
// var (함수레벨의 유효성을 가짐)
function scope() {
  console.log(a);
  if (true) {
    var a = 123;
  }
}
scope();

////////////////////////////////
// 형 변환(Type conversion)

const a = 1
const b = '1'

console.log(a === b)
// a == b (동등 연산자 -> 타입이 달라도 동등하면 true)
// a === b (일치 연산자 -> 타입이 다르면 false) -> 권장

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}

console.log(1 + undefined) // -> NaN

////////////////////////////////
// 기명함수
function sum(x, y) {
  return x + y
}
// 익명함수
const sum1 = function () {}

// arguments
function sum() {
  console.log(arguments)
  return arguments[0] + arguments[1]
}
const a = sum(1, 3)
const b = sum(4, 12)

// 화살표 함수
// () => {} vs function () {}
const double = function (x) {
  return x * 2
}
const doubleArrow = x => x * 2
const doubleArrow2 = (x, y) => x * 2
const doubleArrow3 = x => ({
  name: 'Heropy'
}) // 객체는 괄호 포함 필수
console.log('double', double(7))
console.log('doubleArrow', doubleArrow(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
const a = 7
function double() {
  console.log(a * 2)
}
double();
// 즉시실행함수 순서와 double() 순서를 javascript가 파악하질 못해서 ; 필수
(function () {
  console.log(a * 2)
})();
(function () {
  console.log(a * 2)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
const a = 7
// double() -> 에러
double2()
const double = function() {
  console.log(a * 2)
}
function double2() {
  console.log(a * 2)
} // 호이스팅 발생
double()

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// 익명함수, 화살표함수 상관 없음 ES5 -> 익명, ES6 -> 화살표
const timer = setTimeout(() => {
  console.log('!!!');
}, 3000);
const timer1 = setInterval(() => {
  console.log('!!!');
}, 3000);
const h1El = document.querySelector('h1');
h1El.addEventListener('click',() => {
  clearTimeout(timer);
  clearInterval(timer1);
});

// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)
function timeout(callback) {
  setTimeout(() => {
    console.log('EEE!!');
    callback();
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})
```

# Javascript Class
``` javascript
/*
// 멤버
const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
    // return `${heropy.firstName} ${heropy.lastName}`
  }
}
console.log(heropy.getFullName());

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
    // return `${heropy.firstName} ${heropy.lastName}`
  }
}
console.log(amy.getFullName());

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
    // return `${heropy.firstName} ${heropy.lastName}`
  }
}
console.log(neo.getFullName());
*/
// 프로토타입 개념 (프로토타입 참조 언어 -> javascript class)
function User(first, last) { // 생성자 함수 구분을 위해 Pascal Case로 작성
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${heropy.firstName} ${heropy.lastName}`
}
// 생성자 함수
const heropy = new User('Heropy', 'Park'); // heropy, amy, neo : 인스턴스
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');
console.log(heropy.getFullName());
console.log(amy);
console.log(neo);
// const heropy = {} // <- '리터럴 방식'이라 부름 [] 또한

// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
/*
const heropy = {
  name : 'Heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}
amy.normal()
amy.arrow()
*/
/*
function User(name) {
  this.name = name;
}
User.prototype.normal = function() {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}
const heropy = new User('Heropy')
heropy.normal()
heropy.arrow()
*/
// 중요 익명함수를 쓸 경우, 호출위치에 따르므로, setTimeout이라는 함수 자체 내부 로직에서 찾고
// 화살표함수를 쓸 경우, 선언된 함수 범위 -> timeout이 선언되었으므로, name을 잘 찾음
var timer = {
  name: 'Heropy!!',
  timeout: function() {
    setTimeout(function () {
      console.log(this.name)
    }, 2000)
  }
}
timer = {
  name: 'Heropy!!',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()

// ES6 Classes
// 프로토타입 방식 생성자 함수 참고, 멤버 참고
user {
  name: function() {}
  // -> name() {}
}
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// 클래스 상속
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar)
console.log(daughtersCar)
```

# js method
``` js
// mdn 검색하면 prototype 메소드가 다 나옴

/*
- 인터넷에 아래로 검색
String mdn
Math mdn
Array mdn
  - forEach
  - map
  - filter
  - find
  - findIndex
  - includes
  - push (원본 수정됨)
  - unshift (원본 수정됨)
  - reverse (원본 수정됨)
  - splice (원본 수정됨)
*/

/*
Object mdn
*/

// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmali.com',
  address: 'USA'
}
const { name: sexual, age, email, address = 'Korea' } = user;
// E.g, user.address
console.log(`사용자의 이름은 ${sexual}입니다.`);
console.log(`${sexual}의 나이는 ${age}세입니다.`);
console.log(`${sexual}의 이메일 주손느 ${email}입니다.`);
console.log(address);
const fruits = ['Apple', 'Banana', 'Cherry']
const [, b, c, d] = fruits;
console.log(a, b, c, d);

// 전개 연산자 (Spread)
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits);
console.log(...fruits);
// console.log('Apple', 'Banana', 'Cherry')
// ...c : rest parameter
const toObject = (a, b, ...c) => ({a, b, c}); // a: a -> a
console.log(toObject(...fruits));

// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function
// 참조형 데이터는 불변성이 없고, 원시 데이터는 불변성이 존재해서 따로 메모리 개념까지 생각할 필요 없다.
let a = {k : 1}
let b = {k : 1}
console.log(a, b, a===b)
a.k = 7
b = a
console.log(a, b, a===b)
a.k = 2
console.log(a, b, a===b)
let c = b
console.log(a, b, c, a===c)
a.k = 9
console.log(a, b, c, a===c)


```

``` bash
> 깊은 복사를 테스트 하기 위해
$ npm i lodash
```

``` js
// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
import _ from 'lodash'
const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
// const copyUser = Object.assign({}, user); // 얕은 복사
// const copyUser = {...user} // 얕은 복사
const copyUser = _.cloneDeep(user) // 깊은 복사
console.log(copyUser === user)
user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)
console.log('-----')
console.log('-----')
user.emails.push('neo@zillinks.com') // user 안에 있는 새로운 참조형 데이터인 배열
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
```