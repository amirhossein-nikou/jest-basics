
export class StringUtilsSpy{
    public changeLog(){
        console.log('change this log');
    }
    public toUpperCase(arg: string): string{
        return arg.toUpperCase()
    }
    public logger(arg: string){
        console.log(arg);
    }
}
