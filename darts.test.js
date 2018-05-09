const Darts = require('./darts');

beforeEach(() => {
    return instance = new Darts(["Anna", "Misha", "Oleg"]);
});

describe('test getScore functionality', () => {
    test('get score', () => {
        expect(instance.getScore("Anna")).toBe(0);
    });
    test('get score error', () => {
        expect(() => instance.getScore("Vlad")).toThrowError(Error);
    });
});


describe('test setScore functionality', () => {
    test('set score', () => {
        expect(instance.setScore("Anna", 10, 2)).toBe(20);
    });
    test('set score error', () => {
        expect(() => instance.getScore("Vlad")).toThrowError(Error);
    });

});


describe('test throw functionality', () => {
    test('throw', () => {
        expect(instance.throw(20, 2)).toEqual(40);
    });
    test('throw error', () => {
        expect(() => instance.throw("Vlad", 20)).toThrowError(TypeError);
    });
});