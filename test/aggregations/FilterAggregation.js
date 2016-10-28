"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    FilterAggregation = require('./../../lib/aggregations').FilterAggregation,
    Filters = require('./../../lib/filters').Filter,
    TermCondition = require('./../../lib/conditions').Term,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name',
    aggregationType = 'type',
    size = {name:'size', value:10};

describe('FilterAggregation', function () {
  describe('.constrictor', function () {
    let aggregation = new FilterAggregation(aggregationName),
        etalon = { name : { filter : {} } };
    it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));
    it('new instance should be an FilterAggregation instance', () =>  expect(aggregation).to.be.instanceOf(FilterAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
  });

  describe('.setTerm', function () {
    let term = new TermCondition().setFieldValue('field', 'value'),
        aggregation = new FilterAggregation(aggregationName).setTerm(term),
        etalon = {
          name : {
            filter : {
              term : {
                field : 'value'
              }
            }
          }
        };

    it('new instance should be an FilterAggregation instance', () =>  expect(aggregation).to.be.instanceOf(FilterAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
  });

});