"use strict";

let Aggregation = require ('./Aggregation');

function TermsAggregation(name) {
  Aggregation.apply(this, [name, 'terms']);
}

TermsAggregation.prototype = Object.create(Aggregation.prototype);

TermsAggregation.prototype.setScript = function (script) {
  return Aggregation.prototype.setParam.apply(this, ['script', script]);
};

TermsAggregation.prototype.setScriptParams = function (params) {
  return Aggregation.prototype.setParam.apply(this, ['params', params]);
};

module.exports = TermsAggregation;