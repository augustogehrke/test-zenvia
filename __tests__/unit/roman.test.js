const toRoman = require('../../toRoman')

describe('test-1', () => {
  it('correct convert number to roman', async () => {
    expect(toRoman.convert(100)).toBe('C')
  })
})

describe('test-2', () => {
  it('correct convertion number to roman', async () => {
    expect(toRoman.convert(325)).toBe('CCCXXV')
  })
})
