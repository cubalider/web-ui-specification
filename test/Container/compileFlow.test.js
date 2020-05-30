import Container from '../../src/Container';

test('undefined', () => {
    expect(
        Container.compileFlow(undefined)
    ).toStrictEqual('');
});

test('row', () => {
    expect(
        Container.compileFlow('row')
    ).toStrictEqual('flex-direction: row');
});

test('row wrap', () => {
    expect(
        Container.compileFlow('row wrap')
    ).toStrictEqual('flex-direction: row;flex-wrap: wrap');
});