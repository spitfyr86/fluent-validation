import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class RequiredPropertyValidator<T> extends PropertyValidator<T> {
    constructor();
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
    private isEmptyCollection(propertyValue);
    private isEmptyString(value);
}
