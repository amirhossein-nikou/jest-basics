type LoggerServiceFunction = (arg: string) => void

export function toUpperCaseWithCb(arg:string,callback:LoggerServiceFunction ){
    if(!arg){
        callback('Invalid args')
        return;
    }
    callback(`callback function with ${arg}`)
    return arg.toUpperCase();
}