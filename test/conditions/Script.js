"use strict";

let Condition = require('./../../lib/conditions').Condition,
  Script = require('./../../lib/conditions').Script,
  chai = require('chai'),
  expect = chai.expect;

describe('Script', function () {
  describe('.constructor', function () {
    let condition = new Script(),
      etalon = {
        script: {}
      };

    it(' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));
    it(' new instance should be a Script instance', () => expect(condition).to.be.instanceOf(Script));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setScript', function () {
    let condition = new Script().setScript('script'),
      etalon = {
        script: {
          script: 'script'
        }
      };

    it(' new instance should be a Script instance', () => expect(condition).to.be.instanceOf(Script));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setScriptParams', function () {
    let condition = new Script().setScriptParams({param1: 'value'}),
      etalon = {
        script: {
          params: {
            param1: 'value'
          }
        }
      };

    it(' new instance should be a Script instance', () => expect(condition).to.be.instanceOf(Script));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  })

});
