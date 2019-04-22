import { ApplyConditionTo } from './enum';
import { ValidationFailure } from './results/validation.failure';
import { Validator, ValidatorContext } from './validator';
import { PropertyValidator } from './validators/property.validator';
export declare class PropertyRule<TInstance> {
    propertyValue: {};
    validator: Validator<TInstance>;
    private validators;
    currentValidator: PropertyValidator<TInstance>;
    propertyName: string;
    constructor(propertyValue: {}, validator: Validator<TInstance>);
    validateAsync(validatorContext: ValidatorContext<TInstance>): Promise<ValidationFailure[]>;
    addValidator(validator: PropertyValidator<TInstance>): void;
    applyCondition(condition: (instance: TInstance) => Promise<boolean>, applyConditionTo: ApplyConditionTo): void;
    replaceValidator(original: PropertyValidator<TInstance>, newValidator: PropertyValidator<TInstance>): void;
}
