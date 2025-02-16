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