type stringIfo = {
    lowerCase: string,
    upperCase: string,
    length: number,
    characters: string[],
    extraInfo: Object
}
export function calculateComplexity(stringInfo: stringIfo){
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}