"use strict";

let Filter = require('./../filters').Filter,
    Aggregation = require('./../aggregations').Aggregation;

function Query() {
  this.filtered = null;
  this.aggregation = null;
  this.size = null;
}

Query.prototype.setFiltered = function (filter) {
  if (!(filter instanceof Filter)) {
    throw new TypeError('Param should be Filter');
  }
  this.filtered = filter;

  return this;
};

Query.prototype.setAggregation = function (aggregation) {
  if (!(aggregation instanceof Aggregation)) {
    throw new TypeError('Param should be na Aggregation isntance');
  }
  this.aggregation = aggregation;

  return this;
};

Query.prototype.setSize = function (size) {
  this.size = size;
  return this;
};

Query.prototype.get = function () {
  let result = {};
  result.query = {};

  if (this.filtered !== null) {
    result.query.filtered = this.filtered.get();
  }

  if (this.aggregation !== null) {
    result.aggs = this.aggregation.get().aggs;
  }

  if (this.size !== null) {
    result.size = this.size;
  }

  return result;
};

module.exports = Query;