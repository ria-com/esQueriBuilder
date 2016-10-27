"use strict";

let Aggregation = require ('./Aggregation');

function RangeAggregation(name) {
  Aggregation.apply(this, [name, 'range']);
  this.range = null;
}

RangeAggregation.prototype = Object.create(Aggregation.prototype);

RangeAggregation.prototype.addRanges = function (range) {
  this.range = range;
  return this
};

module.exports = RangeAggregation;