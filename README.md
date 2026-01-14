# Typechecks - v1.0.4

[![Node.js CI](https://github.com/droberts-ctrlo/typechecks/actions/workflows/node.js.yml/badge.svg)](https://github.com/droberts-ctrlo/typechecks/actions/workflows/node.js.yml)

## Description

This package provides a number of functions to check if a variable in JavaScript or TypeScript is of a certain type.

The available functions are:

### isNotNullOrUndefined

usage:

```javascript
isNotNullOrUndefined(value)
```

This function checks if a value is *not* null or undefined and returns `true` if it is, otherwise `false`

### isNullOrUndefined

```javascript
isNullOrUndefined(value)
```

This function checks if a value is null or undefined and returns `true` if it is, otherwise `false`

### isNull

usage:

```javascript
isNull(value)
```

This function checks if a value is null and returns `true` if it is, otherwise `false`

### isUndefined

usage:

```javascript
isUndefined(value)
```

This function checks if a value is undefined and returns `true` if it is, otherwise `false`

### isFinite

usage:

```javascript
isFinite(value)
```

This function checks if a value is a number, and if it is finite and returns `true` if it is, otherwise `false`

### isInfinite

usage: 

```javascript
isInfinite(value)
```

This function checks if a value is a number, and if it is infinite and returns `true` if it is, otherwise `false`

### isInteger

usage:

```javascript
isInteger(value)
```

This function checks if a value is an integer and returns `true` if it is, otherwise `false`

### isNaN

usage:

```javascript
isNaN(value)
```

This function checks if a value *is* a number, but is a NaN value - it returns `true` if it is, otherwise `false`

### isNotInteger

usage:

```javascript
isNotInteger(value)
```

This function checks if a value is a number, but is not an integer and returns `true` if it is, otherwise `false`

### isNotNan

usage:

```javascript
isNotNan(value)
```

This fuction checks if a value is a number, but is *not* a NaN value - it returns `true` if it is, otherwise `false`

### isNumber

usage:

```javascript
isNumber(value)
```

This function checks if a value is a number and returns `true` if it is, otherwise `false`

### isObject

usage:

```javascript
isObject(value)
```

This function checks if a value is an object and returns `true` if it is, otherwise `false`[^1]

### isEmptyOrWhitespace

usage:

```javascript
isEmptyOrWhitespace(value)
```

This function checks if a value is a string, and is empty or whitespace - if it is, it returns `true`, otherwise `false`

### isEmptyString

usage:

```javascript
isEmptyString(value)
```

This function checks if a value is a string, but is empty and returns `true` if it is, otherwise `false`

### isNotEmptyOrWhitespace

usage:

```javascript
isNotEmptyOrWhitespace(value)
```

This function checks if a value is a string, and is *not* empty or whitespace - it returns `true` if it is, otherwise `false`

### isNotEmptyString

usage:

```javascript
isNotEmptyString(value)
```

This function checks if the value is a string and is *not* empty (but it can be whitespace) - it returns `true` if it is, otherwise `false`

### isString

usage:

```javascript
isString(value)
```

This function checks if the value is a string and returns `true` if it is, otherwise `false`

### isArray

usage:

```javascript
isArray(value)
```

This function checks if the value is an array and returns `true` if it is, otherwise `false`

### isNumberArray

usage:

```javascript
isNumberArray(value)
```

This function checks if the value is an array of numbers and returns `true` if it is, otherwise `false`

### isObjectArray

usage:

```javascript
isObjectArray(value)
```

This function checks if the value is an array of objects and returns `true` if it is, otherwise `false`

### isStringArray

```javascript
isStringArray(value)
```

This function checks if the value is an array of strings and returns `true` if it is, otherwise `false`

### isBoolean

```javascript
isBoolean(value)
```

This function checks if the value is a boolean value and returns `true` if it is, otherwise `false`

[^1]: Assertion of a specific object type is not currently possible
