import assert from 'node:assert/strict';
import {describe, it} from 'node:test';
import {calculatePossibilities, calculateProbability} from "./probability.mjs";

describe('K-sided probability suite tests', async () => {
    describe("calculate probability", async () => {
        it('should returns probability = 1 when the number of possibilities is 1', async () => {
            let result = calculateProbability(1);
            assert.equal(result, 1);
        });
        it('should calculates and returns correct probability for k=6', async () => {
            let result = calculateProbability(6);
            assert.equal(result, 0.18772080408648492);
        });
        it('should returns error if numberOfAllPossibilities is less than or equal 0', () => {
            try {
                calculateProbability(0);
                assert.fail("it should throw error if numberOfAllPossibilities is less than or equal 0");
            } catch (error) {
                assert.equal(error.message, "numberOfAllPossibilities must be greater than 0");
            }
            try {
                calculateProbability(-5);
                assert.fail("it should throw error if numberOfAllPossibilities is less than or equal 0");
            } catch (error) {
                assert.equal(error.message, "numberOfAllPossibilities must be greater than 0");
            }
        });
    });
    describe("calculate range of possibilities", async () => {
        it('should returns error if K is out of range (6 thru 99)', () => {
            try {
                calculatePossibilities(5)
                assert.fail("it should throw error if numberOfAllPossibilities is out of range")
            } catch (error) {
                assert.equal(error.message, "k must be between 6 and 99")
            }
            try {
                calculatePossibilities(100)
                assert.fail("it should throw error if k is out of range")
            } catch (error) {
                assert.equal(error.message, "k must be between 6 and 99")
            }
        });
        it('should returns a list of possibilities', () => {
            let result = calculatePossibilities(6)
            assert.equal(result.length, 1)
            result = calculatePossibilities(99)
            assert.equal(result.length, 94)
        });
    });
});
