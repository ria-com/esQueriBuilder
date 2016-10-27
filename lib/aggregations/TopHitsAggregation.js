"use strict";

let Aggregation = require ('./Aggregation'),
    Sort = require('./../sort/Sort');

function TopHitsAggregation(name) {
  Aggregation.apply(this, [name, 'top_hits']);
  this.sort = null;
  this.source = null;
}

TopHitsAggregation.prototype = Object.create(Aggregation.prototype);


TopHitsAggregation.prototype.setSort = function(sort) {
  if (!(sort instanceof Sort)) {
    throw new TypeError('Param should be a Sort type');
  }
  this.sort = sort;
  return this;
};

TopHitsAggregation.prototype.setSource = function (section, value) {
  if (!this.source) {
    this.source = {};
  }
  this.source[section] = value;
  return this;
};

TopHitsAggregation.prototype.setInclude = function(fieldsList) {
  return this.setSource('include', fieldsList);
};

TopHitsAggregation.prototype.setExclude = function (fieldsList) {
  return this.setSource('exclude', fieldsList);
};

TopHitsAggregation.prototype.get = function () {
  if (this.sort) {
    Aggregation.prototype.setParam.apply(this, ['sort', this.sort.get()]);
  }

  if (this.source) {
    Aggregation.prototype.setParam.apply(this, ['_source', this.source]);
  }

  return Aggregation.prototype.get.apply(this);
};


module.exports = TopHitsAggregation;