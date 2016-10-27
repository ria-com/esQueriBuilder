"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    RangeAggregation = require('./../../lib/aggregations').RangeAggregation,
    expect = require('expect');

const
    aggregationName = 'name',
    aggregationType = 'type',
    size = {name:'size', value:10};

describe('RangeAggregation', function () {
  describe('creating', function () {
    let aggregation = new RangeAggregation(aggregationName);

    it('new instance should be an Aggregation instance', function () {
      expect(aggregation).toBeA(Aggregation);
    });

    it('new instance should be an RangeAggregation instance', function () {
      expect(aggregation).toBeA(RangeAggregation);
    });

  });
});