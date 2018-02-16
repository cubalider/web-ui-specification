import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderWidth(undefined)
    ).toStrictEqual("");
});

test("number", () => {
    expect(
        Container.compileBorderWidth(1)
    ).toStrictEqual("border-width: 1px;");
});

test("object", () => {
    expect(
        Container.compileBorderWidth({width: 1})
    ).toStrictEqual("border-top-width: 1px;border-bottom-width: 1px;border-left-width: 1px;border-right-width: 1px;");
});

test("object partial", () => {
    expect(
        Container.compileBorderWidth({bottom: {width: 1}})
    ).toStrictEqual("border-bottom-width: 1px;");
});