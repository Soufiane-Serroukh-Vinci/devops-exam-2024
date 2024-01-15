// TODO: Refactor validation function to follow the defined validations rules

const isValid = (gamerTag) => {
    if (gamerTag === undefined) return false;
}
describe('validations tests suites - isValid', () => {
    test('should return false if gamertag is undefined', () => {
        const result = isValid(undefined);
        expect(result).toBe(false);
    });
}


exports.isValid = isValid;
