"use strict";

let Aggregation = require ('./Aggregation');

function AvgAggregation(name) {
  Aggregation.apply(this, [name, 'avg']);
}

AvgAggregation.prototype = Object.create(Aggregation.prototype);

AvgAggregation.prototype.setField = function (field) {
  Aggregation.prototype.setParam.apply(this, ['field', field]);
  return this;
};

AvgAggregation.prototype.setScript = function (script, params) {
  Aggregation.prototype.setParam.apply(this, ['script', script]);
  Aggregation.prototype.setParam.apply(this, ['params', params]);
  return this;
};

module.exports = AvgAggregation;