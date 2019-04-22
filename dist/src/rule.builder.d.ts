import { ApplyConditionTo } from './enum';
import { PropertyRule } from './property.rule';
import { PropertyValidator } from './validators/property.validator';
import { PropertyValidatorContext } from './validators/property.validator.context';
export declare class RuleBuilder<TInstance, UValue> {
    private rule;
    constructor(rule: PropertyRule<TInstance>);
    validate(valueToValidate: UValue): RuleBuilder<TInstance, UValue>;
    withParameterName(propertyName: string): RuleBuilder<TInstance, UValue>;
    withErrorCode(errorCode: string): RuleBuilder<TInstance, UValue>;
    withMessage(errorMessage: string): RuleBuilder<TInstance, UValue>;
    withLazyLoadMessage(fnLoad: (resourceName: string) => Promise<string>, resourceName: string): RuleBuilder<TInstance, UValue>;
    required(): RuleBuilder<TInstance, UValue>;
    addRule<TProperty>(valueToValidate: TProperty): RuleBuilder<TInstance, TProperty>;
    addValidator(validator: PropertyValidator<TInstance>): RuleBuilder<TInstance, UValue>;
    length(min: number, max: number): RuleBuilder<TInstance, UValue>;
    emailAddress(): RuleBuilder<TInstance, UValue>;
    equal(objectToCompare: {}): RuleBuilder<TInstance, UValue>;
    when(condition: (instance: TInstance) => Promise<boolean>, applyConditionTo?: ApplyConditionTo): RuleBuilder<TInstance, UValue>;
    unless(condition: (instance: TInstance) => Promise<boolean>, applyConditionTo?: ApplyConditionTo): RuleBuilder<TInstance, UValue>;
    must(condition: (model: TInstance, propertyValue: {}, propertyValidatorContext: PropertyValidatorContext<TInstance>) => Promise<boolean>): RuleBuilder<TInstance, UValue>;
    includes(stringLieteral: string): RuleBuilder<TInstance, UValue>;
    range(min: number, max: number): RuleBuilder<TInstance, UValue>;
    negative(): RuleBuilder<TInstance, UValue>;
    positive(): RuleBuilder<TInstance, UValue>;
}
