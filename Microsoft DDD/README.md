# Microsoft DDD

## 첫번째 세션 (김영욱)

```
Hello AI
Microsoft AI MVP
Microsoft Reginal Director

생성형 AI 사피엔스 - LLM 관련 책이 많이 나왔다.

이미지넷 무의미해져서 없어짐 (정확도가 99%정도 까지 나오는 시대가 되면서)

LLM의 75%를 독점중 - MS (1월달 기준)

Meta - LLama (Open source)

--------------------------------
1995년 - PC 통신하고 있었음
Web - 이때 아마존, 구글, 네이버 나옴

2009년 - 폰
- 앱 기반 새로운 생태계
(우버, 인스타그램, 카카오톡)

2023년 - 생성형 AI
Open AI 정도
--------------------------------
gpt 1
1000 million parameter
gpt 2
1500 milion parameter
gpt 3
1조 3천억을 open ai (13조 - 49% 지분율)
17만 5000 parameter?

마인크래프트 - 16조 인수비용
링크드인 - 32조
블리자드 액티비아 - 71조

--------------------------------

이그나이트
AI Foundry -> 카트리지처럼 AI 모델을 원하는것을 선택할 수 있게 만들어짐
(1800개 이상)

--------------------------------
LLM 과 Vector

Copilot in Word, Copilot in Excel, Copilot in PowerPoint

- 시나리오를 미리 만들고 나서 만들어지는 것
(이거 한번 써봐야 겠다.)

--------------------------------
Facilitator Agent

Project Manager agent

HR, IT Agent들이 나오고 있다.

Agent들을 다루는 Agent (인도의 카스트 제도 처럼 계층화가 될 것이다.)
Meta Agent라고 부름

--------------------------------
On Device AI
노트북, 핸드폰에 LLM이 돌아가고 있는데
이 사이에 On Device AI 

퀄컴 CPU -> 45 뭐시기 (Copilot Device)
Copilot PC -> 출시 중

NPU를 사용해 어도비에 사용중

--------------------------------

LLM -> Parameter -> Data -> Vector화 -> GPU(CUDA) -> NVLink(GPU를 여러개 모아서 사용)
퀀텀컴퓨팅 -> 에너지 대안책 (몇십배씩 오르고 있음 주가가)
--------------------------------


```

## 두번째 세션 (김지선)
```
https://aka.ms/cwbk

code without barriers

Agenda

  Profile
  전 생애 커리어 발달 이론(한 개인의 인생동안 경험하고 쌓여가는 일이 모든 비경제활동 또한 포함)
  Lessons learned
  Close

-------------------------

Work-Life Integration (일과 삶은 구분이 없다. 죽도록 일해라)
AWS Solution Architecture

One team, collaboration
본부 전체의 업무, 본부 구성원의 스킬, 본부의 멘토, 조직 전체의 방향, 조직 전체의 목표

One MicroSoft

```


