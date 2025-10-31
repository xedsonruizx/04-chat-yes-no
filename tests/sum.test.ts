import {describe, expect, test} from 'vitest'
import {sum, addArray} from '@/helpers/sum'
describe('sum  functions', () => {

    test('add two numbers', () => {
      const a = 2
      const b = 3
      const result = sum(a, b)
      expect(result).toBe(a+b)
    })

})


describe('sum array functions', () => {
    test('should return 0 for empty array', () => {
      const arr: number[] = []
      const result = addArray(arr)
      expect(result).toBe(0)
    })


    test('add array of numbers', () => {
      const arr = [1, 2, 3, 4, 5]
      const result = addArray(arr)
      expect(result).toBe(15)
    })
})