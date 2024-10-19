import { StringUtilsSpy } from "../../app/doubles/spies"

describe('test class use spy', ()=>{
    let sut: StringUtilsSpy
    beforeEach(()=>{
        sut = new StringUtilsSpy()
    })
    test('upper case method - use spy to track calls', ()=> {
        const uppercaseSpy = jest.spyOn(sut,'toUpperCase');
        sut.toUpperCase('abc');
        expect(uppercaseSpy).toHaveBeenCalledWith('abc')
    })
    test('track logger method calls by spy', ()=> {
        const logSpy = jest.spyOn(console,'log');
        sut.logger('log this string')
        expect(logSpy).toHaveBeenCalledWith('log this string');
    })
    test('change implementation use spy', ()=> {
        jest.spyOn(sut,'changeLog').mockImplementation(()=> {
            console.log('this log changed from test section');
        })
        sut.changeLog()
    })
})