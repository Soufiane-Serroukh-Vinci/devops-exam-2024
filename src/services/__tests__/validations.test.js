// validation.js

// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    const isLengthValid = gamertag.length >= 8;
    return isLengthValid && Math.random() >= 0.5;
};

exports.isValid = isValid;
// validations.test.js

  const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid('somegamertag');
        expect(result).toBeDefined();
    });

    test('should return false for gamertags with length less than 8 characters', () => {
        const result = isValid('short');
        expect(result).toBeFalsy();
    });

    test('should return true for gamertags with length equal to or greater than 8 characters', () => {
        const result = isValid('validgamertag');
        expect(result).toBeTruthy();
    });
});