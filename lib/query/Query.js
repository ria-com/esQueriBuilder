"use strict";

let Filter = require('./../filters').Filter,
    BoolFilter = require('./../filters').BoolFilter,
    Aggregation = require('./../aggregations').Aggregation;

function Query() {
  this.filtered = null;
  this.aggregation = null;
  this.size = null;
  this.type = null;
  this.index = null;
}

Query.prototype.setFiltered = function (filter) {
  if (!(filter instanceof Filter)) {
    throw new TypeError('Param should be TermFilter');
  }
  this.filtered = filter;

  return this;
};

Query.prototype.setBool = function (bool) {
	if (!(bool instanceof BoolFilter)) {
		throw new TypeError('Param should be BoolFilter');
	}
	this.bool = bool;

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

Query.prototype.setIndex = function (index) {
  this.index = index;
  return this;
};

Query.prototype.setType = function (type) {
  this.type = type;
  return this;
};

Query.prototype.get = function () {
  let body = {},
      result = {
        index : this.index,
        type : this.type,
        body : body
      };

  body.query = {};

  if (this.filtered !== null) {
    body.query.filtered = this.filtered.get();
  }

  if (this.aggregation !== null) {
    body.aggs = this.aggregation.get();
  }

  if (this.size !== null) {
    body.size = this.size;
  }

	if (this.bool !== null) {
		body.query.bool = this.bool.get();
	}

  return result;
};

module.exports = Query;