## 세번째 세션(김훈동)
```
Korea Spark User Group 운영진

Microsoft AI MVP?
Microsoft BigData MVP?
Microsoft Regional Director

KT-MS 협력의 의의

AX 컨설팅, MSP, CSP

KT AX 이노베이션 센터

Mid-training, fine-tuning

Mid-Training -> fine-tuning 보완
fine-tuning -> 10%성능올리면, 다른 부분족으로 문제발생가능

# 대한민국 규제시장의 변화 및 가능성

온프레미스 소버린 Cloud는 그자체에 Lock-in이 되어버린다.

---------------------------------
Sovereign AI - 고객이 소유권 및 통제권을 가지는 AI 기술 (도덕적)

vs
Sovereign Cloud - 좀더 인프라적이고 기술적인거 (법적)


온프레미스와 클라우드의 장점을 두개 다 합쳐서 만들고 있는데
소버린 하이브리드 AI

KT + MS
-> 금융권의 논리적 망분리 해결책을 위해 만들고 있고 설득하고 있는 내용

---------------------------------
아키텍처 예시 및 결론

Hallucination
보안/내부 Data 위협
규제

요 3가지를 중점으로 두고 해결 방법을 아키텍처로 그려나가고 있다.

Tasks, Domain, 보안/규제, 성능, 비용, 응답시간, 동접자수
-> Pin Point

KT-Midm, KT-Llama, ...

Azure Local, Azure Arc 사용하면, Full On-Premise 가능 (금융권에 특화된 Architecture)

Nvidia H100 -> 10000장


Router LLM
Classical 한 것

Top1 Accuracy
Moe는 뛰어넘는다.

Classification 보다 Vector 문제
-------------------------------------------
Sovereign 이 인상적이고 
기술을 스택킹해나가는 쪽 집중하려면
MS가 스타트업에 판매하는데 파트너쉽 모델을 어떻게 빌딩해서 요소요소에 빠르게 활용할 수있는데
조직적인 구조가 중요하다.

전체적인 에코가 한국시장에서는 어떻게 기획하고 있는지 궁금

N사의 정의와
MS의 철학

Sovereign AI, Cloud가 다르다.
여야 국회 AI 위원회에서도 컨셉, 우려 다 설명했는데,

입법이나 정책하시는 분들이 다 중요학 생각하고

대한민국 AI 생태계, 주권(B2B, C2C)
참여 오픈 개방이 가능한지?
관심이 많은데,

Azure의 Soverity, 국정원에서 발표한 공공을 위한 soverity
영역을 위한 Gcloud 를 받고 작업하고있던 KT가 Azure와 같이 한다면 ,멀티 인프라는 구축되고

AI 생태계 전문기업, 금융, 국내기업(Market)
공공, 금융, 의료 Major를 Vertical하게 제휴하고 있고
금융쪽은 현재 2군데 거래를 진행하고 있다.

SAAS 서포트 하는게 가장 중요할 것 같다.

MultiCloud 사업장에서 KT가 선정되었고, 내년부터 수천억의 대한민국 LLM 사업이 발족이된다..

Cloud 인프라는 멀티 클라우드(생태계 관점에서 글로벌 클라우드와 로컬이 결합된 모양이 될것같고)
다양한 Vendor들이 사업을 진행


```

## KH Systems 대표이사 (김진석)

### AppBuilder 소개
```
AppBuilder란?
UI/UX 컴포넌트 만드는 회사

- 장점 : 프로젝트 비용이 감소한다.

- AppBuilder 개발 사이트
https://www.appbuilder.dev/ko/


indigo Design UI kit
https://www.figma.com/@infragistics
- AppBuilder Import 플러그인, 템플릿 3종
- 피그마에서 앱빌더로 이동 가능 (완벽하지 않음)
- 미리 알아야 할 사항
  - GitHub에서 AppBuilder로의 로딩은 불가능
  - Figma로 부터 업데이트 불가
  - Figma로부터의 Import가 완벽 x
  - 앱 안에서 복사 붙여넣기 가능
  - 라이선스
    - AppBuilder + Ignite UI
    - HTML+CSS만 발췌하는 경우 무료


```

## 프리랜서 서비스 기획자 (김현혜)
```
Power Apps - 저코드 개발 도구

Mockup 제작 용도

https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/app-from-image

https://eicon127.tistory.com/2

https://www.Microsoft.com/en-us.power-platform/products/power-apps

네임펜으로 그림을 그려서 하면 잘 동작

DB는 엑셀 또는 CSV 파일을 통해 올리면 됨(테이블이 만들어 짐)


```

## 엘앤에스컨설팅 (송윤희)

```
Fabric?

Business Analyst - 초급
Data Scientist - 고급
Data Engineer - 중급
Database Administrator - 관리자


[Fabric - The unified data platform for the era of AI]
Data Factory - 데이터 전처리
  - Pipeline - Data Orchestaration
  - DataFlow - 데이터 전처리
Data Engineering - 데이터 모델링
Data Science - 데이터 분석
Data Warehouse - 데이터 저장
Real-Time Intelligence - IOT 정보 실시간 분석
Power BI - 데이터 시각화
Data Activator - 이벤트 발생, 문제 이벤트 알림 설정

OneLake - 모든 내용 관리
AI - Copilot
Purview - 

OneLake
  - 모든 조직 데이터 저장할 수 있는 통합된 위치 제공
  - 모든 Fabric 서비스가 빌드되는 기반 (Azure Data Lake Storage Gen2)
  - Delta Lake 도입

Delta Lake
  - 안정성을 제공하는 오픈소스 스토리지 프레임워크
  - ACID을 보장하고, 데이터의 버전관리, 변경 이력 추가, 데이터 품질 검사 등의 기능 제공

Parquet
  - Delta Lake의 개발 및 확장 형식 (CSV와 비교했을 때, 99.7% 데이터 절약)
  - 컬럼 기반의 모든 소스 데이터 파일 형식
  - 모든 종류의 빅데이터를 저장하는데 적합(Structed Data Table, image, avi, documents)
  - 효율인 컬럼 전체 압축 방식
  - 99.7% 데이터 절약

Medalion Layer?
  - 데이터를 저장소에 저장하고, 작업하는 것을 3단계로 나눠서 작업
  - bronze - 원시 데이터를
  - 통합해서 silver 에 담고
  - 다시 한번 BI 할 수있도록, Data Scientist가 데이터 분서할 수 있도록
  - 사용할 수 있게 Gold에 담는다.

RFM 분석 - 방문 빈도, 구매한 금액을 갖고 데이터를 군집화시킬 수 있는 데이터 분석
위를 위해 각자의 필요한 RFM을 분석할 수 있는 파이썬 코드

data wrangler?

크게 보면, 원천정보를 pipeline을 통해 데이터를 저장하는 단계
까지 하고 난뒤,
데이터 pipeline을 업데이트 하고 난뒤


Fabric
https://www.microsoft.com/ko-kr/microsoft-fabric

Fabric 설명서
https://www.microsoft.com/ko-kr/fabric/

Fabric 학습
https://www.microsoft.com/ko-kr/training/paths.get-started-fabric
```

