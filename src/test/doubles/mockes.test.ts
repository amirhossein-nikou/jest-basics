import { toUpperCaseWithCb } from "../../app/doubles/fakes";

describe('test function with callback using mockes', () => {

    describe('use Jest mokes for test callback function ', ()=> {
        const callbackMokes = jest.fn()
        afterEach(()=>{
            jest.clearAllMocks()
        })
        test('call callback for invalid arg - jest default mokes ', ()=>{
            const actual = toUpperCaseWithCb('',callbackMokes)
            expect(actual).toBeUndefined()
            expect(callbackMokes).toHaveBeenCalledWith('Invalid args')
            expect(callbackMokes).toHaveBeenCalledTimes(1)
        })
        test('call callback for valid arg - jest default mokes ', ()=>{
            const actual = toUpperCaseWithCb('abc',callbackMokes)
            expect(actual).toBe("ABC")
            expect(callbackMokes).toHaveBeenCalledWith('callback function with abc')
            expect(callbackMokes).toHaveBeenCalledTimes(1)
        })
    })
    describe('write my own mokes to test uppercase callbacks ', () => {
        let argsList: string[] = []
        let callCount: number = 0

        function callbackMokes(arg: string){
            argsList.push(arg);
            callCount++;
        }
        beforeEach(()=> {
            // clear all default values 
            argsList = []
            callCount = 0
        })
        test('call callback for invalid arg ', ()=>{
            const actual = toUpperCaseWithCb('',callbackMokes)
            expect(actual).toBeUndefined()
            expect(argsList).toContain('Invalid args')
            expect(callCount).toBe(1)
        })
        test('call callback for valid arg ', ()=>{
            const actual = toUpperCaseWithCb('abc',callbackMokes)
            expect(actual).toBe("ABC")
            expect(argsList).toContain('callback function with abc')
            expect(callCount).toBe(1)
        })
    })
})