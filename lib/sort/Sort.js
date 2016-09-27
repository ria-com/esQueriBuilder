"use strict";

let SortCondition = require('./SortCondition');

function Sort() {
  this.sortConditions = [];
}

Sort.prototype.add = function (condition) {
  if (!(condition instanceof SortCondition)) {
    throw new TypeError('Param should be a SortCondition');
  }
  this.sortConditions.push(condition);
  return this;
};

Sort.prototype.get = function () {
  let result = [];
  for (let condition of this.sortConditions) {
    result.push(condition.get());
  }
  return result;
};

module.exports = Sort;