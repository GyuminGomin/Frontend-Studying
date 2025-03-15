# NodeJs

## 유의적 버전 (Semantic Versioning, SemVer)
- 버전에 의미를 부여하고 해석

```
Major.Minor.Patch
E.g, 18.20.5

Major : 기존 버전과 호환되지 않는 새로운 버전

Minor : 기존 버전과 호환되는 새로운 기능이 추가된 버전

Patch : 기존 버전과 호환되는 버그 및 오타 등이 수정된 버전

^ (캐럿 기호)
E.g, ^18.20.5

^ : Major 버전 안에서 가장 최신 버전으로 업데이트 가능

만약 package.json 파일에서 ^을 제거하면, $ npm update 명령어로 업그레이드 불가능
```

``` pwsh
$ npm info lodash
-> lodash의 최신 버전 환경 확인 가능

$ npm install lodash@4.17.20
-> 20버전으로 다운그레이드

$ npm update lodash
-> 다시 업데이트
```

## NPM 프로젝트 버전 관리

```
.cache
dist
node_modules
폴더는 package.json 파일을 통해 자동 관리
```

``` pwsh
$ npm run build
$ npm run dev
$ npm install
-> 위 명령어를 통해 자동 버전 관리 가능
```

## NPM 프로젝트(예제)의 패키지 버전 일치시키기
```
npm install axios로 설치를 진행하지만,
설치 버전이 실제 예제와 달라지는 문제가 발생한다.
시간이 지날수록 심각해지므로
package.json, package-lock.json 파일만 있으면
프로젝트 환경을 완벽하게 일치시킬 수 있다.

- package.json
  현재 설치된, 모든 외부 모듈의 버전이 트리 구조로 명시되어 있다.
  즉, 강사가 예제를 완성했을 때와 같은 모듈 버전으로 프로젝트 시작 가능
- package-lock.json
  또 다른 외부 모듈이 들어가 있는 것
```

### axios 패키지 라이브러리 설치
- 설치 후, package.json 에 dependencies 부분 axios 확인
``` pwsh
$ npm i axios
-> 개발자 의존성으로 설치하면 안되기 때문에 그냥 설치
```