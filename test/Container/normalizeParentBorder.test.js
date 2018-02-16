import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.normalizeParentBorder(
            undefined
        )
    ).toStrictEqual(
        {
            width: 0,
            style: "solid",
            color: "black"
        }
    );
});

test("number", () => {
    expect(
        Container.normalizeParentBorder(
            1
        )
    ).toStrictEqual(
        {
            width: 1,
            style: "solid",
            color: "black"
        }
    );
});

test("string", () => {
    expect(
        Container.normalizeParentBorder(
            "1 dashed red"
        )
    ).toStrictEqual(
        {
            width: 1,
            style: "dashed",
            color: "red"
        }
    );
});


test("object without anything", () => {
    expect(
        Container.normalizeParentBorder(
            {

            }
        )
    ).toStrictEqual(
        {
            width: 0,
            style: "solid",
            color: "black"
        }
    );
});

test("object with all", () => {
    expect(
        Container.normalizeParentBorder(
            {
                width: 2,
                style: "dashed",
                color: "red"
            }
        )
    ).toStrictEqual(
        {
            width: 2,
            style: "dashed",
            color: "red"
        }
    );
});
