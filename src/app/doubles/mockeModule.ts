import { v4 } from "uuid";

export function toUpperCase(arg: string){
    return arg.toUpperCase();
}
export function calNumber(a:number,b:number){
    return a*b;
}
export function toLowerCaseWithId(arg: string){
    return (arg.toLowerCase() + v4());
}