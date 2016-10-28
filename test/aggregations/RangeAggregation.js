"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    RangeAggregation = require('./../../lib/aggregations').RangeAggregation,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name',
    aggregationType = 'type',
    size = {name:'size', value:10};

describe('RangeAggregation', function () {
  describe('.constrictor', function () {
    let aggregation = new RangeAggregation(aggregationName),
        etalon = { name : { range : {} } };

    it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

    it('new instance should be an RangeAggregation instance', () =>  expect(aggregation).to.be.instanceOf(RangeAggregation));

    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))

  });

  describe('.addRanges', function () {
    let rangesWithoutBounds = [[null, 100], [100, 200], [200, null]],
        keys = [1, 2, 3],
        etalonWithoutBounds = {
          name : {
            range : {
              field : 'fieldName',
              ranges: [
                {to:100, key:1},
                {from: 100, to:200, key:2},
                {from: 200, key:3}
              ]
            }
          }
        },
        rangesWithBounds = [[0, 100], [100, 200], [200, 300]],
        etalonWithBounds = {
          name : {
            range : {
              field : 'fieldName',
              ranges: [
                {from:0, to:100},
                {from: 100, to:200},
                {from: 200, to:300}
              ]
            }
          }
        },
        aggregationWithBounds = new RangeAggregation(aggregationName).setField('fieldName').addRanges(rangesWithBounds),
        aggregationWithOutBounds = new RangeAggregation(aggregationName).setField('fieldName').addRanges(rangesWithoutBounds, keys);

    it('new instance should be an RangeAggregation instance', () =>  expect(aggregationWithBounds).to.be.instanceOf(RangeAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregationWithBounds.get()).to.be.deep.equal(etalonWithBounds));

    it('new instance should be an RangeAggregation instance', () =>  expect(aggregationWithOutBounds).to.be.instanceOf(RangeAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregationWithOutBounds.get()).to.be.deep.equal(etalonWithoutBounds));

  });

  describe('.setScript && .setScriptParams', function () {
    let script = "doc['price'].value*rate",
        params = {rate : 1},
        aggregation = new RangeAggregation(aggregationName).setScript(script).setScriptParams(params),
        etalon = {
          name : {
            range : {
              script,
              params
            }
          }
        };
    it('new instance should be an RangeAggregation instance', () =>  expect(aggregation).to.be.instanceOf(RangeAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon));
  });
});