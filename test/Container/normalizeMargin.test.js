import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.normalizeMargin(
            undefined
        )
    ).toStrictEqual(
        undefined
    );
});

test("number", () => {
    expect(
        Container.normalizeMargin(
            1
        )
    ).toStrictEqual(
        {
            top: 1,
            bottom: 1,
            left: 1,
            right: 1
        }
    );
});

test("partial", () => {
    expect(
        Container.normalizeMargin(
            {
                top: 1
            }
        )
    ).toStrictEqual(
        {
            top: 1
        }
    );
});
