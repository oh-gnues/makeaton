### 폴더 구조
1. src/*: 프로젝트의 메인이 되는 폴더
2. 나머지: 굳이 볼 필요없는 폴더
> **NOTE** : 결과적으로는 src 폴더 밑에만 보면 됨. 

### src 폴더 구조
1. main/*: 실제로 우리가 코드를 작성하는 폴더
2. test/*: 실제 코드를 기반으로 테스트 코드를 돌리는 부분 => 안 씀 ㅋ
> **NOTE** : 결과적으로는 main 폴더 밑에만 보면 됨. 

<hr>

### main 폴더 구조
1. java
  - controller
    - **TestController.java** : spring boot 서버의 컨트롤러 기능
  - domain
    - **UserDo.java**: DB에서 긁어온 데이터를 담고 요청온 곳에 return하기 위한 객체. 
>**NOTE**: DO, VO, DTO, DAO 개념을 알아두면 편함. 우리는 데이터를 DB에서 가져오지 않고 그냥 하드코딩으로 입력해서 return할 것이기 때문에 현재로써는 크게 상관하지 않아도 될 부분이라 여겨짐
  - mybatis/*: DB연결을 위해 필요한 부분. 신경 안 써도 될 듯
  - service:
    - **UserService.java**: spring boot endpoint로 들어온 요청을 처리하는 파일.
  - **DemoApplication.java**: spring boot 서버의 main이라 생각하면 편함
2. resources
  - graphql (dir): graphQL을 사용할 시 필요한 폴더. 하지만 이번 아이디어톤에서는 사용하지 않을 것으로 보이기 때문에 볼 필요 없음 
  - application.yml: spring boot 프로젝트의 설정이 담긴 파일. 해당 내용에 설명은 파일에 주석으로 추가되어있으니 확인 바람

<hr>

  ### Work Flow
  1. client(현 상황에서는 front-end)가 백엔드에 요청을 보냄.(현재 sample code에서 예를 들자면 **{springBoot IP}:{springBoot Port}/test/getUser** 라는 url에 요청을 보냄, GET으로)
  2. TestController.java의 **getUser** method 부분이 해당 요청을 받음
  3. 요청이 온 정보를 파라미터로 사용하여 userService에 등록된 메소드들 중 하나 호출
  4. userService에서 호출된 method가 요청 온 정보를 바탕으로 로직 돌려서 return
  >이 부분이 실제 service logic이 동작되는 부분. controller는 그냥 요청만 받는 애라고 생각하면 편함.
  5. controller가 요청에 대한 response를 줌.