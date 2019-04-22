import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class IncludesValidator<T> extends PropertyValidator<T> {
    stringLiteral: string;
    constructor(stringLiteral: string);
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
