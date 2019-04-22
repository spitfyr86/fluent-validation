import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare type Predicate<T> = (instanceToValidate: T, propertyValue: {}, propertyValidatorContext: PropertyValidatorContext<T>) => Promise<boolean>;
export declare class PredicateValidator<T> extends PropertyValidator<T> {
    private predicate;
    constructor(predicate: Predicate<T>);
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
