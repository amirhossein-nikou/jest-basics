import { toUpperCaseWithCb } from "../../app/doubles/fakes"

describe('Fake test sample', ()=> {
    test("toUppercase callback for invalid args", ()=> {
        const actual = toUpperCaseWithCb('',()=> {}) // this arrow function  with nothing is fake strategy
        expect(actual).toBeUndefined()
    })
    test("toUppercase callback for valid args", ()=> {
        const actual = toUpperCaseWithCb('abc',()=> {}) // this arrow function  with nothing is fake strategy
        // this strategy have some problems - not check the callbacks - problems will solve with mockes 
        expect(actual).toBe('ABC')
    })
})