# Node Js

- Chrome V8 Javascript 엔진으로 빌드된 JavaScript 런타임

- NVM (자동으로 버전을 업데이트 관리 해주는 것)

## NVM 사용법

``` bash
$ nvm ls

$ nvm install 12.14.1

$ nvm install 12.21.0

$ nvm uninstall 12.21.0

$ nvm use 12.14.1

$ node --version

$ nvm use 12.21.0

$ nvm help
```

## NPM 개요

- Node Package Manager
- 전 세계의 개발자들이 만든 다양한 기능(패키지, 모듈)들을 관리

``` bash
$ npm init -y
<프로젝트 설정>
$ npm install parcel-bundler -D
<과거 버전이고, 22.11.0LTS 버전에는 설치가 안되서 18.20.5LTS 버전으로 변경 후 작동>
<-D 옵션은 의존성을 모두 포함한다는 의미>
$ npm install lodash
<-D 옵션은 devDependencies에 기본은 dependencies 속성에 들어가 있다.>
$ npm install
<위 명령어로 node_modules 폴더를 자동으로 생성해준다.>
<중요! : 개발할때만 도움을 받는 용도면, -D(--save-dev)로 개발용 의존성 패키지 설치>
<일반적으로 웹 페이지에서도 작동되어야 한다면, -D를 명시하지 않고 일반 의존성 설치>
```

## 빌드 및 실행
```
<package.json 파일내에서>
<scripts 옵션 안에 명령어 추가 "dev": "parcel index.html">

$ npm run dev
<스크립트 옵션 안에 이름을 실행>

<lodash 패키지 사용하기 위해선>
<main.js 파일 내에 import _ from '패키지이름'>

<package.json 파일내에서>
<scripts 옵션 안에 명령어 추가 "build": "parcel build index.html">
<사용자가 보는 용도의 서버를 볼 수 있다.>
$ npm run build
```

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

