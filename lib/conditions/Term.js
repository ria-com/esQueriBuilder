"use strict";

let Condition = require('./Condition');


function Term() {
  Condition.apply(this, ['term']);
}

Term.prototype = Object.create(Condition.prototype);

Term.prototype.setFieldValue = function (field, value) {
  Condition.prototype.setParam.apply(this, [field, value]);
  return this;
};

module.exports = Term;