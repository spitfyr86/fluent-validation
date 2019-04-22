import { ValidationFailure } from '../results/validation.failure';
import { StringSource } from '../string.source';
import { PropertyValidatorContext } from './property.validator.context';
export declare abstract class PropertyValidator<T> {
    errorSource: StringSource;
    errorCode: string;
    protected onValidateAsync: (context: PropertyValidatorContext<T>) => Promise<ValidationFailure[]>;
    abstract isValid(context: PropertyValidatorContext<T>): Promise<boolean>;
    constructor(errorMessage: string);
    validateAsync(context: PropertyValidatorContext<T>): Promise<ValidationFailure[]>;
    private privateValidateAsync(context);
}
