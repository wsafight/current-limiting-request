import {currentLimitingRequest} from "../src";

describe('sum tests', () => {
  test('null options', () => {
    expect(currentLimitingRequest()).toBe(3)
  })
})