import { getNamedColors, getNamedColorsIdentifiers, getNamedColorsHexs } from '../src/colors'

describe('getNamedColors return value', () => {
  const namedColors = getNamedColors()

  test('is an object', () => {
    expect(Object.prototype.toString.call(namedColors) === '[object Object]').toBe(true)
  })

  test('properties are read only', () => {
    // @ts-expect-error: !
    expect(() => (namedColors.white = 'black')).toThrow(TypeError)
  })

  test('is not extensible', () => {
    // @ts-expect-error: !
    expect(() => (namedColors.greycat = '#333')).toThrow(TypeError)
  })
})

describe('getNamedColorsIdentifiers return value', () => {
  const namedColorsIdentifiers = getNamedColorsIdentifiers()

  test('is an array', () => {
    expect(Array.isArray(namedColorsIdentifiers)).toBe(true)
  })

  test('is readonly', () => {
    // @ts-expect-error: !
    expect(() => (namedColorsIdentifiers[0] = 'black')).toThrow(TypeError)
  })

  test('is not extensible', () => {
    expect(
      () =>
        // @ts-expect-error: !
        (namedColorsIdentifiers[namedColorsIdentifiers.length + 1] = 'greycat')
    ).toThrow(TypeError)
  })
})

describe('namedColorsHexs return value', () => {
  const namedColorsHexs = getNamedColorsHexs()

  test('is an array', () => {
    expect(Array.isArray(namedColorsHexs)).toBe(true)
  })

  test('is readonly', () => {
    // @ts-expect-error: !
    expect(() => (namedColorsHexs[0] = '#000')).toThrow(TypeError)
  })

  test('is not extensible', () => {
    expect(
      // @ts-expect-error: !
      () => (namedColorsHexs[namedColorsHexs.length + 1] = '#333')
    ).toThrow(TypeError)
  })
})
