import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderWidth(undefined)
    ).toStrictEqual([
        "border-top-width: 0px;",
        "border-right-width: 0px;",
        "border-bottom-width: 0px;",
        "border-left-width: 0px;"
    ].join(""));
});

test("number", () => {
    expect(
        Container.compileBorderWidth(1)
    ).toStrictEqual([
        "border-top-width: 1px;",
        "border-right-width: 1px;",
        "border-bottom-width: 1px;",
        "border-left-width: 1px;"
    ].join(""));
});

test("shorthand", () => {
    expect(
        Container.compileBorderWidth("1 solid red")
    ).toStrictEqual([
        "border-top-width: 1px;",
        "border-right-width: 1px;",
        "border-bottom-width: 1px;",
        "border-left-width: 1px;"
    ].join(""));
});

test("object", () => {
    expect(
        Container.compileBorderWidth({width: 1})
    ).toStrictEqual([
        "border-top-width: 1px;",
        "border-right-width: 1px;",
        "border-bottom-width: 1px;",
        "border-left-width: 1px;"
    ].join(""));
});

test("object partial", () => {
    expect(
        Container.compileBorderWidth({bottom: {width: 1}})
    ).toStrictEqual([
        "border-top-width: 0px;",
        "border-right-width: 0px;",
        "border-bottom-width: 1px;",
        "border-left-width: 0px;"
    ].join(""));
});