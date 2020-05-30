import Container from '../../src/Container';

test('undefined', () => {
    expect(
        Container.compilePosition(undefined)
    ).toStrictEqual('');
});

test('top', () => {
    expect(
        Container.compilePosition({top: 1})
    ).toStrictEqual('position: absolute;top: 1px');
});
