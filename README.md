# CSS Named Colors utilities

![license](https://img.shields.io/github/license/andrei-hudovich/named-css-colors?color=FCA311&label=)
![npm version](https://img.shields.io/github/package-json/v/andrei-hudovich/named-css-colors/main?color=FCA311&label=)

A set of utilities to work with named colors defined in the latest [CSS Color Module](https://w3c.github.io/csswg-drafts/css-color/#named-colors).


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API - Core](#api---core)
  - [isNamedColor](#isnamedcolor)
  - [getNamedColors](#getnamedcolors)
  - [getNamedColorsIdentifiers](#getnamedcolorsidentifiers)
  - [getNamedColorsHexs](#getnamedcolorshexs)
- [API Types](#api---types)
  - [NamedColor](#namedcolor)
- [Notes](#notes)
- [License](#license)


## Features

- ☂️ Fully-typed (written in Typescript)
- 🌳 Tree-Shakeable


## Installation

Using npm:
```sh
$ npm install named-css-colors
```

Using yarn:
```sh
$ yarn add named-css-colors
```

Using pnpm:
```sh
$ pnpm add named-css-colors
```


## API - Core

### isNamedColor()

Checks whether the given argument is a named CSS color.

- **Type:**

  ```ts
  function isNamedColor(color: string): boolean
  ```

- **Example:**

  ```ts
  import { isNamedColor } from 'named-css-colors'

  isNamedColor('greycat') // => false
  isNamedColor('black') // => true
  ```
  
### getNamedColors()

Returns a **read only** object of named CSS colors.

- **Type:**

  ```ts
  function getNamedColors(): NamedColors
  
  type NamedColors = {
    readonly [key in NamedColor]: string
  }
  ```

- **Example:**

  ```ts
  import { getNamedColors } from 'named-css-colors'

  getNamedColors()
  // => { aliceblue: '#F0F8FF', antiquewhite: '#FAEBD7', ..., yellowgreen: '#9ACD32' }
  
  Object.isFrozen(getNamedColors())
  // => true
  ```
 
### getNamedColorsIdentifiers()

Returns a **read only** array of named CSS colors identifier values.

- **Type:**

  ```ts
  function getNamedColorsIdentifiers(): NamedColorsIdentifiers
  
  interface NamedColorsIdentifiers extends ReadonlyArray<string> {
    readonly [index: number]: NamedColor
  }
  ```

- **Example:**

  ```ts
  import { getNamedColorsIdentifiers } from 'named-css-colors'

  getNamedColorsIdentifiers()
  // => [ 'aliceblue', 'antiquewhite', ..., 'yellowgreen' ]
  
  Object.isFrozen(getNamedColorsIdentifiers())
  // => true
  ```

### getNamedColorsHexs()

Returns a **read only** array of named CSS colors hex values.

- **Type:**

  ```ts
  function getNamedColorsHexs(): NamedColorsHexs
  
  interface NamedColorsHexs extends ReadonlyArray<string> {
    readonly [index: number]: string
  }
  ```

- **Example:**

  ```ts
  import { getNamedColorsHexs } from 'named-css-colors'

  getNamedColorsHexs()
  // => [ '#F0F8FF', '#FAEBD7', ..., '#9ACD32' ]
  
  Object.isFrozen(getNamedColorsHexs())
  // => true
  ```


## API - Types

### NamedColor

A union type alias of each named color string identifier.

- **Type:**

  ```ts
  type NamedColor =
    | 'aliceblue'
    | 'antiquewhite'
    ...
    | 'yellowgreen'
  ```

- **Example:**

  ```ts
  import type { NamedColor } from 'named-css-colors'

  const color: NamedColor = 'black'
  ```


## Notes

This is a [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).


## License

MIT License © 2023 [Andrei Hudovich](https://hudovich.dev/)
