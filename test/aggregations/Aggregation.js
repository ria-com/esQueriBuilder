"use strict";


let Aggregation = require('./../../lib/aggregations').Aggregation,
    expect = require('expect');

const
    aggregationName = 'name',
    aggregationType = 'type',
    parameter = {name : 'paramName', value:'paramValue'},
    size = {name:'size', value:10},
    minDocCount = {name:'min_doc_count', value:10};

describe('Aggregation', function () {
    describe('creating', function () {
        let aggregation = new Aggregation(aggregationName, aggregationType);

        it('new instance should be an Aggregation instance', function () {
            expect(aggregation).toBeA(Aggregation);
        });

        it(`aggregation.name should be "${aggregationName}"`, function () {
            expect(aggregation.name).toEqual(aggregationName);
        });

        it(`aggregation.type should be "${aggregationType}"`, function () {
            expect(aggregation.type).toEqual(aggregationType);
        });

        it('aggregation.added should be an empty array', function () {
            expect(aggregation.added).toEqual([]);
        });

        it('aggregation.injected should be an empty array', function () {
            expect(aggregation.injected).toEqual([]);
        });

        it('aggregation.params should be an empty array', function () {
            expect(aggregation.params).toEqual([]);
        });
    });

    describe('setParam', function () {
        let aggregation = new Aggregation(aggregationName, aggregationType);

        it('setParam should return Aggregation instance', function () {
            expect(aggregation.setParam(parameter.name, parameter.value)).toBeA(Aggregation);
        });

        it(`setParam function should add parameter ${parameter.name} to an aggregation`, function () {
            expect(aggregation.params).toContain(parameter);
        });
    });

    describe('setSize', function () {
        let aggregation = new Aggregation(aggregationName, aggregationType);

        it('setSize should return Aggregation instance', function () {
            expect(aggregation.setSize(size.value)).toBeA(Aggregation);
        });

        it(`setSize function should add "size" parameter to an aggregation`, function () {
            expect(aggregation.params).toContain(size);
        });
    });

    describe('setMinDocCount', function () {
        let aggregation = new Aggregation(aggregationName, aggregationType);

        it('setMinDocCount should return Aggregation instance', function () {
            expect(aggregation.setMinDocCount(minDocCount.value)).toBeA(Aggregation);
        });

        it(`setSize function should add "min_doc_count" parameter to an aggregation`, function () {
            expect(aggregation.params).toContain(minDocCount);
        });
    });

    /* todo */
    describe('add', function () {

    });

    describe('inject', function () {

    });

    describe('get', function () {

    });
});