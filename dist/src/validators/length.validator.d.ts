import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class LengthValidator<T> extends PropertyValidator<T> {
    minLength: number;
    maxLength: number;
    constructor(minLength: number, maxLength: number);
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
