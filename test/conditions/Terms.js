"use strict";

let
  Condition = require('./../../lib/conditions').Condition,
  Terms = require('./../../lib/conditions').Terms,
  chai = require('chai'),
  expect = chai.expect;

describe('Terms', function () {
  describe('.constructor', function () {
    let condition = new Terms(),
      etalon = {
        terms: {}
      };

    it(' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));
    it(' new instance should be a Terms instance', () => expect(condition).to.be.instanceOf(Terms));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setFieldValue (pass single value)', function () {
    let condition = new Terms().setFieldValue('field', 'value'),
      etalon = {
        terms: {
          field: ['value']
        }
      };

    it(' new instance should be a Terms instance', () => expect(condition).to.be.instanceOf(Terms));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setFieldValue (pass array)', function () {
    let condition = new Terms().setFieldValue('field', [1, 2]),
      etalon = {
        terms: {
          field: [1, 2]
        }
      };

    it(' new instance should be a Terms instance', () => expect(condition).to.be.instanceOf(Terms));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

});
