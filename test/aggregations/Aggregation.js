"use strict";

let Aggregation = require('./../../lib/aggregations').Aggregation,
    chai = require('chai'),
    expect = chai.expect;

const
    parentName = 'parent',
    siblingName = 'sibling',
    childName = 'child',
    type = 'type',
    parameter = {name: 'paramName', value: 'paramValue'},
    size = {name: 'size', value: 10},
    minDocCount = {name: 'min_doc_count', value: 10};

describe('Aggregation', function () {
    describe('.constructor', function () {
        let aggregation = new Aggregation(parentName, type),
            etalon = {parent: {type: {}}};

        it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    describe('.setParam', function () {
        let aggregation = new Aggregation(parentName, type).setParam(parameter.name, parameter.value),
            etalon = {parent: {type: {paramName: "paramValue"}}};

        it('setParam should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    describe('.setSize', function () {
        let aggregation = new Aggregation(parentName, type).setSize(size.value),
            etalon = {parent: {type: {size: 10}}};

        it('setSize should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    describe('.setMinDocCount', function () {
        let aggregation = new Aggregation(parentName, type).setMinDocCount(minDocCount.value),
            etalon = {parent: {type: {min_doc_count: 10}}};

        it(' should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon));
    });

    describe('.add', function () {
        let parentAggregation = new Aggregation(parentName, type),
            siblingAggregation = new Aggregation(siblingName, type),
            etalonSibling = {
                sibling: {type: {}}
            },
            etalon = {
                parent: {type: {}},
                sibling: {type: {}}
            };

        parentAggregation = parentAggregation.add(siblingAggregation);

        it(' should return Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

        it(' sibling agregation should be unchanged ', () => expect(siblingAggregation.get()).to.be.deep.equal(etalonSibling));

        it(' passing non-Aggregation object shoud throw an error', () => expect(parentAggregation.add, {}).to.throw(TypeError))
    });

    describe('.inject', function () {
        let parentAggregation = new Aggregation(parentName, type),
            childAggregation = new Aggregation(childName, type),
            etalonChild = {
                child: {type: {}}
            },
            etalon = {
                parent: {
                    type: {},
                    aggs: {
                        child: {type: {}}
                    }
                },
            };

        parentAggregation = parentAggregation.inject(childAggregation);

        it(' should return Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

        it(' child agregation should be unchanged ', () => expect(childAggregation.get()).to.be.deep.equal(etalonChild));

        it(' passing non-Aggregation object shoud throw an error', () => expect(parentAggregation.inject, {}).to.throw(TypeError))

    });

    describe('all features', function () {
        let
            parentAggregation = new Aggregation(parentName, type)
                .setParam(parameter.name, parameter.value)
                .setSize(size.value)
                .setMinDocCount(minDocCount.value),
            childAggregation = new Aggregation(childName, type)
                .setParam(parameter.name, parameter.value)
                .setSize(size.value)
                .setMinDocCount(minDocCount.value),
            siblingAggregation = new Aggregation(siblingName, type)
                .setParam(parameter.name, parameter.value)
                .setSize(size.value)
                .setMinDocCount(minDocCount.value),

            etalon = {
                parent: {
                    type: {
                        paramName : 'paramValue',
                        size : 10,
                        min_doc_count:10
                    },
                    aggs: {
                        child: {
                            type: {
                            paramName : 'paramValue',
                            size : 10,
                            min_doc_count:10
                            }
                        }
                    },
                },
                sibling : {
                    type : {
                        paramName : 'paramValue',
                        size : 10,
                        min_doc_count:10
                    }
                }
            };

        parentAggregation = parentAggregation.add(siblingAggregation).inject(childAggregation);

        it(' parentAggregation shoul be an Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        it('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

    });
});