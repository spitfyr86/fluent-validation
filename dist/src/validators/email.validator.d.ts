import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class EmailValidator<T> extends PropertyValidator<T> {
    constructor();
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
