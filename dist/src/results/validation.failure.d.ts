export declare class ValidationFailure {
    propertyName: string;
    errorMessage: string;
    propertyValue: {};
    errorCode: string;
    constructor(propertyName: string, errorMessage: string, propertyValue: {}, errorCode: string);
    failed(): boolean;
}
