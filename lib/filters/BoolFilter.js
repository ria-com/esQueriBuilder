"use strict";

let Filter = require ('./Filter'),
    Bool  = require('./../conditions/Bool');

function BoolFilter() {
  Filter.apply(this, ['bool']);
  this.conditions = new Bool();
}

BoolFilter.prototype = Object.create(Filter.prototype);

BoolFilter.prototype.addMust = function (condition) {
  this.conditions.addMust(condition);
  return this;
};

BoolFilter.prototype.addMustNot = function (condition) {
  this.conditions.addMustNot(condition);
  return this;
};

BoolFilter.prototype.addShould = function (condition) {
  this.conditions.addShould(condition);
  return this;
};

BoolFilter.prototype.get = function () {
  let result = {};
  result.filter = this.conditions.get();
  return result;
};

module.exports = BoolFilter;
