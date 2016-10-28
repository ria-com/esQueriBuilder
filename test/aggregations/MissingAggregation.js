"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    MissingAggregation = require('./../../lib/aggregations').MissingAggregation,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name';

describe('MissingAggregation', function () {
    describe('.constrictor', function () {
        let aggregation = new MissingAggregation(aggregationName),
            etalon = {name: {missing: {}}};
        it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));
        it('new instance should be an MissingAggregation instance', () => expect(aggregation).to.be.instanceOf(MissingAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });
});