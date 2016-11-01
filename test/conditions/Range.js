"use strict";

let Condition = require('./../../lib/conditions').Condition,
  Range = require('./../../lib/conditions').Range,
  chai = require('chai'),
  expect = chai.expect;

describe('Range', function () {
  describe('.constructor', function () {
    let condition = new Range(),
      etalon = {
        range: {}
      };

    it(' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));
    it(' new instance should be a Range instance', () => expect(condition).to.be.instanceOf(Range));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.setField', function () {
    let condition = new Range().setField('field'),
      etalon = {
        range: {
          field: {}
        }
      };

    it(' new instance should be a Range instance', () => expect(condition).to.be.instanceOf(Range));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });

  describe('.gte, .gt, .lte, .lt', function () {
    let condition = new Range().setField('field').gte(1).gt(2).lt(4).lte(5),
      etalon = {
        range: {
          field: {
            gte : 1,
            gt : 2,
            lt : 4,
            lte : 5
          }
        }
      };

    it(' new instance should be a Range instance', () => expect(condition).to.be.instanceOf(Range));
    it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
  });
});
