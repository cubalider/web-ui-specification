import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.normalizePadding(
            undefined
        )
    ).toStrictEqual(
        undefined
    );
});

test("number", () => {
    expect(
        Container.normalizePadding(
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
        Container.normalizePadding(
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
