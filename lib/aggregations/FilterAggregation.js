"use strict";

let
    Aggregation = require ('./Aggregation'),
    Filter = require('./../filters/Filter'),
    Term = require('./../conditions/Term');

function FilterAggregation(name) {
  Aggregation.apply(this, [name, 'filter']);
  this.filter = null;
}

FilterAggregation.prototype = Object.create(Aggregation.prototype);

FilterAggregation.prototype.setFilter = function (filter) {
  if (!(filter instanceof Filter)) {
    throw new TypeError('Param should be a Filter type');
  }
  this.filter = filter;
  return this;
};

FilterAggregation.prototype.get = function () {
  if (this.filter) {
    /* todo refactor "this.filter.get().filter.term" */
    Aggregation.prototype.setParam.apply(this, ['term', this.filter.get().filter.term]);
  }
  return Aggregation.prototype.get.apply(this);
};

module.exports = FilterAggregation;