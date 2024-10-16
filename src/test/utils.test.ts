import { getStringInfo, stringToUpperCase, StringUtils } from "../app/utils";

describe("test utils function", () => {
    // can use it or test
    it("return uppercase of the string", () => {
        // arrange:
        const sut = stringToUpperCase;
        const expected = "AMIR";
        // act:
        const actual = sut("amir");
        //asserted:
        expect(actual).toBe(expected);
        // AAA : Structure of unit test for more readable code
    });
    describe('StringUtils class test', () =>{
        let sut: StringUtils;
        // afterAll
        // beforeAll 
        // all hooks work on there own describe
        // afterEach(() => {
        //     console.log("after test");
        // })
        beforeEach(() => {
            sut = new StringUtils()
        })
        it('should return uppercase of a string value', () => {
            const actual = sut.upperCase("amir")
            expect(actual).toBe("AMIR");
        })
        it('should throw error on invalid arg', () => {
            // proper way
            function expectError(){
                const actual = sut.upperCase("")
            }
            expect(expectError).toThrow('invalid args!');
            // expect(expectError).toThrowError('invalid args!'); deprecated
        })
        it('should throw error on invalid arg - try catch', (done) => {
            try {
                const actual = sut.upperCase("")
                done('upperCase function should return error for invalid args')
            } catch (error) {
                expect(error).toBeInstanceOf(Error)
                expect(error).toHaveProperty('message','invalid args!')
                done()
            }
        })
    })
    describe('upperCase example', () => {
        // test the list of input and expected values
        test.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'amir', expected: 'AMIR' },
            { input: 'Alireza', expected: 'ALIREZA' },
        ])('$input toUpperCase should be $expected', ({ input, expected }) => {
            const actual = stringToUpperCase(input);
            expect(actual).toBe(expected);
        })
    })

    describe("getStringInfo for arg (My-String) should: ", () => {
        test("return right lower case", () => {
            const actual = getStringInfo("My-String");
            expect(actual.lowerCase).toBe("my-string");
        });
        test("return right upper case", () => {
            const actual = getStringInfo("My-String");
            expect(actual.upperCase).toBe("MY-STRING");
        });
        test("return right length", () => {
            const actual = getStringInfo("My-String");
            expect(actual.length).toBe(9);
        });
        test("return define extraInfo", () => {
            const actual = getStringInfo("My-String");
            expect(actual.extraInfo).toBeDefined();
            // expect(actual.extraInfo).not.toBe(undefined);
            // expect(actual.extraInfo).not.toBeUndefined();
            // expect(actual.extraInfo).toBeTruthy();
        });
        test("return right characters", () => {
            const actual = getStringInfo("My-String");
            expect(actual.characters).toEqual(["M", "y", "-", "S", "t", "r", "i", "n", "g"]);
            // expect(actual.characters).toEqual(
            //     expect.arrayContaining(["r", "i", "n", "g", "S", "t", "M", "y", "-"])
            // );
            // expect(actual.characters).toContain<string>("M");
        });
        test("return right extraInfo", () => {
            const actual = getStringInfo("My-String");
            expect(actual.extraInfo).toEqual({});

        });

    });
});
