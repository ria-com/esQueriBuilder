"use strict";

let Filter = require ('./Filter');

function BoolFilter() {
  Filter.apply(this, ['bool']);
  // this.conditions = null;
  this.boolFilterConditions = {
    must: [],
    mustNot: [],
    should: []
  };
}

BoolFilter.prototype = Object.create(Filter.prototype);

BoolFilter.prototype.addMust = function (condition) {
  return this.addCondition('must', condition);
};

BoolFilter.prototype.addMustNot = function (condition) {
  return this.addCondition('mustNot', condition);
};

BoolFilter.prototype.addShould = function (condition) {
  return this.addCondition('should', condition);
};

BoolFilter.prototype.get = function () {
  let result = {};
  result.filter = {};
  result.filter[this.type] = {};

  for (let type in this.boolFilterConditions) {
    if (this.boolFilterConditions.hasOwnProperty(type)) {

      if (this.boolFilterConditions[type].length > 0) {
        result.filter[this.type][type] = [];
        for (let condition of this.boolFilterConditions[type]) {
          result.filter[this.type][type].push(condition.get());
        }
      }

    }
  }

  return result;
};

BoolFilter.prototype.addCondition = function(type, condition) {
  Filter.prototype._checkConditionType(condition);
  if (type in this.boolFilterConditions) {
    this.boolFilterConditions[type].push(condition);
  } else {
    throw new RangeError(`Wrong type ${type}`);
  }
  return this;
};

module.exports = BoolFilter;
