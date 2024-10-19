import { calNumber, toLowerCaseWithId } from "../../app/doubles/mockeModule"

// this line make all the functions in file return undefine
jest.mock('../../app/doubles/mockeModule', () => ({
    ...jest.requireActual('../../app/doubles/mockeModule'),// this line make all function in module do their own job
    calNumber: (a:number,b:number) => {return 10} // make this function return 10 always
}))

// make uuid module -v4() to return 'amir' for test module
jest.mock('uuid',()=>({
    v4: () => {return 'amir'}
}))
describe('mock module test ', ()=> {
    test('test cal number function - will return 10 always after mock setup', ()=> {
        const actual = calNumber(2,2);
        // actual = 4 - but with my mock setup expect 10
        expect(actual).toBe(10)
    })
    test('test random id', ()=> {
        const actual = toLowerCaseWithId('ABC');
        expect(actual).toBe('abcamir')
    })
})