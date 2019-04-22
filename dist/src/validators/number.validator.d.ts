import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class PositiveValidator<T> extends PropertyValidator<T> {
    constructor();
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
export declare class NegativeValidator<T> extends PropertyValidator<T> {
    constructor();
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
export declare class RangeValidator<T> extends PropertyValidator<T> {
    min: number;
    max: number;
    constructor(min: number, max: number);
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
