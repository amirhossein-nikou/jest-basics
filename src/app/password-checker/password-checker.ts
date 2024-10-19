
export enum passwordError {
    SHORT = 'password length must be more than 8 characters',
    NO_UPPER_CASE = 'password must contain at least one uppercase',
    NO_LOWER_CASE = 'password must contain at least one lowercase',
    NO_NUMBER = 'password must contain at least one number',
}
interface CheckResult {
    valid: boolean,
    reasons: passwordError[]
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {
        const reasons: passwordError[] = []
        this.checkLength(password,reasons)
        this.checkUpperCase(password,reasons)
        this.checkLowerCase(password,reasons)
        return {
            valid: reasons.length > 0 ? false : true,
            reasons
        }
    }
    public checkAdminPassword(password: string): CheckResult{
        const basicCheck = this.checkPassword(password);
        this.checkNumber(password,basicCheck.reasons)
        return {
            valid: basicCheck.reasons.length > 0 ? false : true,
            reasons: basicCheck.reasons
        }
    }
    private checkLength(password: string,reasons: passwordError[]){
        if (password.length < 8) {
            reasons.push(passwordError.SHORT)
        }
    }
    private checkUpperCase(password: string,reasons: passwordError[]){
        if(password == password.toLowerCase()){
            reasons.push(passwordError.NO_UPPER_CASE)
        }
    }
    private checkLowerCase(password: string,reasons: passwordError[]){
        if(password == password.toUpperCase()){
            reasons.push(passwordError.NO_LOWER_CASE);
        }
    }
    private checkNumber(password: string,reasons: passwordError[]){
        const hasNumber = /\d/
        if(!hasNumber.test(password)){
            reasons.push(passwordError.NO_NUMBER)
        }
    }
}