"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationFailure {
    constructor(propertyName, errorMessage, propertyValue, errorCode) {
        this.propertyName = propertyName;
        this.errorMessage = errorMessage;
        this.propertyValue = propertyValue;
        this.errorCode = errorCode;
    }
    failed() {
        return this.errorMessage ? true : false;
    }
}
exports.ValidationFailure = ValidationFailure;
