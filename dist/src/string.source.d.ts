export interface StringSource {
    getStringAsync(): Promise<string>;
}
export declare class StaticStringSource implements StringSource {
    private message;
    constructor(message: string);
    getStringAsync(): Promise<string>;
}
export declare class LazyStringSource implements StringSource {
    private fnLoad;
    private resourceName;
    constructor(fnLoad: (resourceName: string) => Promise<string>, resourceName: string);
    getStringAsync(): Promise<string>;
}
