const {divideDate} = require('./main');

describe('날짜 형식을 yyyy-mm 형식으로 변환합니다.', () => {
  test('날짜 형식 yyyy-mm 변환', () => {
    expect(divideDate({query: {date: "10/16/2021, 8:12 AM"}})).toEqual("2021-10");
    expect(divideDate({query: {date: "10/16/2021, 8"}})).toEqual("2021-10");
    expect(divideDate({query: {date: "11/16/2021, 8"}})).toEqual("2021-11");
    expect(divideDate({query: {date: "11/16/2022"}})).toEqual("2022-11");
    expect(divideDate({query: {date: "11/16/, 8"}})).toEqual("-11");
  })
})
