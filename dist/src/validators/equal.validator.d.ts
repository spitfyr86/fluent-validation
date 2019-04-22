import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class EqualValidator<T> extends PropertyValidator<T> {
    valueToCompare: {};
    constructor(valueToCompare: {});
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
