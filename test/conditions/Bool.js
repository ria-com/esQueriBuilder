"use strict";

let Condition = require('./../../lib/conditions').Condition,
    Bool = require('./../../lib/conditions').Bool,
    Term = require('./../../lib/conditions/Term'),
    chai = require('chai'),
    expect = chai.expect;

describe('Bool', function () {
  describe('.constructor', function () {
    let condition = new Bool(),
        etalon = {
          bool: {}
        };

    it(' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));
    it(' new instance should be a Bool instance', () => expect(condition).to.be.instanceOf(Bool));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.addCondition', function () {
    let term = new Term().setFieldValue('field', 'value'),
        bool = new Bool().addCondition('must', term).addCondition('should', term).addCondition('must_not', term),
        etalon = {
          bool: {
            must: [
              {
                term: {
                  field: 'value'
                }
              }
            ],
            should: [
              {
                term: {
                  field: 'value'
                }
              }
            ],
            must_not: [
              {
                term: {
                  field: 'value'
                }
              }
            ]
          }
        };

    it(' new instance should be a Bool instance', () => expect(bool).to.be.instanceOf(Bool));
    it('`get` result to be equal to etalon', () => expect(bool.get()).to.be.deep.equal(etalon))
  });

  describe('.addMust, addShould, addMustNot',function () {
    let term = new Term().setFieldValue('field', 'value'),
        bool = new Bool().addMust(term).addShould(term).addMustNot(term),
        etalon = {
          bool: {
            must: [
              {
                term: {
                  field: 'value'
                }
              }
            ],
            should: [
              {
                term: {
                  field: 'value'
                }
              }
            ],
            must_not: [
              {
                term: {
                  field: 'value'
                }
              }
            ]
          }
        };

    it(' new instance should be a Bool instance', () => expect(bool).to.be.instanceOf(Bool));
    it('`get` result to be equal to etalon', () => expect(bool.get()).to.be.deep.equal(etalon))
  })
});
