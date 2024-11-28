# JavaScript Essentials

## Node Js

- Chrome V8 Javascript 엔진으로 빌드된 JavaScript 런타임

- NVM (자동으로 버전을 업데이트 관리 해주는 것)

### NVM 사용법

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

### NPM 개요

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

### 빌드 및 실행
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