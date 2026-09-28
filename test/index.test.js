import test from "node:test";import assert from "node:assert/strict";import{ndjsonToJson,jsonToNdjson}from"../src/index.js";
test("parses NDJSON",()=>assert.deepEqual(ndjsonToJson('{"a":1}\n{"b":2}\n'),[{a:1},{b:2}]));
test("serializes NDJSON",()=>assert.equal(jsonToNdjson([{a:1},{b:2}]),'{"a":1}\n{"b":2}'));
test("reports line errors",()=>assert.throws(()=>ndjsonToJson('{"a":1}\n{bad}'),/line 2/u));
