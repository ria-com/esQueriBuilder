"use strict";

let
    Aggregation = require('./../../lib/aggregations').Aggregation,
    TermsAggregation = require('./../../lib/aggregations').TermsAggregation,
    chai = require('chai'),
    expect = chai.expect;

const
    aggregationName = 'name',
    aggregationType = 'type',
    size = {name:'size', value:10};

describe('TermsAggregation', function () {
  describe('.constrictor', function () {
    let aggregation = new TermsAggregation(aggregationName),
        etalon = { name : { terms : {} } };

    it('new instance should be an Aggregation instance', () => expect(aggregation).to.be.instanceOf(Aggregation));

    it('new instance should be an TermsAggregation instance', () =>  expect(aggregation).to.be.instanceOf(TermsAggregation));

    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))
  });

  describe('.setScript', function () {
    let aggregation = new TermsAggregation(aggregationName).setScript('script').setScriptParams({param1: 'value'}),
        etalon = { name : { terms : { script : 'script', params : {param1 : 'value'}} } };

    it(' new instance should be a TermsAggregation instance', () => expect(aggregation).to.be.instanceOf(TermsAggregation));
    it('`get` result to be equal to etalon', () => expect(aggregation.get()).to.be.deep.equal(etalon))


  })

});