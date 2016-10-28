"use strict";

let Aggregation = require ('./Aggregation');

function RangeAggregation(name) {
  Aggregation.apply(this, [name, 'range']);
}

RangeAggregation.prototype = Object.create(Aggregation.prototype);

/*todo move to mixine*/
RangeAggregation.prototype.setField = function (field) {
  Aggregation.prototype.setParam.apply(this, ['field', field]);
  return this;
};

RangeAggregation.prototype.addRanges = function (ranges, keys=[]) {
  let _ranges = [];

  if (keys.length > 0) {
    if (keys.length !== ranges.length) {
      throw new RangeError('Ranges and keys should have same length');
    }
    Aggregation.prototype.setParam.apply(this, ['keyed', true])
  }

  for (let i = 0; i < ranges.length; i++) {

    let range = ranges[i],
        key = keys[i],
        rangeObject = {};

    if (Number.isFinite(range[0])) {
      rangeObject.from = Number(range[0])
    }
    if (Number.isFinite(range[1])) {
      rangeObject.to = Number(range[1])
    }

    if (key) {
      rangeObject.key = key
    }
    _ranges.push(rangeObject)
  }
  return Aggregation.prototype.setParam.apply(this, ['ranges', _ranges]);
};

RangeAggregation.prototype.setScript = function (script) {
  return Aggregation.prototype.setParam.apply(this, ['script', script]);
};

RangeAggregation.prototype.setScriptParams = function (params) {
  return Aggregation.prototype.setParam.apply(this, ['params', params]);
};


module.exports = RangeAggregation;