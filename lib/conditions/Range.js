"use strict";

const
    operators = ['gte', 'gt', 'lte', 'lt'];

let Condition = require('./Condition');

function Range() {
  this.ranges = {};
  Condition.apply(this, ['range']);
}

Range.prototype = Object.create(Condition.prototype);

Range.prototype.setField = function (field) {
  this.field = field;
  return this;
};

for (let operator of operators) {
  Range.prototype[operator] = function (value) {
    this.ranges[operator] = value;
    return this;
  }
}

Range.prototype.get = function () {
  Condition.prototype.setParam.apply(this, [this.field, this.ranges]);
  return Condition.prototype.get.apply(this);
};

module.exports = Range;