"use strict";

let Aggregation = require ('./Aggregation');

function MissingAggregation(name) {
  Aggregation.apply(this, [name, 'missing']);
}

MissingAggregation.prototype = Object.create(Aggregation.prototype);

module.exports = MissingAggregation;