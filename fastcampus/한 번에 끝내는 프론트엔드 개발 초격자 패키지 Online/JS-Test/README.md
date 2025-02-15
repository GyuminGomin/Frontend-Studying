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