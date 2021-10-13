const {
  CheckRegister,
  CheckID,
  CheckPWLength,
  CheckIncludePW,
  ComparePWandConfirm
} = require('./signup');

describe('회원가입 조건 통합검사', () => {
  test('아이디는 최소 4글자 이상이며 대소문자, 숫자로만 구성되어집니다.', () => {
    expect(CheckID('jeangho293')).toEqual(true);
    expect(CheckID('JEANGHO293')).toEqual(true);
    expect(CheckID('1234567890')).toEqual(true);
    expect(CheckID('JeAnGhO293')).toEqual(true);
    expect(CheckID('293HI')).toEqual(true);
    expect(CheckID('')).toEqual(false);
    expect(CheckID('123')).toEqual(false);
    expect(CheckID('ted')).toEqual(false);
    expect(CheckID('TED')).toEqual(false);
  });

  test('비밀번호는 최소 4글자 이상입니다.', () => {
    expect(CheckPWLength('123456789')).toEqual(true);
    expect(CheckPWLength('abcdefghi')).toEqual(true);
    expect(CheckPWLength('1234')).toEqual(true);
    expect(CheckPWLength('abcd')).toEqual(true);
    expect(CheckPWLength('hi@@')).toEqual(true);
    expect(CheckPWLength('abc')).toEqual(false);
    expect(CheckPWLength('123')).toEqual(false);

  });
});