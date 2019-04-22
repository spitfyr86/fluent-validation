import { CascadeMode } from './enum';
import { ValidationResult } from './results/validation.result';
import { RuleBuilder } from './rule.builder';
export declare class ValidatorContext<T> {
    instanceToValidate: T;
    cascade: CascadeMode;
    constructor(instanceToValidate: T);
}
export declare class Validator<TInstance> {
    private cascadeMode;
    private rules;
    constructor(cascadeMode?: CascadeMode);
    validateAsync(instanceToValidate: TInstance): Promise<ValidationResult>;
    addRule<TProperty>(valueToValidate: TProperty): RuleBuilder<TInstance, TProperty>;
}
