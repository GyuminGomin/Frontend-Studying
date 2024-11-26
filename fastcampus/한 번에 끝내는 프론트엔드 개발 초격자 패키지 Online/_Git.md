# Git (수업에서 모르는 내용만 정리)

## 개행문자(Newline) 설정
```
MAC OS
git config --global core.autocrlf input
Windows
git config --global core.autocrlf true
```

## 사용자 정보
```
커밋(버전 생성)을 위한 정보 등록
git config --global user.name ''
git config --global user.email ''
```

## 구성 확인
```
git config --global --list
```

## 하면서 배운 것인데 SUBMODULE이란게 있다.
```
서브 모듈 추가 (즉, 레포안에 새로운 레포를 파는 것)

git submodule add <원격 저장소 url> <로컬 디렉토리>
```

## Git Branch
```
git branch > 목록 확인
git branch -a > 원격, 로컬 브런치 전부 확인
git branch <이름> > 이름 브런치 생성
git checkout <이름> > 이름 브런치로 이동
```

## Git Reset
```
git log > 커밋 기록 확인

git reset --hard HEAD~1 > 한번 헤드 위치 뒤로 가기 (hard옵션은 완벽하게 되돌린다는 의미)

git reset --hard ORIG_HEAD > ORIG_HEAD에 TMP메모리로 저장되어 있는데 (한번만 가능)

git reset --hard HEAD~2 > 두번 헤드 위치 뒤로 가기

( reset은 만들어 놓은게 없어질 수 있으므로 함부로 사용하면 안됨 )
```

## Git Branch 2
```
다른 브런치 가져오는 것
git checkout -t origin/purple (원격저장소에 있는 브런치를 가져올 수 있는 옵션)

git branch -d <이름> (삭제)

git checkout -b yellow (새로 생성할 때 브런치를 생성과 동시에 이동하는 옵션)
```

## Git Conflict
```
1. git pull origin master

화면에
<<<<<<< HEAD
현재 변경사항
=========
원격저장소에서 가져온 내용
>>>>>>> 커밋내역 ID (수신변경사항)

이것을 수정해서 원하는대로 수정하고 업로드 하면 정상적으로 수행 가능
```