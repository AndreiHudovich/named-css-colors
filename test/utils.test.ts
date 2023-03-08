import { isNamedColor } from '../src/utils'

describe('isNamedColor', () => {
  test('returns true for valid named css colors', () => {
    ;['rebeccapurple', 'ORANGE', 'LimeGreen'].forEach((item) => {
      expect(isNamedColor(item)).toBe(true)
    })
  })

  test('returns false for invalid named css colors', () => {
    ;['superorange', '#000', 'GreyCat'].forEach((item) => {
      expect(isNamedColor(item)).toBe(false)
    })
  })

  test('throws on invalid argument type', () => {
    // @ts-expect-error: !
    expect(() => isNamedColor(101010)).toThrow(TypeError)
  })
})