## MLSA (황지현)
```
2024 해커그라운드 해커톤

해커톤 참가자 등록 PowerAutomate로 자동화 (메일, MMS 전송)

API - github action을 받아 토큰을 보내면, issues 정보를 받아올 수 있다.

사용자 입력 대처 - 
(예외 처리로 처리했겠지..)

azure 권한 - 
Owner 권한을 줄 때는 권한을 주는 사용이 있는데,
이걸로 외부에 사용하는 사람들한테 권한을 줄 수 있다.

Power automate에 동시성 문제가 있다.

Azure 권한이 가장 중요하다.

100TPU 모델로 GPT를 돌리고 있는 적이 있었다.

Blazer Web App??????????? -> 이게 뭘까
```

## (이소담)
```
IIS로 Django 배포하기

fastcgi로 배포 (쓸 수 없는 모듈)
http platform handler

IIS -> 윈도우에서 기본적으로 제공하는 웹서버

http 요청, 응답

ftp, smtp 기본적으로 지원
load balancing, 인증 같은 경우도 확장성 있게 보장

http platform handler - IIS가 외부 플랫폼과 소통하게 해주는 연결 도구

python django, node js, rubi js
도 이것을 이용하면, 배포가 가능하다.

v3.12 이상 python
django project,


```

## Microsoft Ai Global Black Belt(김대근)
```

MPI Message Passing interface ??




```

## NOWCOM Sr.DBOps (강성욱)
```
배포가 왜 중요할까?

  우리가 만든 제품(코드, 솔루션)을 소비자에게 전달한다는 의미

  주기를 단축시켜(시간을 단축) 실용기간을 가속화하는데에 있음
  시간제약 x, 더 높은 기술 구현

- 애플리케이션의 배포와 DB 배포의 차이

  stateful해서 state를 유지하며 배포하기 상대적으로 힘듬
  server와 의존성이 있어서 의도하지 않은 서비스가 중단되거나 데이터 정합성에 문제 발생 가능
  변경 이력 관리 상대적 어려움
  롤백이 상대적 어려움
  DB버전이 다를 경우 각 케이스에 맞는 모든 변경 스크립트 필요

    - 가장 큰 차이는 롤백의 유무

- 키같은 것이 히스토리에 올라가면 ,감사의 대상이 된다.

- 기존 배포 시스템
  - Github
  - Azure Pipeline으로 배포 프로세스 관리
  - Octopus로 배포 시스템 구성 (Deploy)
  - 배포 파일을dapac을 사용
  - 패키징은 Nuget을 사용해서 dapac을 만들어
  - DB 배포 명령은 sqlpackage 사용
    - 서버가 많아 배포 도구에 의존성을 줄이기 위해 분산이 필요함

- DACPAC & BACPAC
  - DACPAC : 기존 DB 업그레이드를 포함해 스키마를 캡처하고 배포
  - BACPAC : 스키마와 

- SqlPackage
  - DacFx API중 일부를 노출해 DB 개발 작업을 자동화하는 명령줄 유틸리티
  - dotnet tool을 통해 설치하거나 독립 실행형 파일을 다운로드하여 설치

- Nuget 패키지
  - .Net 프레임워크를 위한 소스코드 관리자

- CI

- CD
  - 
```