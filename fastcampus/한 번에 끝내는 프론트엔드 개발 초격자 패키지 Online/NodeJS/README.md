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
$ npm run demo
-> 위 명령어를 통해 자동 버전 관리 가능
```
