import { validatePassword } from "./validate-password";
import { passwordValidationErrors } from "./constants";

describe('validatePassword', () => {
    it('should return {success: true, error: null} for a valid password', () => {
        const validPassword = 'myPassword123!';

        expect(validatePassword(validPassword)).toEqual({
            success: true,
            error: null
        });
    });

    it('should validate a password against 8 minimum characters and return error message', () => {
        const invalidPassword = 'Pass67!';
        const expectedResult = {
            success: false,
            error: passwordValidationErrors.length
        };

        expect(validatePassword(invalidPassword)).toEqual(expectedResult);
    });

    it('should validate a password against mixed case and return error message', () => {
        const invalidPassword = 'mypassword123!';
        const invalidPassword2 = 'MYPASSWORD123!';
        const expectedResult = {
            success: false,
            error: passwordValidationErrors.case
        };

        expect(validatePassword(invalidPassword)).toEqual(expectedResult);
        expect(validatePassword(invalidPassword2)).toEqual(expectedResult);
    });

    it('should validate a password against digits and characters and return error message', () => {
        const invalidPassword = 'myPassword@#!';
        const invalidPassword2 = 'myPassword&**';
        const expectedResult = {
            success: false,
            error: passwordValidationErrors.number
        };

        expect(validatePassword(invalidPassword)).toEqual(expectedResult);
        expect(validatePassword(invalidPassword2)).toEqual(expectedResult);
    });

    it('should validate a password agains special character and return error message', () => {
        const invalidPassword = 'MyPassword123';
        const expectedResult = {
            success: false,
            error: passwordValidationErrors.special
        };

        expect(validatePassword(invalidPassword)).toEqual(expectedResult);
    });
});