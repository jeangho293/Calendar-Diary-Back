const {
  CheckRegister,
  CheckID,
  CheckPWLength,
  CheckIncludePW,
  ComparePWandConfirm
} = require('./signup');

describe('회원가입 절차 조건 검사', () => {
  test('아래의 조건 통합 검사', () => {
    expect(CheckRegister('jeangho293', '1234', '1234')).toBeFalsy()
    expect(CheckRegister('jeangho293', 'hello', 'hello')).toBeFalsy()
    expect(CheckRegister('JEANGHO293', 'mytoken', 'mytoken')).toBeFalsy()
    expect(CheckRegister('jea', 'mytoken', 'mytoken')).toBeTruthy()
    expect(CheckRegister('jea', 'mytoken', 'mytoken')).toBeTruthy()
    expect(CheckRegister('jea', 'myto', 'mytoken')).toBeTruthy()
    expect(CheckRegister('jeangho293', 'myto', 'mytoken')).toBeTruthy()
    expect(CheckRegister('jeangho293', 'myt', 'myt')).toBeTruthy()

  })
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

  test('아이디에 비밀번호가 포함되어있지 않습니다.', () => {
    expect(CheckIncludePW('jeaghon293', '1234567890')).toEqual(true);
    expect(CheckIncludePW('jeaghon293', 'jeangho900')).toEqual(true);
    expect(CheckIncludePW('jeangho2930', 'jago90')).toEqual(true);
    expect(CheckIncludePW('jeangho293', 'jeangho')).toEqual(false);
    expect(CheckIncludePW('jeangho2930', '2930')).toEqual(false);
    expect(CheckIncludePW('jeangho2930', 'ho29')).toEqual(false);
  });

  test('비밀번호와 재확인 비밀번호가 같습니다.', () => {
    expect(ComparePWandConfirm('1234657890', '1234657890')).toEqual(true)
    expect(ComparePWandConfirm('1234', '1234')).toEqual(true)
    expect(ComparePWandConfirm('jeangho', 'jeangho')).toEqual(true)
    expect(ComparePWandConfirm('jeangho293', 'jeangho293')).toEqual(true)
    expect(ComparePWandConfirm('jeangho', 'jeangho293')).toEqual(false)
    expect(ComparePWandConfirm('jeangho', 'chang')).toEqual(false)
    expect(ComparePWandConfirm('jeangho293', 'chang293')).toEqual(false)
    expect(ComparePWandConfirm('123465789', '13579')).toEqual(false)
  })
});