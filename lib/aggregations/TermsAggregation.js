"use strict";

let Aggregation = require ('./Aggregation');

function TermsAggregation(name) {
  Aggregation.apply(this, [name, 'terms']);
}

TermsAggregation.prototype = Object.create(Aggregation.prototype);

module.exports = TermsAggregation;