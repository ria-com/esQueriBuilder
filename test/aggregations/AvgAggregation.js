"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    AvgAggregation = require('./../../lib/aggregations').AvgAggregation,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name';

describe('AvgAggregation', function () {
    describe('.constrictor', function () {
        let aggregation = new AvgAggregation(aggregationName),
            etalon = {name: {avg: {}}};
        it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));
        it('new instance should be an AvgAggregation instance', () => expect(aggregation).to.be.instanceOf(AvgAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    describe('.setField', function () {
        let aggregation = new AvgAggregation(aggregationName).setField('fieldName'),
            etalon = {name : {avg: { field : 'fieldName' }}};
        it('new instance should be an AvgAggregation instance', () => expect(aggregation).to.be.instanceOf(AvgAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

});