import { ValidationFailure } from './validation.failure';
export declare class ValidationResult {
    errors: ValidationFailure[];
    constructor(errors: ValidationFailure[]);
    isValid(): boolean;
}
