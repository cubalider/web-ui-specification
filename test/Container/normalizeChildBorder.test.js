import Container from "../../src/Container";

test("undefined", () => {
    expect(
        Container.normalizeChildBorder(
            undefined,
            {
                "width": 1,
                "style": "dashed",
                "color": "red"
            },
        )
    ).toStrictEqual(
        {
            "width": 1,
            "style": "dashed",
            "color": "red"
        }
    );
});

test("number", () => {
    expect(
        Container.normalizeChildBorder(
            1,
            {
                "width": 0,
                "style": "dashed",
                "color": "red"
            },
        )
    ).toStrictEqual(
        {
            "width": 1,
            "style": "dashed",
            "color": "red"
        }
    );
});

test("object", () => {
    expect(
        Container.normalizeChildBorder(
            {
                width: 2
            },
            {
                "width": 1,
                "style": "dashed",
                "color": "red"
            },
        )
    ).toStrictEqual(
        {
            "width": 2,
            "style": "dashed",
            "color": "red"
        }
    );
});
