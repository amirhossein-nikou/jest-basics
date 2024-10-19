import { PasswordChecker, passwordError } from "../../app/password-checker/password-checker"

describe('PasswordChecker class test => ', () => {
    let sut: PasswordChecker
    beforeEach(() => {
        sut = new PasswordChecker()
    })
    test('password with less than 8 characters are invalid', ()=>{
        const actual = sut.checkPassword('123456')
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(passwordError.SHORT);
    })
    test('password with more than 8 characters are valid', ()=>{
        const actual = sut.checkPassword('12345678')
        expect(actual.valid).not.toContain(passwordError.SHORT)
    })
    test('password without uppercase letter is invalid', () => {
        const actual = sut.checkPassword("abc")
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(passwordError.NO_UPPER_CASE)
    })
    test('password with one or more uppercase letter is valid', () => {
        const actual = sut.checkPassword("abaCDe")
        expect(actual.reasons).not.toContain(passwordError.NO_UPPER_CASE)
    })
    test('password without lowercase letter is invalid', () => {
        const actual = sut.checkPassword("ABC")
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(passwordError.NO_LOWER_CASE)
    })
    test('password with one or more lowercase letter is valid', () => {
        const actual = sut.checkPassword("AbCdeF")
        expect(actual.reasons).not.toContain(passwordError.NO_LOWER_CASE)
    })
    test('complex password is valid', () => {
        const actual = sut.checkPassword('amirNikou')
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true)
    })
    test('Admin password with no numbers is invalid', () => {
        const actual = sut.checkAdminPassword("amirNikou");
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(passwordError.NO_NUMBER)
    })
    test('Admin password with one or more numbers is valid', () => {
        const actual = sut.checkAdminPassword("amir1234Nikou");
        expect(actual.reasons).not.toContain(passwordError.NO_NUMBER)
    })
})