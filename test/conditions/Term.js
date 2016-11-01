"use strict";

let
  Condition = require('./../../lib/conditions').Condition,
  Term = require('./../../lib/conditions').Term,
  chai = require('chai'),
  expect = chai.expect;

describe('Term', function () {
  describe('.constructor', function () {
    let condition = new Term(),
      etalon = {
        term: {}
      };

    it(' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));
    it(' new instance should be a Term instance', () => expect(condition).to.be.instanceOf(Term));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setFieldValue', function () {
    let condition = new Term().setFieldValue('field', 'value'),
      etalon = {
        term: {
          field: 'value'
        }
      };

    it(' new instance should be a Term instance', () => expect(condition).to.be.instanceOf(Term));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

});
