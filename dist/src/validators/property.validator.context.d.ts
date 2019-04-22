import { ValidatorContext } from '../validator';
export declare class MessageFormatter {
    private placeholderValues;
    propertyName: string;
    propertyValue: string;
    constructor();
    appendArgument(name: string, value: {}): MessageFormatter;
    appendPropertyName(name: string): MessageFormatter;
    appendPropertyValue(value: {}): MessageFormatter;
    buildMessage(messageTemplate: string): string;
    private getPlaceholder(key);
}
export declare class PropertyValidatorContext<T> {
    propertyValue: any;
    propertyName: string;
    instanceToValidate: T;
    validatorContext: ValidatorContext<T>;
    messageFormatter: MessageFormatter;
    constructor();
}
