import { isExportDeclaration, textSpanContainsPosition } from "typescript"

const {shuffleArray} = require('./utils')

let testFunctions = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        expect(shuffleArray).toEqual(expect.arrayContaining([]))
    })

    test('shuffleArray should return array of same length', () => {
        expect(shuffleArray).toHaveLength(shuffleArray.length)
    })
})