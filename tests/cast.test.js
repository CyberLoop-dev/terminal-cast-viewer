import test from "node:test";
import assert from "node:assert/strict";
import {parseCast,stripAnsi} from "../cast.js";
test("parses asciinema v2 output events",()=>{const input='{"version":2,"width":80,"height":24}\n[0.1,"o","hello\\n"]\n[0.2,"i","ls"]';const result=parseCast(input);assert.equal(result.events.length,1);assert.equal(result.events[0].output,"hello\n");assert.equal(result.duration,0.1);});
test("rejects unsupported versions",()=>assert.throws(()=>parseCast('{"version":1}'),/v2/));
test("strips common ANSI CSI sequences",()=>assert.equal(stripAnsi("\u001b[31mred\u001b[0m"),"red"));
