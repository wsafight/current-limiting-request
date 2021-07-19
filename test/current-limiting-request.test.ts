import {sum} from "../src";


describe('sum tests', () => {

  test('null options', () => {
    expect(sum(1,2)).toBe(3)
  })
  test('null options', () => {
    expect(sum(1,NaN)).toBe(NaN)
  })
})