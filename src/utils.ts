import { namedColorsIdentifiers } from './colors.js'

export function isNamedColor(color: string): boolean {
  if (typeof color !== 'string')
    throw new TypeError(
      '`isNamedColor` expects a string value to be passed as an argument'
    )

  const normalizedColor = color.toLowerCase()

  return namedColorsIdentifiers.includes(normalizedColor)
}
