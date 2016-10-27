"use strict";

let Aggregation = require('./../../lib/aggregations').Aggregation,
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

const
    parentName = 'parent',
    siblingName = 'sibling',
    childName = 'child',
    type = 'type',
    parameter = {name: 'paramName', value: 'paramValue'},
    size = {name: 'size', value: 10},
    minDocCount = {name: 'min_doc_count', value: 10};

suite('Aggregation', function () {
    suite('.constructor', function () {
        let aggregation = new Aggregation(parentName, type),
            etalon = {parent: {type: {}}};

        test('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    suite('.setParam', function () {
        let aggregation = new Aggregation(parentName, type).setParam(parameter.name, parameter.value),
            etalon = {parent: {type: {paramName: "paramValue"}}};

        test('setParam should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    suite('.setSize', function () {
        let aggregation = new Aggregation(parentName, type).setSize(size.value),
            etalon = {parent: {type: {size: 10}}};

        test('setSize should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
    });

    suite('.setMinDocCount', function () {
        let aggregation = new Aggregation(parentName, type).setMinDocCount(minDocCount.value),
            etalon = {parent: {type: {min_doc_count: 10}}};

        test(' should return Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon));
    });

    /* todo */
    suite('.add', function () {
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

        test(' should return Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

        test(' sibling agregation should be unchanged ', () => expect(siblingAggregation.get()).to.be.deep.equal(etalonSibling));

        test(' passing non-Aggregation object shoud throw an error', () => expect(parentAggregation.add, {}).to.throw(TypeError))
    });

    suite('inject', function () {
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

        test(' should return Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

        test(' child agregation should be unchanged ', () => expect(childAggregation.get()).to.be.deep.equal(etalonChild));

        test(' passing non-Aggregation object shoud throw an error', () => expect(parentAggregation.inject, {}).to.throw(TypeError))

    });

    suite('all features', function () {
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

        test(' parentAggregation shoul be an Aggregation instance', () => expect(parentAggregation).to.be.instanceOf(Aggregation));

        test('`get` result to be equal to etalon', () => expect(parentAggregation.get()).to.be.deep.equal(etalon));

    });
});