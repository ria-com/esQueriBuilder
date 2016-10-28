"use strict";

let
    Aggregation = require ('./Aggregation'),
    Term = require('./../conditions/Term');

function FilterAggregation(name) {
  Aggregation.apply(this, [name, 'filter']);
  this.term = null;
}

FilterAggregation.prototype = Object.create(Aggregation.prototype);

FilterAggregation.prototype.setTerm = function (term) {
  if (!(term instanceof Term)) {
    throw new TypeError('Param should be a Term type');
  }
  this.term = term;
  return this;
};

FilterAggregation.prototype.get = function () {
  if (this.term) {
    Aggregation.prototype.setParam.apply(this, ['term', this.term.get().term]);
  }
  return Aggregation.prototype.get.apply(this);
};

module.exports = FilterAggregation;