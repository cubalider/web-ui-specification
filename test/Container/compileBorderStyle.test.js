import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.compileBorderStyle(undefined)
    ).toStrictEqual("");
});

test("number", () => {
    expect(
        Container.compileBorderStyle(1)
    ).toStrictEqual("border-style: solid;");
});

test("shorthand", () => {
    expect(
        Container.compileBorderStyle("1 solid red")
    ).toStrictEqual("border-style: solid;");
});

test("object", () => {
    expect(
        Container.compileBorderStyle({style: "solid"})
    ).toStrictEqual("border-style: solid;");
});

test("just width", () => {
    expect(
        Container.compileBorderStyle({width: 1})
    ).toStrictEqual("border-style: solid;");
});