let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

const regexp = /fox/gi
console.log(regexp.test(str)) // true

const regexp2 = /HEROPY/gi
console.log(regexp2.test(str)) // false

console.log(str.replace(regexp, 'AAA')); // replace