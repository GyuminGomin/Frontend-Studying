1. npm i -g vue@cli (cli는 확장해서 사용하기엔 불편하다.)

2. vue create 생성폴더 이름

3. npm run serve (서버 시작)

4. vetur라는 확장어플리케이션설치 (in vscode)

설치해야할 라이브러리들
```
$ npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc
$ npm i -D file-loader
$ npm i -D eslint eslint-plugin-vue babel-eslint
$ npm i -D shortid
```

# VUE

## 컴포넌트 인스턴스 속성들
- 라이프사이클 훅
- 라이프사이클 다이어그램
- v3.vuejs.org/guide

## 참고
```
v-if 와 v-show

v-if는 렌더링을 하지 않고(false)
v-show는 렌더링을 하므로

자주 변경이 될때는 v-show 사용
자주 변경되지 않을 때는 v-if 사용
```