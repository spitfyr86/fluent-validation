import { PropertyValidator } from './property.validator';
import { PropertyValidatorContext } from './property.validator.context';
export declare class DelegatingValidator<T> extends PropertyValidator<T> {
    private condition;
    private innerValidator;
    constructor(condition: (instance: T) => Promise<boolean>, innerValidator: PropertyValidator<T>);
    private _delegatingValidateAsync(context);
    isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
}
