# REGEXP (정규표현식)

-> https://heropy.blog/2018/10/28/regexp

-> 정규표현식 테스트 사이트
  - https://regexr.com/
## 생성 방식
- 생성자 함수 방식 생성
``` js
const regexp1 = new RegExp('표현', '옵션');
const regexp2 = new RegExp('[a-z]', 'gi');
// g : 일치하는 모든 내용을 검색하겠다, i : 대/소문자를 구별하지 않겠다.
```
- 리터럴 방식
``` js
/표현/옵션
/[a-z]/gi
// g : 일치하는 모든 내용을 검색하겠다, i : 대/소문자를 구별하지 않겠다.
```

- 예시
``` js
const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

//const regexp = new RegExp('the', 'gi');
const regexp = /the/gi
console.log(str.match(regexp))
```

## 정규표현식 함수
- exec : 정규식.exec(문자열) : 일치하는 하나의 정보(Array) 반환
- test : 정규식.test(문자열) : 일치 여부(Boolean) 반환
- match : 문자열.match(정규식) : 일치하는 문자열의 배열(Array) 반환
- search : 문자열.search(정규식) : 일치하는 문자열의 인덱스(Number) 반환
- replace : 문자열.replace(정규식, 대체문자) : 일치하는 문자열을 대체하고 대체된 문자열(string) 반환
- split : 문자열.split(정규식) : 일치하는 문자열을 분할하여 배열(Array)로 반환
- toString : 생성자_정규식.toString() : 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)로 반환

## 플래그(옵션)
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)
\w | 63개 문자(Word, 대소영문52개 + 숫자10개 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)