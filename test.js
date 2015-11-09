require('mocha');
require('should');
var replace = require('./index.js');

describe('replace', function () {
  it('should replace the given string:', function () {
    replace.thousands('12345678.9999').should.eql('12,345,678.999,9')
    replace.bankCard('6222021********1245').should.eql('6222 021* **** ***1 245')
    replace.mobilePhone('13812345678','-').should.eql('138-1234-5678')
  });
  it('should throw an error:', function () {
      (function () {
        replace.thousands();
        replace.bankCard();
        replace.mobilePhone();
      }).should.throw('expected a string.');
    });
});