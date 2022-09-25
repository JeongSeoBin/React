describe('expect test', () => {
    test('adds 1 + 2 to equal 3', () => {
        // 테스트 코드
        // 1+2가 3이여야 한다
        expect(1+2).toBe(3)
    });

    test('37 equal 37', () => {
        expect(37).toBe(37)
    })

    test('{age:39} tp equal {age:39}', () => {
        // 두 객체가 같은지
        // 객체 비교시 toEqual()을 사용하여 비교한다
        expect({age:39} ).toEqual({age:39} )
    })

    test('toHaveLength', () => {
        // "hello"문자열의 길이가 5인지
        // toHaveLength(): 문자열의 길이를 비교
        expect("hello").toHaveLength(5)
    })

    test('toHaveProperty', () => {
        // 객체가 name속성을 갖고 있는지
        expect({name: "Mark"}).toHaveProperty("name")
        // 객체가 name속서을 가지고 있으며 속사의 값은 Martk인지
        expect({name: "Mark"}).toHaveProperty("name", "Mark")
    })

    test('toBeDefined', () => {
        // undefined가 아닌지
        expect({name: "Mark"}.name).toBeDefined()
        expect({name: "Mark"}.age).toBeDefined()
    })

    test('toBeFalsy', () => {
        // falsy값인지
        expect(false).toBeFalsy()
        expect(0).toBeFalsy()
        expect("").toBeFalsy()
        expect(null).toBeFalsy()
        expect(undefined).toBeFalsy()
        expect(NaN).toBeFalsy()
    })

    test('toBeGreaterThan', () => {
        // 10이 9보다 큰지
        expect(10).toBeGreaterThan(9)
    })

    test('toBeGreaterThanOrEqual', () => {
        // 10이 10보다 크거나 같은지
        expect(10).toBeGreaterThanOrEqual(10)
    })

    test('toBeInstanceOf', () => {
        class Foo {}
        expect(new Foo()).toBeInstanceOf(Foo)
    })
})
