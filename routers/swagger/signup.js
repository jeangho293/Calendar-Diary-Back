/**
 * @swagger
 * /signup:
 *  post:
 *    summary: 회원가입 API
 *    description: 웹 서비스를 이용하기 위한 계정 생성 API 입니다.
 *    tags:
 *      - 회원가입
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              userID:
 *                type: string
 *                required: true
 *              PW:
 *                type: string
 *                required: true
 *              confirmPW:
 *                type: string
 *                required: true
 *            example:
 *              userID: "test"
 *              PW: ""
 *              confirmPW: ""
 *    responses:
 *      200:
 *        description: success
 * /signup/checkup:
 *  post:
 *    summary: 회원가입 시 아이디 중복을 확인하는 API
 *    description: 회원가입할 시 아이디 중복확인을 해야합니다.
 *    tags:
 *      - 회원가입
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              userID:
 *                type: string
 *            example:
 *              userID: ""
 *    responses:
 *      200:
 *        description: success
 */