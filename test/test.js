var assert = require('assert');
var prueba = require('../dec2rom.js');

describe("Test parse Decimal to Roman", function() {
    it('should be equal to I', function() {
        assert.equal('I', prueba.dec2rom(1));
    });
    it('should be equal  to V', function() {
        assert.equal('V', prueba.dec2rom(5));
    });
    it('should be equal  to XX', function() {
        assert.equal('XX', prueba.dec2rom(20));
    });
    it('should be equal  to LIV', function() {
        assert.equal('LIV', prueba.dec2rom(54));
    });
    it('should be equal  to MMCD', function() {
        assert.equal('MMCD', prueba.dec2rom(20400));
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});