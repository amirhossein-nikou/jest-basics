import { calculateComplexity } from "../../app/doubles/stub"

describe('stub test => ', ()=> {
    test('return complexity of string' , ()=> {
        // test a part of object without other parts (like check payment without login)
        const someInfo = {
            length: 10,
            extraInfo: {
                filedOne: 'someInfo',
                filed2: 'someOther',
                filed3: 'someOther',
            }
        }
        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(30)
    })
})