import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderColor(undefined)
    ).toStrictEqual([
        "border-top-color: black;",
        "border-right-color: black;",
        "border-bottom-color: black;",
        "border-left-color: black;"
    ].join(""));
});

test("number", () => {
    expect(
        Container.compileBorderColor(1)
    ).toStrictEqual([
        "border-top-color: black;",
        "border-right-color: black;",
        "border-bottom-color: black;",
        "border-left-color: black;"
    ].join(""));
});

test("shorthand", () => {
    expect(
        Container.compileBorderColor("1 dashed red")
    ).toStrictEqual([
        "border-top-color: red;",
        "border-right-color: red;",
        "border-bottom-color: red;",
        "border-left-color: red;"
    ].join(""));
});

test("object", () => {
    expect(
        Container.compileBorderColor({color: "red"})
    ).toStrictEqual([
        "border-top-color: red;",
        "border-right-color: red;",
        "border-bottom-color: red;",
        "border-left-color: red;"
    ].join(""));
});

test("object partial", () => {
    expect(
        Container.compileBorderColor({bottom: {color: "red"}})
    ).toStrictEqual([
        "border-top-color: black;",
        "border-right-color: black;",
        "border-bottom-color: red;",
        "border-left-color: black;"
    ].join(""));
});