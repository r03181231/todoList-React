# 개인 토이 프로젝트 "오늘만 한다"

### < 목차 >

 **# 개인 토이 프로젝트 팀 "오늘만 한다"소개**

- 팀원소개

**# 개인 토이 프로젝트 소개**

- 개발 기간, 프로젝트 명&소개&목표

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 기능

  - 필수 요구 사항
  - 선택 사항
  - 파일 구조

<br />

## 프로젝트 팀 소개

**팀원 소개**

---

|                            남해리                            |
| :----------------------------------------------------------: |
|                          Enfj, Infp                          |
| <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="250px" /></p> |
|          [@r03181231](https://github.com/r03181231)          |
|                           FrontEnd                           |


<br />

**목표** 

---

\- 포기하지 말자 ! 

\- 피할 수 없으면 돌아가자 ! 

\- 끝까지 완성하자 !

<br />


## 프로젝트 "오늘만 한다" 



**프로젝트 명** : 오늘만 한다 (Todo-List)

**개발 기간** : 2024. 01.18 ~ 2024.01.19 (2일)

**프로젝트 소개** : 미루지 않고 오늘 내에 끝낼 수 있는 일을 기록하는 Todo-List 입니다.

**프로젝트 목표** : 딱 오늘만 할 수 있는 일을 기록하고 미루지 않게 끔하는 사이트입니다



### 🚦 Project Rules

#### **개발 환경**

- **editor** : Visual Studio Code
- **environment** : git, github
- **development** : HTML5, CSS3, JavascriptES6, react18.2.0

<br />

#### Code Convention
- JSX파일 이름 : 파스칼케이스

- JSX파일 내 상위 함수의 변수 : 파스칼 케이스 (ex. export const Pascal = () => {} export Default)

- 변수 : 카멜케이스

- CSS파일 이름 : 카멜케이스 

- 클래스명 : 대쉬(-)

- div id로 기능 구별 (ex. div id=”header” , div id=”search”)

- branch 이름 : **타입_기능/#이슈번호  Feat_search/#1**

- issue 이름 : **[타입] - 설명 [Feat] - search 기능 구현**

  

**개인 작업하기**

- 기능 개발을 위해 작성한 이슈 번호를 사용하여 branch를 생성합니다. (ex. (git branch 사용법 참고))

- 작업 전에 develop branch를 반드시 pull하고 시작합니다. (git pull origin develop)

- commit은 컨벤션을 지켜 메세지를 적습니다.

- push은 해당 작업 branch에 합니다.

- pull request도 컨벤션을 지켜 생성합니다.

- 팀원들의 코드리뷰를 받았으면 merge 합니다.

- 꼭! 브랜치를 헷갈리지 않도록 합시다. 이슈번호 확인!

  

**Pull Request 하기**

- 본인이 작업하던 branch를 deve branch로 merge 합니다.
- 절대 main으로 하지 않습니다!!
- base는 develop , compare는 본인 작업 브랜치 입니다!!
- PR제목은 **[타입] - 설명**으로 통일합니다.
- Reviewers에는 상대방을 태그합니다.
- Assignees에는 본인을 태그합니다.
- Labels에는 해당 작업과 맞는 유형을 태그합니다.
- 설명란에는 어떤 작업을 할 예정인지, 관련된 이슈번호가 있는지 참고한 내용이 있는지 등 필요한 내용을 적습니다.

**PR 후 Merge 하기**

- pull request를 생성하면 슬랙에 리뷰를 요청합니다.
- 팀원들은 내용을 확인하고 코드리뷰 comment를 자유롭게 작성합니다.
- 모두의 comment를 받았으면 본인이 merge합니다.



<br />



#### Commit Convention

**commit type**

- Feat : 기능 구현
- Chore: 기능 변경 없는 코드 변경 사항
- Del : 코드 삭제
- Fix : 버그 수정
- Docs : 문서 수정
- Style : UI 추가 및 수정
- Refactor: 코드 리팩토링
- Test : 테스트 코드, 리팩토링 코드 추가
- Setting: 프로젝트 세팅



**commit message**

- 모든 커밋 메세지 뒤에는 이슈번호를 태깅합니다.
- 커밋 메세지 영어로
- 모든 커밋 메세지는 { **[타입/#이슈번호] 메세지** } 로 작성합니다.
- ex) [Feat/#1] add splash screen



<br />

## 시작 가이드



### Installation

```bash
$ git clone https://github.com/r03181231/todoList-React.git
$ cd todoList-React
```


<br />


## 프로젝트 구성 및 기능

<br />

<p><img src="https://github.com/r03181231/todoList-React/assets/152264010/43b3609f-d2ae-4348-b0e4-e5f7f18a870b" width="400px" align="right"></p>





### 1. 필수 요구 사항       

- [x] 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.

- [x] Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 해주세요. 위 영상을 보면 버튼 내 라벨이 다른 걸 볼 수 있죠?

- [x] Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.

- [x] Layout의 최대 넓이는 1200px, 최소 넓이는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.

- [x] **컴포넌트 구조는 자유롭게 구현해보세요.**
    - 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.

<br />

### 2. 선택 사항
- [x] todo수정 기능


<br />

### 2. 파일 구조
<div>
  <p><img src="https://github.com/r03181231/todoList-React/assets/152264010/0354e48d-0c30-4c80-aad1-c71ec39b517a" width="200px" align="left"/><p>
  <p><img src="https://github.com/r03181231/todoList-React/assets/152264010/2b48ba2b-bb20-4a58-bab3-6c2c4cdd994a" width="150px" align="left"/><p>
     <p><img src="https://github.com/r03181231/todoList-React/assets/152264010/cca5ef62-1038-4003-955f-b0d3888376aa" width="150px" align="left"/><p>
  <p><img src="https://github.com/r03181231/todoList-React/assets/152264010/5957bf1e-ba4e-4047-a61b-3afb9fc46070" width="150px" align="center"/><p>
 
</div>




