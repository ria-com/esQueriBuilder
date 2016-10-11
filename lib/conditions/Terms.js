"use strict";

let Condition = require('./Condition');


function Terms() {
  Condition.apply(this, ['terms']);
}

Terms.prototype = Object.create(Condition.prototype);

Terms.prototype.setFieldValue = function (field, value) {
  let _value = value;
  if (!Array.isArray(value)) {
    _value = [value]
  }
  Condition.prototype.setParam.apply(this, [field, _value]);
  return this;
};

module.exports = Terms;