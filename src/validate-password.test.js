import { validatePassword } from "./validate-password";

describe('validatePassword', () => {
    it('should return true for a valid password', () => {
        const validPassword = 'myPassword123!';

        expect(validatePassword(validPassword)).toBe(true);
    });

    it('should validate a password against 8 minimum characters', () => {
        const invalidPassword = 'Pass67!';

        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should validate a password against mixed case', () => {
        const invalidPassword = 'mypassword123!';
        const invalidPassword2 = 'MYPASSWORD123!';

        expect(validatePassword(invalidPassword)).toBe(false);
        expect(validatePassword(invalidPassword2)).toBe(false);
    });

    it('should validate a password against digits and characters', () => {
        const invalidPassword = 'myPassword@#!';
        const invalidPassword2 = 'myPassword&**';

        expect(validatePassword(invalidPassword)).toBe(false);
        expect(validatePassword(invalidPassword2)).toBe(false);
    });

    it('should validate a password agains special character', () => {
        const invalidPassword = 'MyPassword123';

        expect(validatePassword(invalidPassword)).toBe(false);
    });
});