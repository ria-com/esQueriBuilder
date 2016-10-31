"use strict";

let TermFilter = require('./../../lib/filters').TermFilter,
    Filter = require('./../../lib/filters').Filter,
    Term = require('./../../lib/conditions').Term,
    chai = require('chai'),
    expect = chai.expect;

describe('TermFilter', function () {
  describe('.constructor', function () {
    let termFilter = new TermFilter(),
        etalon = {
          filter: {
            term: {}
          }
        };

    it('new instance should be a Filter instance', () => expect(termFilter).to.be.instanceOf(Filter));
    it('new instance should be a TermFilter instance', () => expect(termFilter).to.be.instanceOf(TermFilter));
    it('`get` result to be equal to etalon', () => expect(termFilter.get()).to.be.deep.equal(etalon))
  });

  describe('.addTerm', function () {
    let term = new Term().setFieldValue('field', 'value'),
        termFilter = new TermFilter().addTerm(term),
        etalon = {
          filter: {
            term: {
              field : 'value'
            }
          }
        };

    it('new instance should be a TermFilter instance', () => expect(termFilter).to.be.instanceOf(TermFilter));
    it('`get` result to be equal to etalon', () => expect(termFilter.get()).to.be.deep.equal(etalon))

  });

});