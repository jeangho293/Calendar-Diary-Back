/**
 * @swagger
 * /:
 *  get:
 *   summary: 메인 페이지에서 현재의 yyyy-mm에 따른 모든 다이어리를 불러오는 API
 *   description: 현재 페이지에 해당 되는 년, 월의 다이어리들을 불러옵니다.
 *   tags:
 *    - 메인페이지
 *   parameters:
 *    - in: query
 *      name: date
 *      required: true
 *      description: 현재의 년, 월 형식(mm/dd/yyyy)
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *      description: success
 *      content:
 *        application/json:
 *          example:
 *            _id: 61693f1b87c4ea71774efe02
 *            date: 2021-10-15
 *            title: 예제입니다.
 *            color: "#DD365"
 */