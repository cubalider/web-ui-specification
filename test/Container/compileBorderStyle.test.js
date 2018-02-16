import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderStyle(undefined)
    ).toStrictEqual([
        "border-top-style: solid;",
        "border-right-style: solid;",
        "border-bottom-style: solid;",
        "border-left-style: solid;"
    ].join(""));
});

test("number", () => {
    expect(
        Container.compileBorderStyle(1)
    ).toStrictEqual([
        "border-top-style: solid;",
        "border-right-style: solid;",
        "border-bottom-style: solid;",
        "border-left-style: solid;"
    ].join(""));
});

test("shorthand", () => {
    expect(
        Container.compileBorderStyle("1 dashed red")
    ).toStrictEqual([
        "border-top-style: dashed;",
        "border-right-style: dashed;",
        "border-bottom-style: dashed;",
        "border-left-style: dashed;"
    ].join(""));
});

test("object", () => {
    expect(
        Container.compileBorderStyle({style: "dashed"})
    ).toStrictEqual([
        "border-top-style: dashed;",
        "border-right-style: dashed;",
        "border-bottom-style: dashed;",
        "border-left-style: dashed;"
    ].join(""));
});

test("object partial", () => {
    expect(
        Container.compileBorderStyle({bottom: {style: "dashed"}})
    ).toStrictEqual([
        "border-top-style: solid;",
        "border-right-style: solid;",
        "border-bottom-style: dashed;",
        "border-left-style: solid;"
    ].join(""));
});