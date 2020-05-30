import Container from '../../src/Container';

test('undefined', () => {
    expect(
        Container.compileMargin(undefined)
    ).toStrictEqual('');
});

test('number', () => {
    expect(
        Container.compileMargin(1)
    ).toStrictEqual('margin-top: 1px;margin-bottom: 1px;margin-left: 1px;margin-right: 1px');
});

test('not all', () => {
    expect(
        Container.compileMargin({top: 1, bottom: 1})
    ).toStrictEqual('margin-top: 1px;margin-bottom: 1px');
});