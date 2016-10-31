"use strict";

let BoolFilter = require('./../../lib/filters').BoolFilter,
    Filter = require('./../../lib/filters').Filter,
    Bool = require('./../../lib/conditions').Bool,
    Term = require('./../../lib/conditions').Term,
    chai = require('chai'),
    expect = chai.expect;

describe('BoolFilter', function () {
  describe('.constructor', function () {
    let boolFilter = new BoolFilter(),
        etalon = {
          filter: {
            bool: {}
          }
        };

    it('new instance should be a TermFilter instance', () => expect(boolFilter).to.be.instanceOf(Filter));
    it('new instance should be a BoolFilter instance', () => expect(boolFilter).to.be.instanceOf(BoolFilter));
    it('`get` result to be equal to etalon', () => expect(boolFilter.get()).to.be.deep.equal(etalon))
  });

  describe('.addMust, addShould, addMustNot', function () {
    let term = new Term().setFieldValue('field', 'value'),
        bool = new BoolFilter().addMust(term).addShould(term).addMustNot(term),
        etalon = {
          filter: {
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
          }
        };

    it(' new instance should be a Bool instance', () => expect(bool).to.be.instanceOf(BoolFilter));
    it('`get` result to be equal to etalon', () => expect(bool.get()).to.be.deep.equal(etalon))
  });
});