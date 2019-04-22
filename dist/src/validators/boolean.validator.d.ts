import { PropertyValidatorContext } from './property.validator.context';
import { PropertyValidator } from './property.validator';
export declare class BooleanValidator<T> extends PropertyValidator<T> {
    constructor();
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
