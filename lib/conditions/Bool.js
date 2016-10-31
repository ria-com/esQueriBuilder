"use strict";

let Condition = require('./Condition');

function Bool() {
  this.ranges = {};
  Condition.apply(this, ['bool']);
  this.bool = {
    must: [],
    must_not: [],
    should: [],
  }
}

Bool.prototype = Object.create(Condition.prototype);

Bool.prototype.addMust = function (condition) {
  return this.addCondition('must', condition);
};

Bool.prototype.addMustNot = function (condition) {
  return this.addCondition('must_not', condition);
};

Bool.prototype.addShould = function (condition) {
  return this.addCondition('should', condition);
};

Bool.prototype.addCondition = function (type, condition) {
  if (!(condition instanceof Condition)) {
    throw new TypeError('Param should be Condition');
  }
  if (type in this.bool) {
    this.bool[type].push(condition);
  } else {
    throw new RangeError(`Wrong type ${type}`);
  }
  return this;
};

Bool.prototype.get = function () {
  for (let key in this.bool) {
    if (this.bool[key].length) {
      let result = [];
      for (let condition of this.bool[key]) {
        result.push(condition.get())
      }
      Condition.prototype.setParam.apply(this, [key, result]);
    }
  }

  return Condition.prototype.get.apply(this);
};

module.exports = Bool;