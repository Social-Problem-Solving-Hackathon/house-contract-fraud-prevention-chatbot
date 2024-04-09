
# 사회문제해결을 위한 해커톤

안녕하세요, 전세사기 예방 가이드 안심전세봇 입니다.

# 팀원 소개

| 이름                                         | 학교           | 전공   | Email                |
| -------------------------------------------- | -------------- | ------ | -------------------- |
| 조성빈    | 고려대학교 | 통계학과 | seongbeen0319@naver.com|
| 권도영 | 숙명여자대학교     | 앙트러프러너십 전공 | dykwon0312@gmail.com |
| 문승민 | 인하대학교     | 산업경영공학과 | msm0627@naver.com|
| 이선경 | 동국대학교     | 컴퓨터공학과| skballet@naver.com |

---

## 1. 프로젝트 명

### 안심전세봇
전세사기 예방을 위해 서류 검토부터 질의응답까지 해결해주는 원스톱 생성형AI 서비스

## 2. 프로젝트 소개

필요 서류 업로드만으로 전세사기 위험을 진단하고, Rag와 llm결합으로 더 정확한 질의응답이 가능한 전세사기 예방 가이드 챗봇 서비스입니다.
React를 사용하여 웹 서비스 페이지를 구성했습니다.

## ✨ 서비스 UI

1️⃣ 로그인
![로그인 화면](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/69fd70cb-2c82-4f3f-aa36-863f5768fb05)

2️⃣ 전세관련 서류 검토 기능

![채팅1](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/9a5f5255-a70c-4bb3-9309-b92d0693611b)
서류 검토에 필요한 기본 정보를 입력받고, 서류를 다운로드 받을 수 있는 링크를 전달합니다.

![서류첨부](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/1712f5ba-dd7d-46b0-909c-3aadb2f2b2fe)
![판별결고](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/18ed5401-8408-4960-a4eb-08eb92645534)
사용자가 관련 서류를 업로드하면, 검토 후 전세사기 위험을 판별합니다.

![유료결제](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/802695e0-cddc-4265-bb7f-0651c0911f7d)
전세사기 관련 전문가의 조언을 듣고싶은 경우 유료결제를 진행합니다.

부동산 용어/ 법률/전세사기 수법 등에 관한 사용자의 질문에 답변합니다.

3️⃣ 추가 기능

### 1. 법률 전문가 중개
![법률중개](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/ff37c543-e30b-4a60-999a-fbfc45fc7678)
전세사기 피해자 및 부동산 관련 법률 전문가가 필요한 경우 중개합니다.

### 2. 커뮤니티

![커뮤니티](https://github.com/Social-Problem-Solving-Hackathon/house-contract-fraud-prevention-chatbot/assets/129375059/bbf20ead-f8e6-4488-b7fa-5858c5e89936)
전세사기 피해 및 부동산 관련 정보를 공유합니다.

추가 기능을 통해 사용자가 전세사기 판별 기능 이용 후에도 지속적으로 서비스를 사용할 수 있습니다.
## RAG 모델 프로세스

### 1. 양자화 설정과 한국어 언어 모델 최적화
양자화를 설정하여 모델의 메모리 사용량을 최적화하고, 
이 설정을 사전 훈련된 한국어 언어 모델 Ko-PlatYi-6B에 적용하였습니다.

### 2. 토큰화 및 대화 흐름 생성을 위한 LangChain 연결
입력 데이터를 토큰화하고, 생성된 텍스트의 다양성을 조절하기 위해 특정 값으로 설정하였습니다.
언어 모델과 프롬프트를 LangChain을 통해 연결하여 자연스러운 대화 흐름을 생성합니다.

### 3. PDF 임베딩과 FAISS 데이터베이스 구축
PDF 문서를 임베딩하여 텍스트를 벡터로 변환하고, 
이 벡터들을 기반으로 유사도 검색을 효율적으로 수행할 수 있는 FAISS 데이터베이스를 생성합니다.

### 4. 유사도 검색을 통한 답변 생성
질문과 유사도가 높은 문서를 FAISS 데이터베이스에서 검색하고, 
검색된 문서를 바탕으로 언어 모델이 질문에 대한 답변을 생성합니다.

## RAG 모델에 사용된 외부 데이터

### 1. 법 조항 200여 개
부동산등기법, 주택임대차보호법, 부동산 거래신고 등에 관한 법률, 
상가건물 임대차보호법, 공인중개사법

### 2. 부동산 용어와 그 개념 200여 개
ex) 입주권: 재개발이나 재건축 단지에서 조합원이 새로운 아파트에 입주할 수 있는 권리

### 3. 대표적인 전세사기 수법과 대처방안
ex)  깡통전세 등 전세사기 수법의 개념, 임차권 등기 명령 등 사기 대처 방안
