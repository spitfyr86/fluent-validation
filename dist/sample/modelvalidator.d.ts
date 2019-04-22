import { ValidationResult } from '../src/index';
export declare class PersonViewModel {
    email: string;
    age: number;
}
export declare let PersonValidateAsync: (model: PersonViewModel) => Promise<ValidationResult>;
