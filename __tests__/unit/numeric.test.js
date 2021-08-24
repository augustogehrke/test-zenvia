const toNumber = require('../../toNumber')

describe('test-1', () => {
  it('correct convert XX to 20', async () => {
    expect(toNumber.convert('XX')).toBe(20)
  })
})

describe('test-2', () => {
  it('correct convert XLX to 160', async () => {
    expect(toNumber.convert('CLX')).toBe(160)
  })
})
