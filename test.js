"use strict";

let esQB = require('./index');

let bodyAggr = new esQB.Aggregations.TermsAggregation('body.id')
        .setParam('field', 'body.id')
        .setSize(6)
        .setMinDocCount(10),

    modelAggr = new esQB.Aggregations.TermsAggregation('model.id')
        .setParam('field', 'model.id')
        .setSize(0)
        .setMinDocCount(10),

    scriptAvgPrice = new esQB.Aggregations.AvgAggregation('price')
        .setScript("doc['price.currency.id'].value==2?(doc['price.value'].value*fromEUR):doc['price.currency.id'].value==3?(doc['price.value'].value*fromUAH):doc['price.value'].value", {
          "fromEUR": 1.123,
          "fromUAH": 0.04018
        }),

    topHits = new esQB.Aggregations.TopHitsAggregation('top')
        .setInclude(['photos.main.link'])
        .setSort(new esQB.Sorts.Sort().add(new esQB.Sorts.SortCondition('level.rangeFactor', 'desc')))
        .setSize(1);

scriptAvgPrice.add(topHits);
modelAggr.inject(scriptAvgPrice);
bodyAggr.inject(modelAggr);


let
    onlyActive = new esQB.Conditions.Term().setFieldValue('status', 0),
    brand = new esQB.Conditions.Term().setFieldValue('brand.id', 9),
    filter = new esQB.Fiters.BoolFilter().addMust(onlyActive).addMust(brand),
    query = new esQB.Query.Query().setFiltered(filter).setAggregation(bodyAggr).setSize(0);

console.log(JSON.stringify(query.get(), null, 2));