import test from "node:test";
import assert from "node:assert/strict";
import spec, { source, apiPaths } from "../src/index.js";

test("tally-spec: exports contract integrity", () => {
    assert.ok(source, "source should be defined");
    assert.ok(source.tally, "source.tally should be defined");
    assert.ok(Array.isArray(apiPaths), "apiPaths should be an array");
    assert.ok(apiPaths.length > 0, "apiPaths should not be empty");
    assert.strictEqual(spec.source, source, "default export should match named export source");
    assert.strictEqual(spec.apiPaths, apiPaths, "default export should match named export apiPaths");
});

test("tally-spec: all api.json paths must resolve in source.json", () => {
    for (const dotPath of apiPaths) {
        const segments = dotPath.split(".");
        let current = source;
        for (const segment of segments) {
            assert.ok(current && typeof current === "object", `Segment path failed at '${segment}' for '${dotPath}'`);
            current = current[segment];
        }
        assert.ok(current, `Path '${dotPath}' must resolve to a valid leaf in source`);
        assert.ok(current.action, `Leaf at '${dotPath}' must have an 'action' property`);
        assert.ok(current.resource, `Leaf at '${dotPath}' must have a 'resource' property`);
        assert.ok(current.description, `Leaf at '${dotPath}' must have a 'description' property`);
    }
});
