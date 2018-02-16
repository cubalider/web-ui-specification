import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compilePadding(undefined)
    ).toStrictEqual("");
});

test("number", () => {
    expect(
        Container.compilePadding(1)
    ).toStrictEqual("padding-top: 1px;padding-bottom: 1px;padding-left: 1px;padding-right: 1px;");
});

test("partial", () => {
    expect(
        Container.compilePadding({top: 1, bottom: 1})
    ).toStrictEqual("padding-top: 1px;padding-bottom: 1px;");
});