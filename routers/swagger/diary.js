/**
 * @swagger
 * /diary:
 *  post:
 *    summary: 다이어리 작성 API
 *    description: 로그인한 사용자가 다이어리를 작성하는 API 입니다.
 *    tags:
 *      - 다이어리
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              date:
 *                type: string
 *              title:
 *                type: string
 *              content:
 *                type: string
 *              color:
 *                type: string
 *            example:
 *              date: 2021-10-16
 *              title: 테스트입니다.
 *              content: 잘 될까요?
 *              color: DD6262
 *    responses:
 *      200:
 *        description: success
 *  delete:
 *    summary: 다이어리 삭제 API
 *    description: 로그인한 사용자가 다이어리를 삭제하는 API 입니다.
 *    tags:
 *      - 다이어리
 *    parameters:
 *      - in: query
 *        name: id
 *        schema:
 *          type: string
 *        description: 해당 다이어리의 ObjectID
 *    responses:
 *      200:
 *        description: success
 *  put:
 *    summary: 다이어리 수정 API
 *    description: 로그인한 사용자가 다이어리를 수정하는 API 입니다.
 *    tags:
 *      - 다이어리
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *              post:
 *                type: object
 *                content:
 *                  type: string
 *                color:
 *                  type: string
 *            example:
 *              id: 해당다이어리의 objectID
 *              post:
 *                title: 제목 수정됬습니까?
 *                content: 확인
 *                color: 66DQED
 *    responses:
 *      200:
 *        description: success
 *
 *  get:
 *    summary: 특정 날짜의 다이어리를 가져오는 API
 *    description: 특정 날짜를 선택할 시
 *    tags:
 *      - 다이어리
 *    parameters:
 *      - in: query
 *        name: date
 *        schema:
 *          type: string
 *        description: 특정 날짜
 *    responses:
 *      200:
 *        description: success
 *        content:
 *          application/json:
 *            example:
 *              _id: 61693f1b87c4ea71774efe02
 *              date: 2021-10-15
 *              title: 예제입니다.
 *              content: 예제입니다.
 *              color: "#66DQED"
 */