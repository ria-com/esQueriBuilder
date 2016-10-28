"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    TopHitsAggregation = require('./../../lib/aggregations').TopHitsAggregation,
    Sort = require('./../../lib/sort').Sort,
    SortCondition = require('./../../lib/sort').SortCondition,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name',
    aggregationType = 'type',
    size = {name: 'size', value: 10};

describe('TopHitsAggregation', function () {
    describe('.constrictor', function () {
        let aggregation = new TopHitsAggregation(aggregationName),
            etalon = {name: {top_hits: {}}};

        it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));
        it('new instance should be an TopHitsAggregation instance', () => expect(aggregation).to.be.instanceOf(TopHitsAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))

    });

    describe('.setSort', function () {
        let sortCondition = new SortCondition('fieldName', SortCondition.prototype.ASC),
            sort = new Sort().add(sortCondition),
            aggregation = new TopHitsAggregation(aggregationName).setSort(sort),
            etalon = {
                name: {
                    top_hits: {
                        sort: [
                            {
                                fieldName: {
                                    order: 'asc'
                                }
                            }
                        ]
                    }
                }
            };

        it('new instance should be an TopHitsAggregation instance', () => expect(aggregation).to.be.instanceOf(TopHitsAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))

    });

    describe('.setSource', function () {
        let
            aggregationInclude = new TopHitsAggregation(aggregationName).setSource('include', ['field']),
            etalonInclude = {
                name: {
                    top_hits: {
                        _source : {
                            include : ['field']
                        }
                    }
                }
            },
            aggregationExclude = new TopHitsAggregation(aggregationName).setSource('exclude', ['field']),
            etalonExclude = {
                name: {
                    top_hits: {
                        _source : {
                            exclude : ['field']
                        }
                    }
                }
            };


        it('new instance should be an TopHitsAggregation instance', () => expect(aggregationInclude).to.be.instanceOf(TopHitsAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregationInclude.get()).to.be.deep.equal(etalonInclude))

        it('new instance should be an TopHitsAggregation instance', () => expect(aggregationExclude).to.be.instanceOf(TopHitsAggregation));
        it('`get` result to be equal to etalon', () => expect(aggregationExclude.get()).to.be.deep.equal(etalonExclude))

    })

});