export class StringUtils {
    public upperCase(arg: string): string {
        if(!arg) throw new Error("invalid args!")
        return stringToUpperCase(arg)
    }
}

export function stringToUpperCase(str: String) {
    return str.toUpperCase()
}
type stringIfo = {
    lowerCase: string,
    upperCase: string,
    length: number,
    characters: string[],
    extraInfo: Object | undefined
}
/* istanbul ignore next */ // ignore coverage next function
export function getStringInfo(arg: string): stringIfo {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        length: arg.length,
        characters: Array.from(arg),
        extraInfo: {}
    }
}