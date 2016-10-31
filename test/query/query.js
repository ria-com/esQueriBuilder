"use strict";

let
    Query = require('./../../lib/query').Query,
    Term = require('./../../lib/conditions').Term,
    BoolFilter = require('./../../lib/filters').BoolFilter,
    chai = require('chai'),
    expect = chai.expect;


describe('Query', function () {
  describe('.constructor', function () {
    let query = new Query(),
        etalon = {
          index : null,
          type : null,
          body : {
            query : {}
          }
        };
    it('new instance should be an Query instance', () => expect(query).to.be.instanceOf(Query));
    it('`get` result should be equal to etalon', () => expect(query.get()).to.be.deep.equal(etalon))
  });

  describe('.setFiltered', function () {
    let term = new Term().setFieldValue('field', 'value'),
        boolFilter = new BoolFilter().addMust(term).addShould(term).addMustNot(term),
        query = new Query().setFiltered(boolFilter),
        etalon = {
          "index": null,
          "type": null,
          "body": {
            "query": {
              "filtered": {
                "filter": {
                  "bool": {
                    "must": [
                      {
                        "term": {
                          "field": "value"
                        }
                      }
                    ],
                    "must_not": [
                      {
                        "term": {
                          "field": "value"
                        }
                      }
                    ],
                    "should": [
                      {
                        "term": {
                          "field": "value"
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        };

    it('`get` result should be equal to etalon', () => expect(query.get()).to.be.deep.equal(etalon))
  })
});