<h1>:ship:항해 99</h1>

- 프로젝트 이름 <br>
  캘린더형 다이어리 :calendar:


- 프로젝트 기간 <br>
  2021-10-11 ~ 2021-10-16

<h2>:family:Developers</h2>

- BackEnd (Node.js)
  - 👥김정호
  - 👥조원호


- FrontEnd (React)
  - 👥심선아
  - 👥김갑민
  - 👥박시영

<h2>👀View</h2>

<img width="2048" alt="스크린샷 2021-10-16 오후 5 14 55" src="https://user-images.githubusercontent.com/58936251/137580149-f3ebcbc5-47d3-4f90-a514-7d1a0ae9a8c8.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 10" src="https://user-images.githubusercontent.com/58936251/137580199-4b9f9e22-6984-407a-a2d7-29fd57f7d73e.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 24" src="https://user-images.githubusercontent.com/58936251/137580201-2dbdcd8f-33f3-41ae-b739-97914f018c7d.png">
<img width="2048" alt="스크린샷 2021-10-16 오후 5 17 35" src="https://user-images.githubusercontent.com/58936251/137580205-260f67c5-a402-4d84-9a49-00433c73b10b.png">


<h2>✅기술 스택✅</h2>

- **node.js**
- **MongoDB**
  - `NoSQL로 현재 프로젝트에서는 관계를 가지는 요소가 없기에 MongoDB 채용`
- **Express**

<h2>📝라이브러리📝</h2>

- **React**
  - FrontEnd
- **jsonwebtoken**
  - JWT Token 로그인 인증 방식
    - ```사용자 인증 정보를 따로 저장소로 관리하지 않기 위해 채용```
- **bcrypt**
  - 로그인 비밀번호 단방향 암호화 방식
    - ```비밀번호와 같은 정보는 복호화할 이유가 없으므로 더욱 안정한 보안을 위해 채용```
- :exclamation:~~**cookie-parer**~~ (사용하지 않음)
  - `res.cookie()`를 사용하여 쿠키를 서버에서 만들어서 전송
    - `cors() 옵션을 설정하는 도중 SSL 인증서가 없으면 쿠키가 전송이 안되는 이슈때문에 사용 취소`
    - 예상 되는 해결방안은 https를 인증받으면 될 것 같다는 생각
- **cors**
  - Cross-Origin의 Resource 를 공유하는 정책
    - `특정 도메인에서만 request resource 를 받을 수 있게 설정`
- **dotevn**
  - 환경 변수 관리
    - `process.evn.PORT` 와 같이 환경 변수를 저장, 사용을 위함
- **joi**
  - Schema Validation 역할
    - `Schema의 유효성을 검사하기 위한 도구`
- **mongoose**
  - MongoDB 모델 정의
    - `MongoDB를 효율적으로 사용할 수 있는 도구`
- **swagger-jsdoc** **swagger-ui-express**
  - 협업을 위한 API 명세
    - `프론트와 백엔드의 협업 시 API 정보와 TEST를 확인하기 위함`
- **jest**
  - 테스트 코드
    - `현 프로젝트에서 단위 테스트를 위해 채용`
- **morgan**
  - log 를 활용한 업무 효율 증가
    - `기능에 대한 log의 가시성을 높이기 위해 채용`
    - 배포 후 해당 기능은 삭제
- **artillery**
  - 부하 테스트
    - `간단한 시나리오에 대한 부하 테스트 진행`
