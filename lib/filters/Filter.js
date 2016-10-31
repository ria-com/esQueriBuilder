"use strict";

let Condition = require ('./../conditions/Condition');

function Filter(type) {
  this.type = type;
  this.conditions = [];
}

Filter.prototype.get = function () {
  let result = {};
  result.filter = {};
  result.filter[this.type] = {};

  for (let condition of this.conditions) {
    result.filter[this.type].push(condition.get());
  }

  return result;
};

Filter.prototype.addCondition = function (condition) {
  this._checkConditionType(condition);
  this.conditions.push(condition);
  return this;
};

Filter.prototype._checkConditionType = function (condition) {
  if (!(condition instanceof Condition)) {
    throw new TypeError('Param should be Condition');
  }
};

module.exports = Filter;